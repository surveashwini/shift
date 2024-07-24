import styled from 'styled-components';
import { media } from '../theme/media';

export const Input = styled.input`
  ${({ theme }) => {
    const { colors, spacing, borderRadius, fontSizes, borders } = theme;
    return {
      padding: spacing.small,
      border: `${borders.thin} ${colors.primary}`,
      color: colors.text,
      borderRadius,
      backgroundColor: colors.background,
      fontSize: fontSizes.medium,
      margin: spacing.medium,
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

  ${media.desktop`
    width: 60%;
  `}
`;
