import React from 'react';
import '../css/ConnectDots.css';

const ConnectDots = () => (
	<div className="dots-parent">
		<div className="dots-container">
			<div className="dot-description">
				<div className="line-dot-container">
					<i className="fas fa-circle-notch dot fa-2x"></i>
					<span className="line"></span>
				</div>
				<div className="achievement">
				</div>
			</div>
			<div className="dot-description">
				<div className="line-dot-container">
					<i className="fas fa-check-circle dot fa-2x"></i>
					<span className="line"></span>
				</div>
				<div className="achievement">
					<span>
						Software Engineer
						<span className="divider"></span>
						UI
					</span>
					<span >Paychex 
						<span className="sub-achievement"> &mdash; Webster, NY</span>
					</span>
				</div>
			</div>	
			<div className="dot-description">
				<div className="line-dot-container">
					<i className="fas fa-check-circle dot fa-2x"></i>
					<span className="line"></span>
				</div>
				<div className="achievement">
					<span>
						Master's
						<span className="divider"></span>
						Computer Science
					</span>
					<span >Northwest Missouri State University 
						<span className="sub-achievement"> &mdash; Maryville, MO</span>
					</span>
				</div>
			</div>	
			<div className="dot-description">
				<div className="line-dot-container">
					<i className="fas fa-check-circle dot fa-2x"></i>
					<span className="line"></span>
				</div>
				<div className="achievement">
					<span>
						Intern
						<span className="divider"></span>
						Developement
					</span>
					<span >Lisle Corporation 
						<span className="sub-achievement"> &mdash; Clarinda, IA</span>
					</span>
				</div>
			</div>
			<div className="dot-description">
				<div className="line-dot-container">
					<i className="fas fa-check-circle dot fa-2x"></i>
					<span className="line"></span>
				</div>
				<div className="achievement">
					<span>
						Sr. Software Engineer
						<span className="divider"></span>
						Oracle Applications DBA
					</span>
					<span >Emerson IT Solutions 
						<span className="sub-achievement"> &mdash; Mohali, India</span>
					</span>
				</div>
			</div>
			<div className="dot-description">
				<div className="line-dot-container">
					<i className="fas fa-check-circle dot fa-2x"></i>
					<span className="line"></span>
				</div>
				<div className="achievement">
					<span>
						Bachelor's
						<span className="divider"></span>
						Electrical & Electronics Engineering
					</span>
					<span>MGIT
						<span className="sub-achievement"> &mdash; Hyderabad, India</span>
					</span>
				</div>
			</div>		
		</div>
	</div>
	);

export default ConnectDots;