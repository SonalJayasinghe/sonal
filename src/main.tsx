import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import theme from "./theme.ts";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../src/Pages/Home.tsx";
import Life from "./Pages/Life.tsx";
import Projects from "./Pages/Projects.tsx";
import Podcast from "./Pages/Podcast.tsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/life" element={<Life />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/podcast" element={<Podcast />} />
      <Route path="/*" element={<Home />}/>
    </Route>
  )
)

localStorage.setItem('chakra-ui-color-mode', "light");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
