import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import CreateTrip from './create-trip'
import Header from './components/custom/Header'
import { Toaster } from 'sonner'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ViewTrip from './view-trip/[tripId]/index.jsx'
import AllTrips from './my-trips/AllTrips'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'https://ai-trip-planner-web-virid.vercel.app/create-trip',
    element: <CreateTrip />
  },
  {
    path: 'https://ai-trip-planner-web-virid.vercel.app/view-trip/:tripId',
    element: <ViewTrip />
  },
  {
    path: 'https://ai-trip-planner-web-virid.vercel.app/my-trips',
    element: <AllTrips />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header />
      <Toaster />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>,
)
