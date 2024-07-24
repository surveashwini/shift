import React, { useRef } from 'react';
import styled from 'styled-components';
import { FaRegStar } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FixedSizeGrid as Grid } from 'react-window';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { Favorite, UniversityInfo } from '../../types/favorite';
import { ClickableDiv } from '../../styles/components/ClickableDiv';
import useSessionStorage from '../../hooks/sessionStorage';
import NoData from '../no-data/NoData';

const ColumnHeader = styled.div`
  font-weight: bold;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CellContainer = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  word-break: break-word;
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Link = styled.a`
  text-decoration: none;
  word-break: break-all;
  &:hover {
    text-decoration: underline;
  }
`;

const Datatable = ({ data }: { data: UniversityInfo[] | Favorite[] | null }) => {
  const [favorites, isExistingFavourite, addFavorite, removeFavorite] = useSessionStorage(
    'favorites',
    [],
  );

  const displayedData = data || favorites;

  const toggleFavourite = (item: UniversityInfo | Favorite): void => {
    if (!isExistingFavourite(`${item.domains[0]}${item.web_pages[0]}${item.name}`)) {
      addFavorite({
        id: `${item.domains[0]}${item.web_pages[0]}${item.name}`,
        name: item.name,
        domains: item.domains,
        web_pages: item.web_pages,
        state: (item as UniversityInfo)?.['state-province'] || '-',
      } as Favorite);
    } else {
      removeFavorite(`${item.domains[0]}${item.web_pages[0]}${item.name}`);
    }
  };

  const Cell = ({
    columnIndex,
    rowIndex,
    style,
  }: {
    columnIndex: number;
    rowIndex: number;
    style: any;
  }) => {
    return (
      <>
        {displayedData[rowIndex] && columnIndex === 0 && (
          <CellContainer
            style={style}
            tabIndex={0}
            role="cell"
            aria-label={`Row ${rowIndex + 1} Univeristy Name is ${displayedData[rowIndex]?.name}`}
          >
            {displayedData[rowIndex]?.name}
          </CellContainer>
        )}
        {displayedData[rowIndex] && columnIndex === 1 && (
          <CellContainer
            style={style}
            tabIndex={0}
            role="cell"
            aria-label={`State is ${(displayedData[rowIndex] as Favorite)?.state || 'unset'}`}
          >
            {(displayedData[rowIndex] as Favorite)?.state || '-'}
          </CellContainer>
        )}
        {displayedData[rowIndex] && columnIndex === 2 && (
          <CellContainer style={style}>
            <Link
             tabIndex={0}
             role="cell"
             aria-label={`Website is ${displayedData[rowIndex]?.web_pages[0] || 'unset'}`}
              href={displayedData[rowIndex]?.web_pages[0]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {displayedData[rowIndex]?.web_pages[0]}
            </Link>
          </CellContainer>
        )}
        {displayedData[rowIndex] && columnIndex === 3 && (
          <CellContainer role="button" style={style}>
            <ClickableDiv
              tabIndex={0}
              role="cell"
              aria-label={`Action button Favourite`}
              aria-description="to set the university as favourite/unfavourite"
              onClick={() => toggleFavourite(displayedData[rowIndex])}
            >
              {!isExistingFavourite(
                `${displayedData[rowIndex]?.domains[0]}${displayedData[rowIndex]?.web_pages[0]}${displayedData[rowIndex]?.name}`,
              ) ? (
                <FaRegStar />
              ) : (
                <FaStar />
              )}
            </ClickableDiv>
          </CellContainer>
        )}
      </>
    );
  };
  const Column = ({ index, style }: { index: number; style: any }) => (
    <>
      {index === 0 && (
        <ColumnHeader
          tabIndex={0}
          role="columnheader"
          aria-label={`Table First Column is Name`}
          style={style}
        >
          Name
        </ColumnHeader>
      )}
      {index === 1 && (
        <ColumnHeader
          tabIndex={0}
          role="columnheader"
          aria-label={`Table Second Column is State`}
          style={style}
        >
          State
        </ColumnHeader>
      )}
      {index === 2 && (
        <ColumnHeader
          tabIndex={0}
          role="columnheader"
          aria-label={`Table Third Column is Website`}
          style={style}
        >
          Website
        </ColumnHeader>
      )}
      {index === 3 && (
        <ColumnHeader
          tabIndex={0}
          role="columnheader"
          aria-label={`Table Fourth Column is Actions`}
          style={style}
        >
          Actions
        </ColumnHeader>
      )}
    </>
  );
  const listRef = useRef<any>();
  const gridRef = useRef();

  const handleGridScroll = ({ scrollLeft }: { scrollLeft: any }) => {
    if (listRef.current) {
      listRef.current.scrollTo(scrollLeft);
    }
  };

  return displayedData?.length > 0 ? (
    <div
      style={{
        height: '70vh',
        flex: 1,
        width: '100%',
        overflow: 'hidden',
      }}
      role="table"
      tabIndex={0}
      aria-label={`University List, 4 columns ${displayedData.length} rows`}
    >
      <AutoSizer aria-hidden="true">
        {({ height, width }: { height: number; width: number }) => {
          return (
            <>
              <List
                aria-hidden="true"
                height={50}
                itemCount={4}
                itemSize={246}
                layout="horizontal"
                width={width}
                style={{ overflowX: 'hidden' }}
                ref={listRef}
              >
                {Column}
              </List>
              <Grid
                aria-hidden="true"
                columnCount={4}
                columnWidth={240}
                height={height - 50}
                rowCount={displayedData.length}
                rowHeight={65}
                width={width}
                onScroll={({ scrollLeft }) => handleGridScroll({ scrollLeft })}
                innerRef={gridRef}
              >
                {Cell}
              </Grid>
            </>
          );
        }}
      </AutoSizer>
    </div>
  ) : (
    <NoData />
  );
};

export default Datatable;
