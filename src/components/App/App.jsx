import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

import { getCategories } from "../../features/categories/categoriesSlice";
import { getProducts } from "../../features/products/productsSlice";

import UserForm from "../User/UserForm";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="app" style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header />
      <UserForm />
      <main className="main container" style={{flex: '1 1 auto'}}>
        <Sidebar />
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
