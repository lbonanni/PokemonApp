import React from 'react';
import { ActivityIndicator } from 'react-native';

export class Loader extends React.PureComponent {
	render() {
		const { size, color, children, loaded } = this.props;

		if (loaded) {
			return children;
		}

		return (
			<ActivityIndicator size={size} color={color} />
		)
	}
}

Loader.defaultProps = {
	size: 'large',
	color: '#0000ff',
	loaded: false
}
