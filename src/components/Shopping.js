import React, { Component } from 'react';
import Card1 from '../img/card1.jpg';
import Card2 from '../img/card2.jpg';
import Card3 from '../img/card3.jpg';

class Shopping extends Component {
	render() {
		return (
			<div id="shopping">
				<h1 className="shopping-title">SHOPPING BY BRANDS</h1>
				<p className="shopping-desc">With a diverse range of shopping, dining and entertainment options</p>
				<ul className="shopping-cards">
					<i className="fa fa-angle-left shopping-arrow"></i>
					<li className="card">
						<img src={Card1} alt="Eden Park"/>
						<div className="card-content">
							<h3 className="offers-title">Eden Park</h3>
							<p>Eden Park established in 1987. It sells collections of high-end for men.</p>
							<button className="shop-now">Shop Now</button>
						</div>
					</li>
					<li className="card">
						<img src={Card2} alt="Hackett London"/>
						<div className="card-content">
							<h3 className="offers-title">Hackett London</h3>
							<p>Eden Park established in 1987. It sells collections of high-end for men.</p>
							<button className="shop-now">Shop Now</button>
						</div>
					</li>
					<li className="card">
						<img src={Card3} alt="Versace Collection"/>
						<div className="card-content">
							<h3 className="offers-title">Versace Collection</h3>
							<p>Eden Park established in 1987. It sells collections of high-end for men.</p>
							<button className="shop-now">Shop Now</button>
						</div>
					</li>
					<i className="fa fa-angle-right shopping-arrow"></i>
				</ul>
			</div>
		)
	}
}

export default Shopping;