import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./components/pages/LandingPage";
import ContactPage from "./components/pages/ContactPage";
import BlogLayout from "./components/pages/Blog/BlogLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/blog",
        element: <BlogLayout />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },

]);