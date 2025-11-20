import { createTheme } from "@mui/material";

export const theme = createTheme({ 
  palette: { 
    mode: 'light',
     primary: { 
      main: '#1976d2'
     },
      secondary: { 
        main: '#9c27b0'
      },
     },
     typography: { 
      fontFamily: [ 'Roboto', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Helvetica', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', ].join(','),
     },
    });