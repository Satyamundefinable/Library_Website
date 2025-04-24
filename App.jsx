import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ReactDOM from 'react-dom/client';

import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Catalog } from "./Pages/Catalog"
import { Contact } from "./Pages/Contact"
import { Events } from "./Pages/Events"
import { Login } from "./Pages/Login"
import { Services } from "./Pages/Services"
import { AppLayout } from "./components/AppLayout";
import { ErrorPage } from "./Pages/ErrorPage";
import { StudentLogin } from "./Pages/StudentLogin";
import { AdminLogin } from "./Pages/AdminLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home />,
    
      },
    
      {
        path: "about",
        element: <About />
      },
    
      {
        path: "contact",
        element: <Contact />
      },
    
      {
        path: "catalog",
        element: <Catalog/>
      },
    
      {
        path: "events",
        element: <Events />
      },
    
     {
      path: "services",
      element: <Services/>
     },
    
      {
        path: "login",
        element: <Login />,
        children: [
          {
            path: "adminlogin",
            element: <AdminLogin/>,
          },
          {
            path: "studentlogin",
            element: <StudentLogin/>
          }
        ]

      }
    ]
  }
])

function App() {

  return (
    <RouterProvider  router={router} />
     
  )
}

export default App
