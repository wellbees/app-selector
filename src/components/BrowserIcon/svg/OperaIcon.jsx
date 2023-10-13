import React from 'react';

const OperaIcon = ({ size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1090 1090" height={size} width={size}>
		<linearGradient id="operaA" x1="461" x2="461" y1="59" y2="1033" gradientUnits="userSpaceOnUse">
			<stop offset=".6" stopColor="#ff1b2d" />
			<stop offset="1" stopColor="#a70014" />
		</linearGradient>
		<linearGradient id="operaB" x1="714" x2="714" y1="116" y2="978" gradientUnits="userSpaceOnUse">
			<stop offset="0" stopColor="#9c0000" />
			<stop offset=".7" stopColor="#ff4b4b" />
		</linearGradient>
		<path
			fill="url(#operaA)"
			d="M545 42.5a502.5 502.5 0 10334.9 877.1 362.4 362.4 0 01-201.4 61.5c-119.7 0-226.8-59.4-299-153-55.6-65.6-91.5-162.5-94-271.3V533c2.5-108.8 38.4-205.8 94-271.3 72-93.6 179.3-153 299-153 73.6 0 142.5 22.5 201.4 61.6a500.8 500.8 0 00-333-127.9h-2z"
		/>
		<path
			fill="url(#operaB)"
			d="M379.6 261.8c46-54.4 105.7-87.3 170.7-87.3 146.3 0 265 166 265 370.4 0 204.6-118.6 370.4-265 370.4-65 0-124.6-32.8-170.7-87.2 72 93.6 179.2 153 299 153A363 363 0 00880 919.6 501 501 0 001047.5 545a501.1 501.1 0 00-167.6-374.6 362.4 362.4 0 00-201.4-61.5c-119.7 0-226.8 59.4-299 153"
		/>
	</svg>
);

export default OperaIcon;
