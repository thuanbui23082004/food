import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import ReviewCus from "../../components/ReviewCus/ReviewCus";
const Home = ({ cartIconRef }) => {
    const [category, setCategory] = React.useState("All");
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} cartIconRef={cartIconRef} />
            <ReviewCus />
            <AppDownload />
        </div>
    );
};

export default Home;
