import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout/Layout.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Home from './views/Home/Home.jsx';
import TweetDetails from './views/TweetDetails/TweetDetails.jsx';
import Login from './views/Login/Login.jsx';
import App from './App.jsx';
import './index.css'
import '@fontsource-variable/inter';
import About from './views/About/About.jsx';
import Contact from './views/Contact/Contact.jsx';
import Courses from './views/Courses/Cursos.jsx';
import CourseDetails from './views/CoursesDetails/Courses.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: 'home',
            element: <Home />
          },
          {
            path: 'tweets/:tweetId',
            element: <TweetDetails />
          },
          {
            path: '',
            element: <Navigate to="/tweets" replace={true} />
          },
          {
            path: 'about',
            element: <About />
          },
          {
            path: 'contact',
            element: <Contact />
          },
          {
            path: 'courses',
            element: <Courses />
          },
          {
            path: 'coursedetails',
            element: <CourseDetails />
          }
        ]
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
