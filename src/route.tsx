import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./components/pages/LandingPage";
import ContactPage from "./components/pages/ContactPage";
import BookingPage from "./components/pages/BookingPage";
import ArticlePage from "./components/pages/Blog/ArticalPage";
import CirclePage from "./components/pages/CirclePage";
import ServiceSinglePage from "./components/pages/ServiceSinglePage";
import ServicePage from "./components/pages/ServicePage"; // 1. تأكد من استيراد صفحة الخدمات

export const router = createBrowserRouter([
  {
    path: "/:clinicSlug",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },

      {
        path: "services",
        element: <ServicePage />,
      },
      {
        path: "blog",
        element: <CirclePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "service/:id",
        element: <ServiceSinglePage />,
      },
      {
        path: "booking",
        element: <BookingPage />,
      },
      {
        path: "artical/:id", 
        element: <ArticlePage />,
      },
      
    ],
  },
]);