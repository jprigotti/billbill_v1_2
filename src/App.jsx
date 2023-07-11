import { useState } from 'react'
import '../src/App.css'
import RootProvider from "./core/providers/RootProvider";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "../src/core/router/AppRouter";
import HomeView from './pages/home/views/HomeView';

function App() {

  return (
    <RootProvider>
      <RouterProvider router={AppRouter} />
    </RootProvider>
  )
}

export default App
