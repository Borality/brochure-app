import React from "react";
import Navbar from "./Navbar";
import SecondNavbar from "./SecondNavbar";
import PizzaPicture from "./PizzaPicture";
import CardsSection from "./CardsSection";
import MobileInfo from "./MobileInfo";
export default function HomePage() {
	return (
		<div>
			<Navbar/>
			<SecondNavbar/>
			<PizzaPicture/>
			<CardsSection />
			<MobileInfo />
		</div>
	);
}
