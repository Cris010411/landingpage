import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//include images into your bundle

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />

			<div className="row">
				<div className="col-2"></div>

				<div className="col-8">
					<Jumbotron />
					<div className="row">
						<div className="col">
							<Card />
						</div>
						<div className="col">
							<Card />
						</div>
						<div className="col">
							<Card />
						</div>
					</div>
				</div>

				<div className="col-2"></div>
			</div>
			<Footer />
		</div>
	);
}
