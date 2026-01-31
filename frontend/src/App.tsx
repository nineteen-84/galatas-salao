import { Toaster } from 'sonner';
import './globals.css';
import { router } from "./routes";

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from "react-router";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | galatas.salão' />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
