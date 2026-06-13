import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import Signup from "./landing_page/signup/Signup";
import SupportPage from "./landing_page/support/SupportPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/About", element: <AboutPage /> },
  { path: "/Pricing", element: <PricingPage /> },
  { path: "/Products", element: <ProductsPage /> },
  { path: "/Signup", element: <Signup /> },
  { path: "/Support", element: <SupportPage /> },
];

// Router Configuration
const router = createBrowserRouter(
  routes.map(({ path, element, action }) => ({
    path,
    element: (
      <>
        <Navbar /> {element} <Footer />
      </>
    ),
    action,
  })),
);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
