import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Main from './components/Main';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    children: [
      {
        path:'/',
        element:<Main />
      },
      {
        path:'/cart',
        element:<Cart />
      }
    ]
  }
])
function App() {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
