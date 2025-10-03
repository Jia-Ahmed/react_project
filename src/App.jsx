import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Applayout } from './components/AppLayout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Country from './pages/Country'

import About from './pages/About'
import { ErrorPage } from './pages/ErrorPage'
import { CountryDetails } from './components/CountryDetails'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement:<ErrorPage/>, 
    children: [
      {
        index: true, // 👈 instead of path:"/"
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path:"country/:id",
        element:<CountryDetails/>
      }
    ],
  },
], {
  basename: "/react_project" // 👈 Add basename here as second argument
});

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
