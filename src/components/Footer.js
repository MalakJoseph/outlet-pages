import React, { Component } from 'react';
import Logo from '../img/logo.png'

class Footer extends Component {
	render() {
		return (
			<div id="footer">
				<div className="newsletter">
					<h5>RECEIVE OUR NEWSLETTER</h5>
					<input type="text" placeholder="E-MAIL ADDRESS"/>
					<button className="submit">SUBMIT</button>
				</div>
				<div className="follow">
					<h5>FOLLOW US</h5>
					<i className="fab fa-facebook-f footer-icons"></i>
					<i className="fab fa-instagram footer-icons"></i>
					<i className="fab fa-youtube footer-icons"></i>
				</div>
				<div className="contacts">
					<div className="address">
						<i className="far fa-user footer-icons"></i>
						<h5>Address:</h5>
						<p>Industry Zone, 18 First Section,</p>
						<p>12566 October 6, Egypt</p>
					</div>
					<div className="contact-us">
						<i className="fa fa-phone footer-icons"></i>
						<h5>Contact us:</h5>
						<p>01201810111-0100054445t</p>
						<p>m.omran@theoutlet-eg.com</p>
					</div>
					<div className="working-days">
						<i className="far fa-clock footer-icons"></i>
						<h5>Working Days/Hours:</h5>
						<p>Mon - Sun</p>
						<p>9:00 AM - 8:00 PM</p>
					</div>
				</div>
				<div className="copyright">
					<img src={Logo} className="company-logo" alt="Company's Logo"/>
					<p>© Copyright 2018</p>
					<p>All Rights Reserved</p>
				</div>
			</div>
		)
	}
}

export default Footer;