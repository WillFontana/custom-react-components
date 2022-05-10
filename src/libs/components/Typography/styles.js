import { Typography } from '@mui/material';
import styled from 'styled-components';
import { handleTextColorTheme } from '../../../styles/colors';

const StyledTypography = styled(Typography)`
  && {
    ${({ theme, weight }) =>
      weight && `font-weight: ${theme.typography.weights[weight]};`}

    ${({ theme, size }) =>
      size && `font-size: ${theme.typography.sizes[size]}px;`}

    ${({ theme, color }) =>
      color && `color: ${handleTextColorTheme(theme, color)};`}
  }
`;

export default StyledTypography;
