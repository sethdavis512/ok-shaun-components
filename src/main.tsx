import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./utils/theme";
import { Global } from "@emotion/react";
import { globalStyles } from "./utils/styles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Shaun Componentz</title>
        </head>
        <body>
          <App />
        </body>
      </html>
    </ThemeProvider>
  </StrictMode>
);
