import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./components/pages/LandingPage";
import ContactPage from "./components/pages/ContactPage";
import BookingPage from "./components/pages/BookingPage";
import ArticlePage from "./components/pages/Blog/ArticalPage";
import CirclePage from "./components/pages/CirclePage";
import ServiceSinglePage from "./components/pages/ServiceSinglePage";
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
        element: <CirclePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/service/:id",
        element: <ServiceSinglePage />,
      },
      {
        path: "/booking",
        element: <BookingPage />,
      },
      {
        path: "/artical/:id",
        element: <ArticlePage />,
      },
      
    ],
  },

]);