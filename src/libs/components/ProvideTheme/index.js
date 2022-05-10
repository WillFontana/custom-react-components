import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@material-ui/styles';
import PropTypes from 'prop-types';

import theme from '../../../styles/theme';

export default function CustomThemeProvider({ children }) {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

CustomThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
