import './globals.css';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from "react-router";
import { Toaster } from 'sonner';

import { router } from "./routes";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | galatas.salão' />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
