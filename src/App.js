
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body"
import Login from "./components/Login";

const router = createBrowserRouter([{
  path: "/",
  element: <Body />
},
{
  path: "/login",
  element: <Login />
}])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
export default App;
