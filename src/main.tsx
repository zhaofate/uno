import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import LoginForm from "./components/layouts/LoginForm";
import RegistForm from "./components/layouts/RegistForm";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/layout",
    element: <Layout />,
    children: [
      { index: true, element: <LoginForm /> },
      { path: "/layout/register", element: <RegistForm /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
