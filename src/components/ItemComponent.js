import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class ItemComponent extends Component {
	static propTypes = {
		items: [PropTypes.array.isRequired]
	};

	render() {
		return (
			<View style={styles.MainContainer}>
				<FlatList
					data={this.props.items}
					ItemSeparatorComponent={this.FlatListItemSeparator}
					renderItem={({ item }) => (
					  <View>
						<Text style={styles.item}>
						  {item.text}
						</Text>
					  </View>
					)}
					keyExtractor={(item, index) => index.toString()}
				  />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	MainContainer: {
	  justifyContent: 'center',
	  flex: 1,
	  marginLeft: 10,
	  marginRight: 0,
	  marginBottom: 10,
	  marginTop: 30,
	},
  
	item: {
	  padding: 10,
	  fontSize: 18,
	  height: 44,
	},
  });
