import { setIsAdd } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SideNavigation from "../partials/SideNavigation";
import ContentTable from "./ContentTable";
import SearchBar from "../partials/SearchBar";
import { Plus } from "lucide-react";
import ModalAddContent from "./ModalAddContent";

const Content = () => {
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
          <SideNavigation menu="content" />
          <main>
            <Header title="Content" subtitle="Welcome to the blog" />

            <div className="p-5">
              <div className="flex justify-between items-center">
                <SearchBar />
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>
              <ContentTable />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.isAdd && <ModalAddContent itemEdit={itemEdit} />}
    </>
  );
};

export default Content;
