import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getBrowserName, getContrastColor, getIsMobile, getOsName } from '../../utils';
import { useDeepLinkSettings } from '../../hooks';
import BrowserIcon from '../BrowserIcon';
import styles from './styles.module.css';

function AppSelectorPopup({
	appStoreUrl,
	playStoreUrl,
	appGalleryUrl,
	appLogo,
	appName,
	popupTitle,
	openButtonText,
	openButtonColor,
	continueButtonText,
	continueButtonColor,
	isDeepLinkEnabled,
	isDeepLinkEnabledForAndroid,
	isDeepLinkEnabledForIOS,
	isDeepLinkEnabledForHuawei,
	continueBrowserCookieHours,
	popupStartTime
}) {
	const browserName = getBrowserName();
	const osName = getOsName();
	const isMobile = getIsMobile();
	const openButtonTextColor = getContrastColor(openButtonColor);
	const continueButtonTextColor = getContrastColor(continueButtonColor);
	const { deepLink } = useDeepLinkSettings();
	const [visibilityClass, setVisibilityClass] = useState(null);
	const [deepLinkOrStoreUrl, setDeepLinkOrStoreUrl] = useState(null);
	const [isPopupHidden, setIsPopupHidden] = useState(!isDeepLinkEnabled || !isMobile);

	useEffect(() => {
		if (isDeepLinkEnabledForAndroid && osName === 'android') {
			setDeepLinkOrStoreUrl(
				deepLink?.androidUrl === undefined && deepLink?.commonUrl === undefined
					? playStoreUrl
					: deepLink?.androidUrl === undefined
					? deepLink?.commonUrl
					: deepLink?.androidUrl
			);
		} else if (isDeepLinkEnabledForIOS && osName === 'ios') {
			setDeepLinkOrStoreUrl(
				deepLink?.iosUrl === undefined && deepLink?.commonUrl === undefined
					? appStoreUrl
					: deepLink?.iosUrl === undefined
					? deepLink?.commonUrl
					: deepLink?.iosUrl
			);
		} else if (isDeepLinkEnabledForHuawei && osName === 'huawei') {
			setDeepLinkOrStoreUrl(
				deepLink?.huaweiUrl === undefined && deepLink?.commonUrl === undefined
					? appGalleryUrl
					: deepLink?.huaweiUrl === undefined
					? deepLink?.commonUrl
					: deepLink?.huaweiUrl
			);
		}
	}, [
		osName,
		isDeepLinkEnabledForAndroid,
		isDeepLinkEnabledForIOS,
		isDeepLinkEnabledForHuawei,
		playStoreUrl,
		appStoreUrl,
		appGalleryUrl,
		deepLink?.androidUrl,
		deepLink?.iosUrl,
		deepLink?.huaweiUrl,
		deepLink?.commonUrl
	]);

	useEffect(() => {
		setTimeout(() => {
			if (!isPopupHidden) {
				// document.querySelector('body').classList.add(styles.noScroll);
				setVisibilityClass(styles.showPopup);
			}
		}, popupStartTime);
	}, [isPopupHidden, popupStartTime]);

	useEffect(() => {
		if (deepLink?.visible === false) {
			closeAppSelectorPopup();
		}
	}, [deepLink?.visible]);

	const closeAppSelectorPopupWithCookie = () => {
		const date = new Date();
		date.setTime(date.getTime() + continueBrowserCookieHours * 60 * 60 * 1000);
		document.cookie = `appSelectorPopupClosed=true; expires=${date.toUTCString()}; path=/`;
		closeAppSelectorPopup();
	};

	const closeAppSelectorPopup = () => {
		// document.querySelector('body').classList.remove(styles.noScroll);
		setVisibilityClass(styles.hidePopup);
		setTimeout(() => setIsPopupHidden(true), 1000);
	};

	if (isPopupHidden || deepLinkOrStoreUrl === null || deepLinkOrStoreUrl === '' || deepLink?.visible === false) {
		return null;
	}

	return (
		<div className={`${styles.appSelectorBackground} ${visibilityClass}`} onClick={closeAppSelectorPopup}>
			<div className={`${styles.appSelectorPopup} ${visibilityClass}`}>
				{popupTitle && <div className={styles.title}>{popupTitle}</div>}
				<div className={styles.itemRow}>
					<div className={styles.logoName}>
						<div className={styles.logo}>
							<img src={appLogo} name={appName} alt={appName} />
						</div>
						<div className={styles.name}>{appName}</div>
					</div>
					<a
						className={styles.button}
						style={{ backgroundColor: openButtonColor, color: openButtonTextColor }}
						rel="noopener noreferrer"
						target="_blank"
						href={deepLinkOrStoreUrl}
					>
						{openButtonText}
					</a>
				</div>
				<div className={styles.itemRow}>
					<div className={styles.logoName}>
						<div className={styles.logo}>
							<BrowserIcon size="4.4rem" browserName={browserName} />
						</div>
						<div className={styles.name}>
							{browserName === 'Msie' ? 'Explorer' : browserName === 'Web' ? 'Browser' : browserName}
						</div>
					</div>
					<a
						className={styles.button}
						style={{ backgroundColor: continueButtonColor, color: continueButtonTextColor }}
						onClick={closeAppSelectorPopupWithCookie}
					>
						{continueButtonText}
					</a>
				</div>
			</div>
		</div>
	);
}

AppSelectorPopup.propTypes = {
	appName: PropTypes.string.isRequired,
	appLogo: PropTypes.string.isRequired,
	appStoreUrl: PropTypes.string,
	playStoreUrl: PropTypes.string,
	appGalleryUrl: PropTypes.string,
	deepLinkAndroidUrl: PropTypes.string,
	deepLinkIOSUrl: PropTypes.string,
	deepLinkHuaweiUrl: PropTypes.string,
	popupTitle: PropTypes.string,
	openButtonText: PropTypes.string,
	openButtonColor: PropTypes.string,
	continueButtonText: PropTypes.string,
	continueButtonColor: PropTypes.string,
	isDeepLinkEnabled: PropTypes.bool,
	isDeepLinkEnabledForAndroid: PropTypes.bool,
	isDeepLinkEnabledForIOS: PropTypes.bool,
	isDeepLinkEnabledForHuawei: PropTypes.bool,
	continueBrowserCookieHours: PropTypes.number,
	popupStartTime: PropTypes.number
};

AppSelectorPopup.defaultProps = {
	appName: null,
	appLogo: null,
	appStoreUrl: null,
	playStoreUrl: null,
	appGalleryUrl: null,
	deepLinkAndroidUrl: null,
	deepLinkIOSUrl: null,
	deepLinkHuaweiUrl: null,
	popupTitle: 'See in app...',
	openButtonText: 'Open',
	openButtonColor: '#fec435',
	continueButtonText: 'Continue',
	continueButtonColor: '#dfdfdf',
	isDeepLinkEnabled: true,
	isDeepLinkEnabledForAndroid: true,
	isDeepLinkEnabledForIOS: true,
	isDeepLinkEnabledForHuawei: true,
	continueBrowserCookieHours: 1,
	popupStartTime: 2000
};

export default AppSelectorPopup;
