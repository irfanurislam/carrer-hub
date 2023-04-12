import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Toaster } from 'react-hot-toast';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics'

import Blog from './components/Blog/Blog'
import Main from './components/Main/Main'
import FeaturedJob from './components/FeaturedJob/FeaturedJob'
import JobDetails from './components/JobDetails/JobDetails'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import cartJobLoader from './loaders/cartJobLoader'
import ErrorPage from './components/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[

      {
        path:'/',
        element: <Home></Home>,
         loader: ()=> fetch('/featuredJobs.json'),
      },
      {
       path:'job/:id',
       element: <JobDetails></JobDetails>,
         loader: ({params}) => fetch('/featuredJobs.json')
      },
      {
        path:'applyjob',
        element: <AppliedJobs></AppliedJobs>,
        loader: cartJobLoader
      },
      {
        path:'statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'blog',
        element: <Blog></Blog>
      },
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Toaster />
  </React.StrictMode>,
)
