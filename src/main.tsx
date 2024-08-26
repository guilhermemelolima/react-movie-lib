import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import { Home } from './pages/Home.tsx'
import { Movie } from './pages/Movie.tsx'
import { Search } from './pages/Search.tsx'

import './Main.css'

import { register } from "swiper/element/bundle";
register();
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home/>}/>
          <Route path='movie/:id' element={<Movie/>}/>
          <Route path='search' element={<Search/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
