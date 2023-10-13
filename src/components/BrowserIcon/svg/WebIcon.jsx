import React from 'react';

const WebIcon = ({ size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 132 132" height={size} width={size}>
		<linearGradient id="webA" x1="98" x2="108" y1="112" y2="112" gradientUnits="userSpaceOnUse">
			<stop offset="0" stopColor="#16529c" />
			<stop offset="1" stopColor="#236ac0" />
		</linearGradient>
		<linearGradient id="webB" x1="58" x2="14" y1="120" y2="120" gradientUnits="userSpaceOnUse">
			<stop offset="0" stopColor="#2166bb" />
			<stop offset="1" stopColor="#89eda9" />
		</linearGradient>
		<filter id="webC" width="100%" height="100%" x="0%" y="0%">
			<feColorMatrix in="SourceGraphic" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
		</filter>
		<mask id="webD">
			<g filter="url(#webc)">
				<path fillOpacity=".5" d="M0 0h128v128H0z" />
			</g>
		</mask>
		<clipPath id="webE">
			<path d="M0 0h192v152H0z" />
		</clipPath>
		<mask id="webF">
			<g filter="url(#webC)">
				<path fillOpacity=".5" d="M0 0h128v128H0z" />
			</g>
		</mask>
		<clipPath id="webG">
			<path d="M0 0h192v152H0z" />
		</clipPath>
		<mask id="webH">
			<g filter="url(#webC)">
				<path fillOpacity=".5" d="M0 0h128v128H0z" />
			</g>
		</mask>
		<clipPath id="webI">
			<path d="M0 0h192v152H0z" />
		</clipPath>
		<path fill="url(#webA)" d="M64 5a60 60 0 110 120A60 60 0 0164 5zm0 0" />
		<path fill="url(#webB)" d="M64 5a60 60 0 000 120zm0 0" />
		<path fill="#40a1c8" d="M124 63A60 60 0 114 63a60 60 0 01120 0zm0 0" />
		<path fill="#49bbb0" d="M28 64a96 96 0 007.8 38.3 37 37 0 00-9.8 7.1A60 60 0 014 64zm0 0" />
		<path fill="#378bde" d="M64 96v27c-4.5 0-9-.5-13.4-1.5a46.7 46.7 0 01-14.8-19.3A63 63 0 0164 96zm0 0" />
		<path fill="#266ec6" d="M100 64a96 96 0 01-7.8 38.3 37 37 0 019.8 7.1A60 60 0 00124 64zm0 0" />
		<path fill="#378bde" d="M64 64v59c4.5 0 9-.5 13.4-1.5C90.8 112 99.8 89.4 100 64zm0 0" />
		<path fill="#266ec6" d="M64 96v27c4.5 0 9-.5 13.4-1.5 5.8-4 10.9-10.7 14.8-19.3A63 63 0 0064 96zm0 0" />
		<path fill="#1e62b5" d="M92.2 102.3c-4 8.5-9 15.1-14.8 19.2a60 60 0 0024.6-12 35 35 0 00-9.8-7.2zm0 0" />
		<path fill="#53d795" d="M64 3A60 60 0 004 64h60zm0 0" />
		<path fill="#72e99a" d="M50.6 4.5a60 60 0 00-24.6 12 35 35 0 009.8 7.2c4-8.5 9-15.1 14.8-19.2zm0 0" />
		<path fill="#49bbb0" d="M64 3c-4.5 0-9 .5-13.4 1.5C37 14.1 28 37.2 28 63v1h36zm0 0" />
		<path fill="#53d795" d="M64 3c-4.5 0-9 .5-13.4 1.5a46.8 46.8 0 00-14.8 19.3A63 63 0 0064 30zm0 0" />
		<path fill="#378bde" d="M64 3a60 60 0 0160 61H64zm0 0" />
		<g fill="#40a1c8">
			<path d="M77.4 4.5a60 60 0 0124.6 12 35 35 0 01-9.8 7.2c-4-8.5-9-15.1-14.8-19.2zm0 0" />
			<path d="M64 3c4.5 0 9 .5 13.4 1.5C91 14.1 100 37.2 100 63v1H64zm0 0" />
		</g>
		<path fill="#49bbb0" d="M64 3c4.5 0 9 .5 13.4 1.5 5.8 4 10.9 10.7 14.8 19.2-8 4-18 6.3-28.2 6.3zm0 0" />
		<g transform="translate(-8 -16)">
			<g clipPath="url(#webE)" mask="url(#webD)">
				<path fill="#2e3436" d="M169.5 24v1h13v-1zm0 0" />
			</g>
			<g clipPath="url(#webG)" mask="url(#webF)">
				<path fill="#2e3436" d="M169.5 21v1h13v-1zm0 0" />
			</g>
			<g clipPath="url(#webI)" mask="url(#webH)">
				<path fill="#2e3436" d="M169.5 27v1h13v-1zm0 0" />
			</g>
		</g>
	</svg>
);

export default WebIcon;
