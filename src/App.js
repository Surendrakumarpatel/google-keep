import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import store from "./utils/store";
import { Provider, useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from './components/Signup';
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './auth/ProtectedRoute';
import BinData from './components/BinData';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: (
          <>
            <ProtectedRoute>
              <Sidebar />
              <Feed />
            </ProtectedRoute>

          </>
        ),
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/bin",
        element: <BinData />
      }

    ]
  }

])

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />

        <RouterProvider router={appRouter} />

        <Toaster />
      </div>
    </Provider>

  );
}

export default App;
