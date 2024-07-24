import styled from 'styled-components';
import { media } from '../theme/media';

export const Button = styled.button`
  ${media.tablet`
    width: 80%;
    padding: ${(props) => props.theme.spacing.xsmall};
  `};

  ${media.mobile`
    width: 80%;
    padding: ${(props) => props.theme.spacing.xsmall};
  `};

  ${({ theme }) => {
    const { colors, spacing, borderRadius, fontSizes, borders, fontWeights } = theme;
    return {
      padding: spacing.small,
      margin: spacing.medium,
      backgroundColor: colors.primary,
      color: colors.secondary,
      border: `${borders.thin} ${colors.background}`,
      borderRadius,
      fontSize: fontSizes.medium,
      cursor: 'pointer',
    };
  }}
`;
