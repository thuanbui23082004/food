import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({category,setCategory}) => {
    return (
        <div className="explore-menu" id="explore-menu">
            <h1 className="explore__menu--title">Explore Our Menu</h1>
            <p className="explore__menu--desc">
                Choose from a diverse menu featuring a delectable array of
                dishes
            </p>
            <div className="explore__menu--list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore__menu--item">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p className="menu__item--name">
                                {item.menu_name}
                            </p>
                        </div>
                    );
                })}
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;
