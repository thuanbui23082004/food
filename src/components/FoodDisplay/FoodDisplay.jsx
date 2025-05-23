import React, { useState, useContext } from "react";
import "./FoodDisplay.css";
import { motion } from "framer-motion";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const filteredFoodList = food_list.filter((item) => {
        const matchesCategory =
            category === "All" || category === item.category;
        const matchesSearch = item.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = filteredFoodList.slice(
        indexOfFirstItem,
        indexOfLastItem
    );
    const totalPages = Math.ceil(filteredFoodList.length / itemsPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="food__display">
            <div className="food__display--header">
                <h2>Top dishes near you</h2>
                <div className="food__search">
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{ color: "#ff4a3d" }}
                    />
                    <input
                        type="text"
                        placeholder="Search dishes..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <div className="food__display--list">
                {currentItems.length > 0
                    ? currentItems.map((item, index) => {
                          if (
                              category === "All" ||
                              category === item.category
                          ) {
                              return (
                                  <motion.div
                                      key={item._id}
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true, amount: 0.1 }}
                                      transition={{
                                          delay: index * 0.1,
                                          duration: 0.5,
                                      }}
                                  >
                                      <FoodItem
                                          key={index}
                                          id={item._id}
                                          name={item.name}
                                          price={item.price}
                                          desc={item.description}
                                          img={item.image}
                                      />
                                  </motion.div>
                              );
                          }
                      })
                    : null}
            </div>
            {filteredFoodList.length === 0 && (
                <div className="no-results">
                    No dishes found matching your search
                </div>
            )}
            <div className="pagination">
                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        onClick={() => setCurrentPage(number)}
                        className={number === currentPage ? "active" : ""}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FoodDisplay;
