import { ThemeProvider } from "@/context/ThemeProvider";
import "@/styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Menu from "./Menu";

export enum RouteDefinition {
  INDEX = "/",
  MENU = "/menu",
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />} path={RouteDefinition.INDEX} />
      <Route element={<Menu />} path={RouteDefinition.MENU} />
    </>
  )
);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
