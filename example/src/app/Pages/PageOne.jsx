import React, { useEffect } from 'react';

import { useDeepLinkSettings } from 'example-component';

const PageOne = () => {
	const { setDeepLink } = useDeepLinkSettings();

	useEffect(() => {
		setDeepLink({
			commonUrl: 'commonDeepLink'
		});
	}, [setDeepLink]);

	return (
		<div style={{ padding: 12 }}>
			<div style={{ textAlign: 'center', color: 'red' }}>Check it out on mobile!</div>
			<div
				style={{
					padding: 12,
					display: 'flex',
					justifyContent: 'space-between'
				}}
			>
				<a href="/">HomePage</a>
				<a href="/page-one">Page One</a>
				<a href="/page-two">Page Two</a>
			</div>
			{Array(50)
				.fill(0)
				.map((_, key) => (
					<div key={key} style={{ backgroundColor: '#efefef', padding: 10, marginBottom: 12 }}>
						Example Item {key + 1}
					</div>
				))}
		</div>
	);
};

export default PageOne;
