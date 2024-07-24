import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Loader from '../../common/components/loader/Loader';
import NoData from '../../common/components/no-data/NoData';
import Datatable from '../../common/components/datatable/Datatable';
import { Option, SelectInput } from '../../common/styles/components/Select';
import { Button } from '../../common/styles/components/Button';
import Text from '../../common/components/text/Text';
import FlexBox from '../../common/styles/components/FlexBox';
import fetchClient from '../../common/api/api';
import { UniversityInfo } from '../../common/types/favorite';
import { SearchContainer, SearchInput, TableContainer } from './SearchPage.styled';

const SearchPage = () => {
  const [data, setData] = useState<UniversityInfo[]>([]);
  const [countryFilter, setCountryFilter] = useState<Array<{ id: string; country: string }>>([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loader, setLoader] = useState(true);
  const [apiMetaData, setApiMetaData] = useState<{
    performanceTracking: PerformanceEntryList;
    responseCode: number;
    responseTime: number;
  } | null>(null);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const clearAll = () => {
    setSearchQuery('');
    setSelectedCountry('Canada');
  };

  const processApiResponse = (query: string, statusCode: number, apiResponse: UniversityInfo[]) => {
    const fetchPerformanceTiming = performance
      .getEntriesByType('resource')
      .find((pf) => pf.name === `http://universities.hipolabs.com/search${query}`);

    setApiMetaData({
      performanceTracking: performance.getEntriesByType('resource'),
      responseCode: statusCode,
      responseTime: Math.floor(fetchPerformanceTiming?.duration || 0),
    });

    if (!searchQuery && !selectedCountry) {
      const countries = apiResponse.reduce(
        (acc: any, response: any) => {
          if (!acc.uniqueCountries.has(response.country)) {
            acc.uniqueCountries.add(response.country);
            acc.result.push({ id: response.domains?.[0], country: response.country });
          }
          return acc;
        },
        { uniqueCountries: new Set(), result: [] },
      ).result;
      setCountryFilter([{ id: 'All', country: 'All' }, ...countries]);
    }
    setData(apiResponse);
    setLoader(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);

        const query = searchQuery
          ? `?country=${selectedCountry}&name=${searchQuery}`
          : `?country=${selectedCountry}`;

        const { statusCode, apiResponse } = await fetchClient(`/search${query}`, {} as any);
        processApiResponse(query, statusCode, apiResponse);
      } catch (error: unknown) {
        setLoader(false);
        console.error('Error fetching data:', error);
      }
    };
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [selectedCountry, searchQuery]);

  const updateSelectedCountry = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCountry(event.target.value === 'All' ? '' : event.target.value);
  };

  const updateSearchQuery = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
  };

  return (
    <SearchContainer flexdirection="column" justifycontent="center" alignitems="center">
      <Text
        type="title"
        role="header"
        aria-label="Search Page"
        aria-description="This page lists the university and their associated information"
      >
        Search
      </Text>
      <FlexBox flexdirection="row" justifycontent="center" alignitems="center">
        <SelectInput
          tabIndex={0}
          role="Dropdown"
          aria-label="List of countries"
          as="select"
          value={selectedCountry}
          onChange={updateSelectedCountry}
        >
          {countryFilter.map((ctF) => (
            <Option key={ctF.id} value={ctF.country}>
              {ctF.country}
            </Option>
          ))}
        </SelectInput>
        <SearchInput
          type="text"
          placeholder="Search by name..."
          tabIndex={0}
          role="Text Box"
          aria-description="Input to filter the list of universities by name"
          value={searchQuery}
          onChange={updateSearchQuery}
        />
        <Button onClick={clearAll} aria-description="Button to clear the filter selection">
          Clear All
        </Button>
        <FlexBox flexdirection="column" justifycontent="center" alignitems="center">
          {apiMetaData?.responseCode && (
            <Text
              type="body"
              role="label"
              aria-label={
                'Performance tracking of the API, response code is' + apiMetaData?.responseCode
              }
            >
              API response code: {apiMetaData?.responseCode}
            </Text>
          )}
          {apiMetaData?.responseTime && (
            <Text
              type="body"
              role="label"
              aria-label={`Performance tracking of the API, response time is ${apiMetaData?.responseTime} ms`}
            >
              API response time: {apiMetaData?.responseTime} ms
            </Text>
          )}
        </FlexBox>
      </FlexBox>
      <TableContainer flexdirection="column" justifycontent="center" alignitems="center">
        {loader ? <Loader /> : data.length > 0 ? <Datatable data={data} /> : <NoData />}
      </TableContainer>
    </SearchContainer>
  );
};

export default SearchPage;
