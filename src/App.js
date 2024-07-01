import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import About from './components/home/About'
import Book from './components/home/Book'
import BookingPage from './pages/BookingPage'
import Services from './components/home/Service'
import HotelBookingForm from './pages/HotelBookingForm'
import HotelList from './features/browseHotels/HotelList'
import Layout from './Layout'
import { SearchContextProvider } from './Context/SearchContext'
import SearchResult from './pages/SearchResult'

import ContactPage from './pages/ContactPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
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
        element: <LoginPage />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/form',
        element: <HotelBookingForm />
      },
      {
        path: '/hotelsList',
        element: <HotelList />
      },
       {
        path: '/search',
        element: <SearchResult/>
      },
        
          {
        path: '/contact',
        element: <ContactPage/>
      }
    ]
  }
])

function App () {
  return (
    <SearchContextProvider>
      <div className='App overflow-hidden'>
        <RouterProvider router={router} />
      </div>
    </SearchContextProvider>
  )
}

export default App
