import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="main-container">
      <h1>Home Component</h1>
      <div className="cart">
        <img
          src="https://media.istockphoto.com/id/1201806395/vector/shopping-cart-line-icon-black-editable-stroke-trolley-basket-business-concept-shopping-cart.jpg?s=612x612&w=0&k=20&c=KmXx8oRPoNgNzwhxu3zCsacUF-HSVMtpvGEi3hBbe2w="
          alt="cart"
        />
      </div>
      <div className="cart-container">
        <div className="img-container">
          <img
            src="https://images.macrumors.com/t/9r84bU_ZTOTrUixxwhjHUFsAvD4=/800x0/smart/article-new/2017/09/iphonexdesign.jpg?lossy"
            alt="cart"
          />
        </div>
        <div className="text-container">
          <h2>iPhone X</h2>
          <p>Price: $999</p>
        </div>
        <div className="button-container">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
