import { BrowserRouter, Route, Routes } from "react-router"; //importing BrowserRouter, Route and Routes from react-router
import MainLayout from "./layouts/MainLayout"; //importing MainLayout from layout
import Home from "./pages/Home"; //importing Home from pages
import { ToastContainer } from "react-toastify"; //importing ToastContainer from react-toastify
import AppContextProvider from "./context/AppContextProvider"; //importing AppContextProvider from context
import SignInPage from "./pages/SignInPage"; //importing SignInPage from pages
import SignUpPage from "./pages/SignUpPage"; //importing SignUpPage from pages
import NotFoundPage from "./pages/NotFoundPage"; //importing NotFoundPage from pages
import CreateNote from "./components/CreateNote"; //importing CreateNote from components

function App() {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="add-note" element={<CreateNote />} />
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
