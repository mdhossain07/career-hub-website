import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
