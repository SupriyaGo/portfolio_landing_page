/** @format */

import React from "react";
import Typed from "react-typed";

export default function Header() {
	return (
		<div className="header-wrapper">
			<div className="main-info">
				<h1>App development</h1>
				<Typed
					className="typed-text"
					strings={[
						"Web Design",
						"Web Development",
						"Mobile Application Development",
					]}
					loop
					typeSpeed={40}
					backSpeed={60}
				/>
				<a href="#" className="contact-btn">
					Contact me
				</a>
			</div>
		</div>
	);
}
