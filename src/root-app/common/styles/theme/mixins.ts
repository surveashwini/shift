import { css } from 'styled-components';

export const textStyle = css`
  ${({ theme }) => {
    const { colors, spacing, borderRadius, fontSizes, borders, fontWeights } = theme;
    return css`
      padding: ${spacing.small};
      border: ${borders.thin} ${colors.primary};
      color: ${colors.secondary};
      border-radius: ${borderRadius};
      font-size: ${fontSizes.small};
      margin: ${spacing.medium};
      font-weight: ${fontWeights.normal};
    `;
  }}
`;
