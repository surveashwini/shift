import styled from 'styled-components';
import { Input } from '../../common/styles/components/Input';
import { media } from '../../common/styles/theme/media';
import FlexBox from '../../common/styles/components/FlexBox';

export const SearchInput = styled(Input)`
  width: 300px;

  ${media.mobile`
    width: 100%;
  `}

  ${media.tablet`
    width: 80%;
  `}
`;

export const SearchContainer = styled(FlexBox)`
  height: 100%;
  max-width: 1040px;
  width: 100%;
  margin: auto;
  padding: 2rem;
`;

export const TableContainer = styled(FlexBox)`
  width: 100%;
  flex-basis: 100%;
`;
