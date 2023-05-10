import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/Header";

const PageLayout = () => {
    return (
      <div className="container">
        <Header/>
  
        <main>
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </main>
  
        <Footer/>
      </div>
    );
  };
  
  export default PageLayout;
  