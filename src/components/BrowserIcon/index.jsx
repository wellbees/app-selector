import React from 'react';
import { BraveIcon, ChromeIcon, EdgeIcon, FirefoxIcon, MsieIcon, OperaIcon, SafariIcon, WebIcon } from './svg';

const BrowserIcon = ({ browserName, size }) => {
	if (browserName === 'Brave') return <BraveIcon size={size} />;
	if (browserName === 'Chrome') return <ChromeIcon size={size} />;
	if (browserName === 'Edge') return <EdgeIcon size={size} />;
	if (browserName === 'Firefox') return <FirefoxIcon size={size} />;
	if (browserName === 'Msie') return <MsieIcon size={size} />;
	if (browserName === 'Opera') return <OperaIcon size={size} />;
	if (browserName === 'Safari') return <SafariIcon size={size} />;

	return <WebIcon size={size} />;
};

export default BrowserIcon;
