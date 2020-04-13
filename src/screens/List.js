import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import ItemComponent from '../components/ItemComponent';

import { db } from '../config';

let itemsRef = db.ref('/items');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#ebebeb'
	}
});

export default class List extends Component {
	state = {
		items: []
	};

	componentDidMount() {
		itemsRef.on('value', snapshot => {
			let data = snapshot.val();
			let items = Object.values(data);
			this.setState({ items });
		});
	}

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>

			<View style={styles.container}>
				{this.state.items.length > 0 ? (
					<ItemComponent items={this.state.items} />
				) : (
					<Text>No items</Text>
				)}
			</View>
			</SafeAreaView>

		);
	}
}
