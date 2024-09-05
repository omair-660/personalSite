import './index.css'
import Layout from './components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import 'animate.css';
import { ScrollProvider } from './components/Context/ScrollContext'
import ProjectDetails from './components/ProjectDetails/ProjectDetails'


function App() {
  
  let x = createBrowserRouter([
    {
      path: "/personalSite",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "projectdetails/:id", element: <ProjectDetails /> },
      ],
    },
  ]);
  
  return (
    <>
    <ScrollProvider>
    <RouterProvider router={x}>


    </RouterProvider>
    </ScrollProvider>
      
    </>
  )
}

export default App
