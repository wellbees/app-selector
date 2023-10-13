import { createContext, useContext } from 'react';

export const DeepLinkContext = createContext();

export const useDeepLinkSettings = () => {
	return useContext(DeepLinkContext);
};
