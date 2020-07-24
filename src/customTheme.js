const customTheme = {
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  direction: "ltr",
  mixins: {
    toolbar: {
      minHeight: 56,
      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 48
      },
      "@media (min-width:600px)": {
        minHeight: 64
      }
    }
  },
  overrides: {
    MuiButton: {
      outlined: {
        padding: "9px 30px"
      },
      text: {
        padding: "10px 32px"
      }
    },
    MuiTableCell: {
      root: {
        padding: "3px 4px 4px 4px"
      }
    }
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
      grey: "#bdbdbd",
      green: "#1eb980",
      greenBackground: "#dffaf0",
      yellow: "#ffc107",
      yellowBackground: "#fff4d3"
    },
    type: "light",
    primary: {
      "50": "#f5ffde",
      "300": "#aed581",
      "700": "#689f38",
      main: "#81BC00",
      contrastText: "#fff",
      light: "#aed581",
      dark: "#689f38"
    },
    secondary: {
      "300": "#fcc570",
      "700": "#f57c00",
      main: "#ff9800",
      contrastText: "#fff",
      light: "rgb(255, 172, 51)",
      dark: "rgb(178, 106, 0)"
    },
    error: {
      "100": "#ffe2df",
      "300": "#ffe2df",
      main: "#ff6859",
      contrastText: "#fff",
      light: "#ffe2df",
      dark: "rgb(178, 72, 62)"
    },
    grey: {
      "50": "#ffffff",
      "100": "#f5f5f5",
      "200": "#eeeeee",
      "300": "#e0e0e0",
      "400": "#bdbdbd",
      "500": "#9e9e9e",
      "600": "#757575",
      "700": "#616161",
      "800": "#424242",
      "900": "#232323",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      primary: "#333333",
      secondary: "#8e8e8e",
      disabled: "#bdbdbd",
      hint: "rgba(0, 0, 0, 0.38)"
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: "#f5f5f5",
      default: "#FFFFFF"
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(0, 0, 0, 0.14)",
      disabled: "#bdbdbd",
      disabledBackground: "#eeeeee"
    }
  },
  props: {},
  shadows: [
    "none",
    "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
    "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
    "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
  ],
  typography: {
    fontFamily: "Times New Roman",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    display4: {
      fontSize: "7rem",
      fontWeight: 300,
      fontFamily: "Times New Roman",
      letterSpacing: "-.04em",
      lineHeight: "1.14286em",
      marginLeft: "-.04em",
      color: "#8e8e8e"
    },
    display3: {
      fontSize: "3.5rem",
      fontWeight: 400,
      fontFamily: "Times New Roman",
      letterSpacing: "-.02em",
      lineHeight: "1.30357em",
      marginLeft: "-.02em",
      color: "#8e8e8e"
    },
    display2: {
      fontSize: "2.8125rem",
      fontWeight: 400,
      fontFamily: "Times New Roman",
      lineHeight: "1.13333em",
      marginLeft: "-.02em",
      color: "#8e8e8e"
    },
    display1: {
      fontSize: "2.125rem",
      fontWeight: 400,
      fontFamily: "Times New Roman",
      lineHeight: "1.20588em",
      color: "#8e8e8e"
    },
    headline: {
      fontSize: "1.5rem",
      fontWeight: 400,
      fontFamily: "Times New Roman",
      lineHeight: "1.35417em",
      color: "#333333"
    },
    title: {
      fontSize: "1.3125rem",
      fontWeight: 500,
      fontFamily: "Times New Roman",
      lineHeight: "1.16667em",
      color: "#333333"
    },
    subheading: {
      fontSize: "1rem",
      fontWeight: 400,
      fontFamily: "Times New Roman",
      lineHeight: "1.5em",
      color: "#333333"
    },
    body2: {
      color: "inherit",
      fontFamily:
        ' "SourceSansPro-Regular" , "Helvetica", "Times New Roman", sans-serif ',
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "normal"
    },
    body1: {
      color: "inherit",
      fontFamily:
        ' "SourceSansPro-Regular" , "Helvetica", "Times New Roman", sans-serif ',
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "normal"
    },
    caption: {
      color: "inherit",
      fontFamily:
        ' "SourceSansPro-Regular" , "Helvetica", "Times New Roman", sans-serif ',
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "normal"
    },
    button: {
      color: "inherit",
      fontFamily:
        ' "Bariol-Regular" , "Helvetica", "Times New Roman", sans-serif ',
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "normal",
      textTransform: "none"
    },
    h1: {
      color: "inherit",
      fontFamily:
        ' "Bariol-Regular" , "Helvetica", "Times New Roman", sans-serif ',
      fontWeight: 300,
      fontSize: "30px",
      lineHeight: "normal"
    },
    h2: {
      color: "inherit",
      fontFamily:
        ' "Bariol-Regular" , "Helvetica", "Times New Roman", sans-serif ',
      fontWeight: 300,
      fontSize: "24px",
      lineHeight: "normal"
    },
    h3: {
      color: "inherit",
      fontFamily:
        ' "Bariol-Regular" , "Helvetica", "Times New Roman", sans-serif ',
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "normal"
    },
    h4: {
      color: "inherit",
      fontFamily:
        ' "Bariol-Regular" , "Helvetica", "Times New Roman", sans-serif ',
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "normal"
    },
    h5: {
      color: "inherit",
      fontFamily:
        ' "Bariol-Regular" , "Helvetica", "Times New Roman", sans-serif ',
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "normal"
    },
    h6: {
      color: "inherit",
      fontFamily:
        ' "Bariol-Regular" , "Helvetica", "Times New Roman", sans-serif ',
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "normal"
    },
    subtitle1: {
      color: "inherit",
      fontFamily:
        ' "Bariol-Regular" , "Helvetica", "Times New Roman", sans-serif ',
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "normal"
    },
    subtitle2: {
      color: "inherit",
      fontFamily:
        ' "Bariol-Regular" , "Helvetica", "Times New Roman", sans-serif ',
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "normal"
    },
    body1Next: {
      color: "#333333",
      fontFamily: "Times New Roman",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5
    },
    body2Next: {
      color: "#333333",
      fontFamily: "Times New Roman",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.5
    },
    buttonNext: {
      color: "#333333",
      fontFamily: "Times New Roman",
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      textTransform: "uppercase"
    },
    captionNext: {
      color: "#333333",
      fontFamily: "Times New Roman",
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66
    },
    overline: {
      color: "inherit",
      fontFamily:
        ' "Bariol-Regular" , "Helvetica", "Times New Roman", sans-serif ',
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "normal",
      textTransform: "none"
    },
    useNextVariants: true
  },
  shape: {
    borderRadius: 4
  },
  spacing: {
    unit: 8
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  },
  zIndex: {
    mobileStepper: 1000,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  }
};

export default customTheme;
