import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SearchPage from './SearchPage.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
            <Route path ="/" element={<App />} />
            <Route path="/searchPage" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
    {/* <App /> */}
    {/* <SearchPage /> */}
  </React.StrictMode>,
)
