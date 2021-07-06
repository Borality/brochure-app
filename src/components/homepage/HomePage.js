import React from "react";
import PizzaPicture from "./PizzaPicture";
import CardsSection from "./CardsSection";
import MobileInfo from "./MobileInfo";
export default function HomePage() {
	return (
		<div>
			<PizzaPicture/>
			<CardsSection />
			<MobileInfo />
		</div>
	);
}
