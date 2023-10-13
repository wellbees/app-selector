import React from 'react';

const ChromeIcon = ({ size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 276 276" height={size} width={size}>
		<linearGradient id="chromeA" x1="145" x2="34" y1="253" y2="61" gradientUnits="userSpaceOnUse">
			<stop offset="0" stopColor="#1e8e3e" />
			<stop offset="1" stopColor="#34a853" />
		</linearGradient>
		<linearGradient id="chromeB" x1="111" x2="222" y1="254" y2="62" gradientUnits="userSpaceOnUse">
			<stop offset="0" stopColor="#fcc934" />
			<stop offset="1" stopColor="#fbbc04" />
		</linearGradient>
		<linearGradient id="chromeC" x1="17" x2="239" y1="80" y2="80" gradientUnits="userSpaceOnUse">
			<stop offset="0" stopColor="#d93025" />
			<stop offset="1" stopColor="#ea4335" />
		</linearGradient>
		<circle cx="128" cy="128" r="64" fill="#fff" />
		<path
			fill="url(#chromeA)"
			d="M96 183.4A63.7 63.7 0 0 1 72.6 160L17.2 64A128 128 0 0 0 128 256l55.4-96A64 64 0 0 1 96 183.4Z"
		/>
		<path
			fill="url(#chromeB)"
			d="M192 128a63.7 63.7 0 0 1-8.6 32L128 256A128 128 0 0 0 238.9 64h-111a64 64 0 0 1 64 64Z"
		/>
		<circle cx="128" cy="128" r="52" fill="#1a73e8" />
		<path
			fill="url(#chromeC)"
			d="M96 72.6a63.7 63.7 0 0 1 32-8.6h110.8a128 128 0 0 0-221.7 0l55.5 96A64 64 0 0 1 96 72.6Z"
		/>
	</svg>
);

export default ChromeIcon;
