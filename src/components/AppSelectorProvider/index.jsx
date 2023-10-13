import React, { useState } from 'react';
import AppSelectorPopup from '../AppSelectorPopup';
import { DeepLinkContext } from '../../hooks';
import { convertStylesToText } from '../../utils';

const AppSelectorProvider = ({ config, children }) => {
	convertStylesToText('./index.css');
	const [deepLink, setDeepLink] = useState(null);

	return (
		<DeepLinkContext.Provider value={{ setDeepLink, deepLink }}>
			{document.cookie.indexOf('appSelectorPopupClosed=true') <= -1 && <AppSelectorPopup {...config} />}
			{children}
		</DeepLinkContext.Provider>
	);
};

export default AppSelectorProvider;
