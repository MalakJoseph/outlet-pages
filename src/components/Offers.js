import React, { Component } from 'react';
import X from '../img/x.jpg';
import Y1 from '../img/y1.jpg';
import Y2 from '../img/y2.jpg';

class Offers extends Component {
	state = {
		categories: ['Directory', 'Fashion', 'Dining', 'Shoes', 'Makeup', 'Clothes']
	}

	render() {
		return (
			<div id="offers">
				<h1 className="offers-title">OFFERS</h1>
				<p className="offers-desc">Stay up to date on the latest promotions, deals and more...</p>
				<div className="categories-holder">
					{this.state.categories.map((el, i) => (
						<button className="categories" key={i}>{el}</button>
					))}
				</div>
				<div className="sections">
					<section className="left-section">
						<img src={X} className="offers-x-img" alt="Zara"/>
						<div className="offers-x-content">
							<div className="offers-x-content-padding">
								<h3 className="offers-title">Zara Men's</h3>
								<p>Save with 14 Zara offers and sales. Today's top Zara deal: Free Standard Shipping on $50+.</p>
								<button className="shop-now">Shop Now</button>
							</div>
						</div>
					</section>

					<section className="right-section">
						<div className="offers-y1">
							<img src={Y1} className="offers-y1-img" alt="Celio"/>
							<div className="offers-y1-content">
								<div className="offers-y1-content-padding">
									<h3 className="offers-title">Celio *</h3>
									<p>Save with 14 Zara offers and sales. Today's top Zara deal: Free Standard Shipping on $50+.</p>
									<button className="shop-now">Shop Now</button>
								</div>
							</div>
						</div>
						<div className="offers-y2">
							<img src={Y2} className="offers-y2-img" alt="Eden Park"/>
							<div className="offers-y2-content">
								<div className="offers-y2-content-padding">
									<h3 className="offers-title">Eden Park</h3>
									<p>Save with 14 Zara offers and sales. Today's top Zara deal: Free Standard Shipping on $50+.</p>
									<button className="shop-now">Shop Now</button>
								</div>
							</div>
						</div>
					</section>
				</div>
				<a href="explore more" className="explore-more">EXPLORE MORE<i className="fa fa-angle-right"></i></a>
			</div>
		)
	}
}

export default Offers;