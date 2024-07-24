import React from 'react';
import Datatable from '../../common/components/datatable/Datatable';
import Text from '../../common/components/text/Text';
import FlexBox from '../../common/styles/components/FlexBox';
import styled from 'styled-components';
// @todo low-priority add support for alias
// so that above URL looks import Datatable from '@/common/components/datatable/Datatable';

const FavoritesPageWrapper = styled(FlexBox)`
  height: 100%;
  max-width: 1025px;
  width: 100%;
  margin: auto;
  padding: 2rem;
`;

const DataWrapper = styled(FlexBox)`
  flex-basis: 100%;
  width: 100%;
`;

const FavoritesPage = () => {
  return (
    <FavoritesPageWrapper flexdirection="column" justifycontent="center" alignitems="center">
      <Text type="title">Favourites</Text>
      <DataWrapper flexdirection="column" justifycontent="center" alignitems="center">
        {<Datatable data={null} />}
      </DataWrapper>
    </FavoritesPageWrapper>
  );
};

export default FavoritesPage;
