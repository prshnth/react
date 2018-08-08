import React from 'react';
import '../css/Footer.css'

class Footer extends React.Component {
	goToWebsite = (link) => {
		var url;
		switch (link) {
			case 'linked-in' :
			url = 'https://www.linkedin.com/in/prshnthrddy/';
			break;
			case 'github' :
			url = 'https://github.com/prshnth';
			break;
			case 'twitter' :
			url = 'https://twitter.com/PjreddyK/';
			break;
			case 'strava' :
			url = 'https://www.strava.com/athletes/22972603';
			break;
			case 'instagram' :
			url = 'https://www.instagram.com/prshnthrddy/';
			break;
			case 'facebook' :
			url = 'https://www.facebook.com/pkuchanpally';
			break;
			default :
			url = 'https://github.com/prshnth';

		}
		window.open(url, '_blank');
	}
	render() {
		return (
			<div className="footer-top">
				<div>
					<i className="fab fa-linkedin-in fa-2x social-icon" onClick={() => this.goToWebsite('linked-in')}></i>
        			<i className="fab fa-github fa-2x social-icon" onClick={() => this.goToWebsite('github')}></i>
        			<i className="fab fa-twitter fa-2x social-icon" onClick={() => this.goToWebsite('twitter')}></i>
        			<i className="fab fa-strava fa-2x social-icon" onClick={() => this.goToWebsite('strava')}></i>
        			<i className="fab fa-instagram fa-2x social-icon" onClick={() => this.goToWebsite('instagram')}></i>
        			<i className="fab fa-facebook-f fa-2x social-icon" onClick={() => this.goToWebsite('facebook')}></i>
				</div>
			</div>
			);
	}
}

export default Footer;