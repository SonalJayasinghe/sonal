import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import theme from "./theme.ts";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "../src/Pages/Home.tsx";
import PageNotFound from "./Pages/PageNotFound.tsx";
import Life from "./Pages/Life.tsx";
import Projects from "./Pages/Projects.tsx";
import Podcast from "./Pages/Podcast.tsx";


const router = createHashRouter([

  {
    path: "/",
    element: <Home />,    
  },
  {
    path: "/life",
    element: <Life />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },

  {
    path: "/podcast",
    element: <Podcast />,
  },

  {
    path: "*",
    element: <PageNotFound />,
  },

]);

localStorage.setItem('chakra-ui-color-mode', "light");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
