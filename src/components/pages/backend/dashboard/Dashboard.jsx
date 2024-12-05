import { setIsAdd } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SideNavigation from "../partials/SideNavigation";


const Dashboard = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  return (
    <>
      <section className="layout-main text-body">
        <div className="layout-div">
          <SideNavigation menu="dashboard" />
          <main>
            <Header title="Dashboard" subtitle="Welcome to the blog" />
            <div className="p-5">
              <div className="grid grid-cols-[1fr_400px] gap-5">
                <div className="stats">
                </div>
              </div>
            </div>

            <Footer />
          </main>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
