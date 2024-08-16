
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body"
import Browse from "./components/Browse";

const router = createBrowserRouter([{
  path: "/",
  element: <Body />
},
{
  path: '/browse',
  element: <Browse />
},
])


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
export default App;
