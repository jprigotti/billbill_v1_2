import { useState } from 'react'
import './App.css'
import RootProvider from "./core/providers/RootProvider";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from './core/router/appRouter';
import HomeView from './pages/home/views/HomeView';

function App() {

  return (
    <RootProvider>
      <RouterProvider router={AppRouter} />
    </RootProvider>
  )
}

export default App
