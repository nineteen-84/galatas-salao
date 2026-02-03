import './globals.css';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from "react-router";
import { Toaster } from 'sonner';

import { ThemeProvider } from './components/theme/theme-provider';
import { router } from "./routes";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="galatas-theme" defaultTheme='light'>
        <Helmet titleTemplate='%s | galatas.salão' />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
