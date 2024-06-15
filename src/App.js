import {
  createBrowserRouter,
  RouterProvider
 
} from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
const router = createBrowserRouter([

  {
    path: "/",
    element: (
          <Home></Home>
      ),
  },
  {
    path: "/login",
    element: (
          <LoginPage></LoginPage>
      ),
  },

])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
