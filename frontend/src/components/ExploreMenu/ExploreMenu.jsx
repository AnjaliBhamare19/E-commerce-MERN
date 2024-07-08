import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>
                Explore our Menu
            </h1>
            <p className='explore-menu-text'>
                Explore our delicious offerings and find your favorite dish. Browse through the list and pick what excites your taste buds the most. Enjoy your meal !
            </p>
            <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div className='explore-menu-list-item' key={index} onClick={()=>setCategory(prev=>prev===item.menu_name ?"All":item.menu_name)}>
                            <img src={item.menu_image} alt={item.menu_image} className={category===item.menu_name ? "active":""} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu