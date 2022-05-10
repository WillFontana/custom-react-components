const palleteVariants = [
  'primary',
  'secondary',
  'warning',
  'error',
  'success',
  'info',
];

export const handleColorTheme = (theme, type) => theme.palette[type].main;

export const handleTextColorTheme = (theme, color) => {
  if (palleteVariants.includes(color)) {
    return theme.palette[color].main;
  }

  return theme.typography.colors[color];
};

export const handleTextContrastColorTheme = (theme, type) =>
  theme.palette[type].contrastText;
