import { BrowserRouter, Route, Routes } from "react-router"; //importing BrowserRouter, Route and Routes from react-router
import MainLayout from "./layouts/MainLayout"; //importing MainLayout from layout
import { ToastContainer } from "react-toastify"; //importing ToastContainer from react-toastify
import AppContextProvider from "./context/AppContextProvider"; //importing AppContextProvider from context
import SignInPage from "./pages/SignInPage"; //importing SignInPage from pages
import SignUpPage from "./pages/SignUpPage"; //importing SignUpPage from pages
import NotFoundPage from "./pages/NotFoundPage"; //importing NotFoundPage from pages

function App() {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="signin" element={<SignInPage />} />
              <Route path="signup" element={<SignUpPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
      <ToastContainer />
    </>
  );
}

export default App; //exporting App
