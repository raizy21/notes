import Navbar from "../components/Navbar"; // Add Navbar
import Footer from "../components/Footer"; //  Add Footer
import { Outlet } from "react-router"; //  Add Outlet

// MainLayout component
function MainLayout() {
  // Navbar, Outlet and Footer components
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar component */}
      <Navbar />
      <div className="mt-32">
        {/* Outlet component */}
        <Outlet />
      </div>
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default MainLayout;
