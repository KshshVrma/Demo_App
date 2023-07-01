import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import HomePage from './pages/Home';
import Products from './pages/Products';
const router=createBrowserRouter([
  {
    path:'/',element:<RootLayout></RootLayout>
    ,children:[ {path:'/',element:<HomePage></HomePage>},
    {path:'/products',element:<Products></Products>}]
  }
]);

function App() { 
  return <RouterProvider router={router}>


  </RouterProvider>
}

export default App;
