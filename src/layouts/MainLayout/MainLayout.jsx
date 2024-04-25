import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto text-blue-950">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
