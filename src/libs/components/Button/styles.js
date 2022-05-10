import styled from 'styled-components';
import { Button } from '@mui/material';

import {
  handleColorTheme,
  handleTextContrastColorTheme,
} from '../../../styles/colors';

const SIZES = (theme) => ({
  small: `padding: ${theme.spacing()} ${theme.spacing(
    2
  )}px;font-size: 11px;max-height: 34px;min-height: 34px;`,
  medium: `padding: ${theme.spacing()} ${theme.spacing(
    2
  )};font-size: 13px;max-height: 41px;min-height: 41px;`,
  large: `padding: ${theme.spacing(1.3)} ${theme.spacing(
    2.4
  )};font-size: 15px;max-height: 50px;min-height: 50px;`,
  xlarge: `padding: ${theme.spacing(1.6)} ${theme.spacing(
    2.8
  )};font-size: 17px;max-height: 58px;min-height: 58px;`,
});

const TYPES = ({ top, left, right, bottom }) => ({
  floating: `position: absolute; top: ${top};left: ${left};right: ${right};bottom: ${bottom};`,
  static: 'position: relative;',
});

const FILL_TYPES = (theme, color) => {
  const colorHex = handleColorTheme(theme, color);
  const contrastColorHex = handleTextContrastColorTheme(theme, color);

  return {
    filled: `
    background-color: ${colorHex};
    color: ${contrastColorHex};
    &:hover {
        background-color: ${colorHex}dd;
    }
    `,
    outlined: `
    transform: scale(.95);
    background-color: #ffffff00;
    border: 2px solid ${colorHex};
    color: ${colorHex};
    &:hover {
      background-color: ${colorHex}11;
    }
    `,
  };
};

const handleColorPriority = (severity, variant) => severity || variant;

const StyledButton = styled(Button)`
  && {
    ${({ theme, filltype, variant, severity }) =>
      FILL_TYPES(theme, handleColorPriority(severity, variant))[filltype]}
    ${({ theme, size }) => SIZES(theme)[size]}
    ${({ type, anchor = {} }) => TYPES(anchor)[type]}
    ${({ disabled }) =>
      disabled &&
      `
        background-color: #e2e2e2;
    border-color: #e2e2e2;
    `}
  }
`;

export default StyledButton;
