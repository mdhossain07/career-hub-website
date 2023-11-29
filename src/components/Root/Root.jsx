import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";

const Root = () => {
  return (
    <div className="">
      <div className="bg-slate-800 sticky top-0 z-[50] text-white shadow-lg">
        <Header />
      </div>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
