import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddStuff from './components/addStuff/AddStuff.jsx'
import EditStuff from './components/editStuff/EditStuff.jsx'
import Stuff from './components/stuff/Stuff.jsx'
import Root from './routes/Root.jsx'
import ErrorPage from './ErrorPage.jsx'
import HomePage from './components/homePage/HomePage.jsx'
import Register from './components/register/Register.jsx'
import Login from './components/login/Login.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <React.StrictMode>
        <Root />
      </React.StrictMode>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/addStuff',
        element: <AddStuff />
      },
      {
        path: '/editStuff/:id',
        element: <EditStuff />
      },
      {
        path: '/stuff',
        element: <Stuff />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
