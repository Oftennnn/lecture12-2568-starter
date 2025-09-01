import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import { createTheme ,MantineProvider,virtualColor } from '@mantine/core';

const theme = createTheme({
  fontFamily: "Noto Sans, sans-serif",
  colors: {
    Kamin: virtualColor({
      name: 'Kamin',
      dark: 'yellow',
      light: 'grape',
    }),
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
    <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>
);
