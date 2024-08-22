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
       <h3>KFC</h3>
       <img className="restcard-img"src="https://www.mashed.com/img/gallery/what-you-need-to-know-about-kfcs-brand-new-limited-time-deals/l-intro-1661912222.jpg"
          alt="App Logo"
/>
       

    </div>
  );
};


const Body = () =>{
    return(
        <div className="body">
            <div className="search"></div>
            <div className="res-container">
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

