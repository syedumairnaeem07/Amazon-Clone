import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>
				<div className="home__row">
					<Product
						id="12321341"
						title="ASUS ZenBook 15 Laptop, 15.6” UHD 4K NanoEdge Display, Intel Core i7-10510U"
						price="1131.71"
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Home_Premium_Storefront.jpg"
					/>
					<Product
						id="49538094"
						title="Asus ZenBook Pro Duo UX581 15.6” 4K UHD NanoEdge Bezel Touch, Intel Core i7-9750H"
						price="2299.99"
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/Creator_DualScreen_Storefront.jpg"
					/>
					<Product
						id="69538094"
						title="HP Pavilion x360 14-Inch 2-in-1 Convertible Laptop, Intel Core i5, 8 GB RAM, 512 GB SSD Storage"
						price="739.99"
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/PC/2in1_OnTheGo_Storefront.jpg"
					/>
				</div>
				<div className="home__row">
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
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor -  Super Ultra Wide Dual WQHD 5120 x1440"
						price={1094.98}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
