import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div>
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/I/A1LJJkacvsL.jpg"
          alt=""
        />
        </div>
        

        <div className="home__row">
          <Product
            id="12321341"
            title="Nike
            Precision Vk"
            price={11.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/41ErtDu3YBS._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="49538094"
            title="DESIGNA Height Adjustable Computer Desk, 47 Inch with Free Large Mousepad, Study Writing PC Laptop Table Workstation, Widen"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/618clc598AL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="LG 260 L 3 Star Smart Inverter Frost Free Double Door Refrigerator"
            price={94.98}
            rating={3}
            image="https://m.media-amazon.com/images/I/51B+PLv+svL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="90829342"
            title="Omniversal Air-pod Pro Premium Clone with Wireless Charging Case Active Noise Cancellation Compatible with Android iOS Device"
            price={394.98}
            rating={3}
            image="https://m.media-amazon.com/images/I/31r54a4oeBL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="90839332"
            title="Microsoft Surface Go MHN-00015 10 inch Touchscreen 2-in-1 Laptop (Intel Pentium Gold Processor/8GB/128GB SSD/Windows 10 Home in S Mode/Intel HD Graphics 615), Platinum"
            price={597.33}
            rating={4}
            image="https://m.media-amazon.com/images/I/51NJ-qIUCsL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>








        <div className="home__row">
          <Product
            id="92329859332"
            title="Redgear Pro Wireless Gamepad (Compatible with Windows"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/81SzaVbfZAL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="90829434332"
            title="Zebronics 27 inch (68.5 cm) LED Monitor with Full HD Display, HDMI and VGA Port, Built in Speaker, Slim Bezel, Metal Stand and Wall Mountable - Zeb-A27FHD LED"
            price={336.58}
            rating={4}
            image="https://m.media-amazon.com/images/I/71vNrx05QFL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>


        <div className="home__row">
          <Product
            id="908292342332"
            title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
            price={692.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/91pi34PiUPL._AC_UY327_FMwebp_QL65_.jpg"
          />
          
        </div>



        <div className="home__row">
          <Product
            id="908293425432"
            title="AmazonBasics Compact Ergonomic Wireless PC Mouse with Fast Scrolling – Purple"
            price={1094.98}
            rating={3}
            image="https://m.media-amazon.com/images/I/91vCdyl6W1L._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="9082931134132"
            title="New Apple iPhone 11 (128GB) - Purple"
            price={598.62}
            rating={4}
            image="https://m.media-amazon.com/images/I/71tpxtLD0aL._AC_UY327_FMwebp_QL65_.jpg"
          /><Product

          id="9082933432452"
          title="Lenovo IdeaPad Flex 5 11th Gen Intel Core i3 14-inch FHD IPS 2-in-1 Touchscreen Laptop (8GB/256GB SSD/Win 10/Office 2019/Lenovo Digital Pen Stylus/Fingerprint Reader/Graphite Grey/1.5Kg),"
          price={365.47}
          rating={3}
          image="https://m.media-amazon.com/images/I/61ta6vDkCRL._AC_UY327_FMwebp_QL65_.jpg"
        />
        </div>



        <div className="home__row">
          <Product
            id="9082931323432"
            title="TASLAR Travel Carrying Case Console Cover Hard Shell Protective Backpack Handbag Storage for Controller, Headset, Game Charger for Sony PlayStation 5/PS5, Black"
            price={54.25}
            rating={4}
            image="https://m.media-amazon.com/images/I/71apdfRGvrS._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="9082934234232"
            title="
            Glun Multipurpose Portable Electronic Digital Weighing Scale Weight Machine (10 Kg - with Back Light)"
            price={94.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51TssoP1OTL._SL1010_.jpg"
          />
        </div>






        <footer>
  
  <div class="copyright">
    Copyright © 2021 All Rights Reserved by Abhay Tomar.
  </div>
</footer>



      </div>
    </div>
  );
}

export default Home;
