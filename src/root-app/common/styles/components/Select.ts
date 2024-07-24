import styled from 'styled-components';
import { Input } from './Input';
import { media } from '../theme/media';

export const SelectInput = styled(Input)`
  width: 200px;

  ${media.mobile`
    width: -webkit-fill-available;
    width: -moz-available;
    width: fill-available;
    width: 100%;
  `}

  ${media.tablet`
    width: 80%;
  `}
`;

export const Option = styled.option`
  ${({ theme }) => {
    const { colors, fontSizes } = theme;
    return {
      backgroundColor: colors.background,
      fontSize: fontSizes.medium,
    };
  }}

  ${media.mobile`
    width: -webkit-fill-available;
    width: -moz-available;
    width: fill-available;
    width: 100%;
  `}

  ${media.tablet`
    width: 80%;
  `}
`;
