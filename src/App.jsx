import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Carts from "./pages/Carts";
import Account from "./pages/Account";
import Product from "./pages/Product";
import WishList from "./pages/WishList";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import { Provider } from "react-redux";
import store from "./store";
// import {Toaster} from "react-hot-host"
import { Toaster } from "react-hot-toast";
import "./index.css";

import { SliderProvider } from "./contexts/Slider";
import ProtectedRoute from "./ui/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HamburgerProvider } from "./contexts/Hamburger";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <SliderProvider>
      <HamburgerProvider>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Routes>
                <Route
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate replace to="home" />} />
                  <Route path="home" element={<HomePage />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  {/* <Route path="checkout/:orderId" element={<Checkout />} /> */}
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="carts" element={<Carts />} />
                  <Route path="account" element={<Account />} />
                  <Route path="product/:id" element={<Product />} />
                  <Route path="wishlist" element={<WishList />} />
                  <Route path="category" element={<Category />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>

            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 5000,
                },
                style: {
                  fontSize: "16px",
                  maxWidth: "500px",
                  padding: "16px 24px",
                  backgroundColor: "var(--color-grey-0)",
                  color: "var(--color-grey-700)",
                },
              }}
            />
          </QueryClientProvider>
        </Provider>
      </HamburgerProvider>
    </SliderProvider>
  );
}

export default App;
