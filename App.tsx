import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./src/screens/Home";
import AddItem from "./src/screens/AddItem";
import ListScreen from "./src/screens/ListScreen";

const App = createBottomTabNavigator(
  {
    Home: { screen: Home },
    AddItem: { screen: AddItem },
    List: { screen: ListScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "AddItem") {
          iconName = `ios-checkmark-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "List") {
          iconName = `ios-checkmark-circle${focused ? "" : "-outline"}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: "#42f44b",
      inactiveTintColor: "gray",
    },
  }
);
export default createAppContainer(App);
