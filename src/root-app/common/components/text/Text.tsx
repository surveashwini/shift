import React from 'react';
import styled, { css } from 'styled-components';

const StyledText = styled.div`
  color: ${({ color, theme }) => color || theme.colors.text};

  ${({ as }) =>
    as === 'h2' &&
    css`
      ${({ theme }) => {
        const { colors, spacing } = theme;
        return {
          padding: spacing.medium,
          margin: spacing.medium,
          color: colors.text,
          minWidth: '180px',
          textAlign: 'center',
        };
      }}
    `}

  ${({ as }) =>
    as === 'p' &&
    css`
      ${({ theme }) => {
        const { colors, spacing, borders } = theme;
        return {
          padding: spacing.small,
          margin: spacing.medium,
          border: `${borders.thin} ${colors.primary}`,
          color: colors.text,
          minWidth: '180px',
          textAlign: 'center',
          backgroundColor: colors.info,
        };
      }}
    `}
`;

const Text = ({
  type = 'body',
  children,
  ...props
}: {
  type: 'title' | 'body';
  children: React.ReactNode;
  role?: string;
  'aria-label'?: string;
  'aria-description'?: string;
}) => {
  const Element = type === 'title' ? 'h2' : 'p';

  return (
    <StyledText as={Element} tabIndex={0} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
