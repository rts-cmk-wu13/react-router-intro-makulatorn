// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import MyScooter from "./pages/MyScooter"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/settings",
      element: <Settings />
    },
    {
      path: "/myscooter",
      element: <MyScooter />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
