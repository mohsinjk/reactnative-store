import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	TextInput
} from 'react-native';

import { db } from '../config';

let addItem = item => {
	db.ref('/items').push({
		text: item
	});
};

export default class AddItem extends Component {
	state = {
		text: ''
	};

	saveItem = () => {
		addItem(this.state.text);
		this.setState({text:''})
		console.log('Item saved successfully');
	};

	render() {
		return (
			<View style={styles.main}>
				<Text style={styles.title}>Add Item</Text>
				<TextInput style={styles.itemInput} 
				onChangeText={(text) => this.setState({text})}
				value={this.state.text}
				/>
				<TouchableHighlight
					style={styles.button}
					underlayColor="white"
					onPress={()=>this.saveItem()}
					>
					<Text style={styles.buttonText}>Add</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		padding: 30,
		flexDirection: 'column',
		backgroundColor: '#6565fc'
	},
	title: {
		marginBottom: 20,
		fontSize: 25,
		textAlign: 'center'
	},
	itemInput: {
		height: 50,
		padding: 4,
		marginRight: 5,
		fontSize: 23,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 8,
		color: 'white'
	},
	buttonText: {
		fontSize: 18,
		color: '#111',
		alignSelf: 'center'
	},
	button: {
		height: 45,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		marginTop: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	}
});
