import React from "react";
import Header from "../components/common/Header/header";
import "../SCSS/style.scss";
import WorkTime from "../components/common/WorkTime/WorkTime";
import FilterBar from "../components/common/AnimalFilterBar/FilterBar";
import Discount from "../components/common/Discount/Discount";
import FilterSection from "../components/common/FilterSection/FilterSection";
import Cart from "../components/common/Cart/Cart";

const Main = () => {
  return (
    <div className="main-wrapper">
      <div className="main-container">
        <header className="header">
          <Header />
          <div className="adversting">
            <WorkTime />
          </div>
          <nav>
            <FilterBar />
          </nav>
        </header>
        <main>
          <section className="discount-section">
            <Discount />
          </section>
          <section className="wrapper-section-page">
            <Cart />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Main;
