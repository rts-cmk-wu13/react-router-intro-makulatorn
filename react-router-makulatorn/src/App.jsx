// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import "./App.sass"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/settings",
      element: <Settings />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
