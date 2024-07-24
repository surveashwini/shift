import styled from 'styled-components';
import { textStyle } from '../theme/mixins';

export const Label = styled.label`
  ${textStyle}
  ${({ theme }) => {
    const { colors } = theme;
    return {
      backgroundColor: colors.info,
      width: '130px',
      wordBreak: 'break-word',
    };
  }}
`;
