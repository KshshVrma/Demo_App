import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import HomePage from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';
const router=createBrowserRouter([
  {
    path:'/',element:<RootLayout></RootLayout>,
    errorElement:<ErrorPage></ErrorPage>
    ,children:[ {path:'/',element:<HomePage></HomePage>},
    {path:'/products',element:<Products></Products>}]
  }
]);

function App() { 
  return <RouterProvider router={router}>


  </RouterProvider>
}

export default App;
