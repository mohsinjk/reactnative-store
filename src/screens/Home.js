import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export default class Home extends Component {
	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View>
					<Text>Home Screen</Text>
					<Button
						title="Add an Item"
						onPress={() => this.props.navigation.navigate('AddItem')}
					/>
					<Button
						title="List of Items"
						color="green"
						onPress={() => this.props.navigation.navigate('List')}
					/>
				</View>
			</SafeAreaView>
		);
	}
}
