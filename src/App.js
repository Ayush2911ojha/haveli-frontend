import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'

import Navbar from './pages/Navbar'
import About from './components/home/About'
import Book from './components/home/Book'
import BookingPage from './pages/BookingPage'
import Footer from './pages/Footer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },

  {
    path: '/about',
    element: <About />
  },
  {
    path: '/book',
    element: <Book />
  },
   {
    path: '/booking',
    element: <BookingPage />
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>
  }
])

function App () {
  return (
    <div className='App'>
    
      <RouterProvider router={router}></RouterProvider>
    
    </div>
  )
}

export default App
