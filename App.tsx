import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Home from './src/screens/Home';
import AddItem from './src/screens/AddItem';
import List from './src/screens/List';

const AppNavigator = createStackNavigator(
	{
		Home,
		AddItem,
		List
	},
	{
		initialRouteName: 'Home'
	}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
	render() {
		return <AppContainer />;
	}
}
