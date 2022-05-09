import React from "react";
import { Grid } from "@mui/material";
import Typography from "./libs/components/Typography";
import Autocomplete from "./libs/components/SelectField";
import TextField from "./libs/components/TextField";
import CustomThemeProvider from "./libs/components/ProvideTheme";

const options = [
  {
    label: "Opção 1",
    value: 1,
  },
  {
    label: "Opção 2",
    value: 2,
  },
  {
    label: "Opção 3",
    value: 3,
  },
];

function StoryBook() {
  return (
    <CustomThemeProvider>
      <Typography component="h1" size="head" color="primary" weight="bold">
        Componentes customizados
      </Typography>
      <Grid container spacing={3} style={{ marginTop: 20 }}>
        <Grid item lg={4}>
          <Autocomplete label="Escolha" options={options} multiple />
        </Grid>
        <Grid item lg={4}>
          <TextField label="Texto" />
        </Grid>
      </Grid>
    </CustomThemeProvider>
  );
}

export default StoryBook;
