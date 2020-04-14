import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Input,
  Item,
} from "native-base";
import { db } from "../config";

let addItem = (item) => {
  if (item) {
    db.ref("/items").push({
      text: item,
    });
  }
};

export default class AddItem extends Component {
  state = {
    text: "",
  };

  submit = () => {
    addItem(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Item style={styles.itemInput}>
            <Input
              placeholder="Add item"
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
            />
          </Item>
          <Button block transparent onPress={() => this.submit()}>
            <Text>Save</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: "column",
    backgroundColor: "#A6ABE7",
  },
  itemInput: {
    padding: 5,
    margin: 10,
  },
});
