import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
`;

// @todo use prefer-reduced-motion for users who have disabled animation
export const Loader = styled.div`
  ${({ theme }) => {
    const { colors, spacing, borderRadius, fontSizes, borders } = theme;
    return {
      padding: spacing.small,
      border: `${borders.thick} ${colors.text}`,
      borderTop: `${borders.thick} ${colors.secondary}`,
      color: colors.text,
      backgroundColor: colors.background,
      fontSize: fontSizes.small,
      margin: spacing.medium,
    };
  }}

  width: 40px;
  height: 40px;
  animation: ${spin} 2s linear infinite;
`;
