import React, { Component } from 'react';
import Logo from '../img/logo.png';

class Header extends Component {
	state = {
		headerElements: ['Home', 'About us', 'Online Shop', 'Our Brands', 'Gallery', 'The Road', 'Contact us'],
		headerIcons: [<i className="fa fa-search"></i>, <i className="fa fa-user"></i>, <i className="fa fa-shopping-cart"></i>]
	}

	render() {
		return (
			<div id="header">
				<img src={Logo} className="company-logo" alt="Company's Logo"/>
				{this.state.headerElements.map((el, i) => (
					<a href={el.toLowerCase()} className="header-links" key={i}>{el}</a>
				))}
				<div className="icons-lang">
					{this.state.headerIcons.map((el, i) => (
						<button className="header-icons" key={i}>{el}</button>
					))}
					<button className="lang">ع</button>
				</div>
			</div>
		)
	}
}

export default Header;