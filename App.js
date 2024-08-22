import React from "react";
import ReactDOM from "react-dom/client";


const Header = () =>{
    return(
        <div className="header">

            <div className="logo-container">
            <img
          src="https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png"
          alt="App Logo"
          className="logo"
        />
  
            </div>



            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li>ContactUs</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}


 const RestaurantCard = () => {
  return (
    <div className="res-card">
        <img className="res-logo"
        alt="res-logo" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=50.38"/>
       <h3>KFC</h3>
       <h4>KFC, North American</h4>
       <h4>5 star</h4>
       <h4>30min Delivery</h4>

       

    </div>
  );
};


const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        
        </div>
    );
};


const AppLayout= () =>{

    return(
        <div className="app">
            <Header/>
            <Body/>

        </div>
    )




}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

