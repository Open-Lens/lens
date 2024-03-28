/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import React from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";


export const defaultMuiBaseTheme = createTheme({
  components: {
    MuiIconButton: {
        defaultProps: {
            color: "inherit",
        }
    },
    MuiSvgIcon: {
        defaultProps: {
            fontSize: "inherit",
        }
    },
    MuiTooltip: {
        defaultProps: {
            placement: "top",
        }
    },
  },
//   overrides: {
//     MuiIconButton: {
//         root: {
//         "&:hover": {
//             color: "var(--iconActiveColor)",
//             backgroundColor: "var(--iconActiveBackground)",
//         },
//         },
//     },
//   },
});

export function DefaultProps(App: React.ComponentType | React.FunctionComponent) {
  return (
    <ThemeProvider theme= { defaultMuiBaseTheme } >
      <App />
    </ThemeProvider>
  );
}
