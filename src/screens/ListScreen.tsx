import React, { Component } from "react";
import { Container, Header, Content, List, ListItem, Text } from "native-base";

import { db } from "../config";

let itemsRef = db.ref("/items");

export default class ListScreen extends Component {
  state = {
    items: [{ text: "" }],
  };

  componentDidMount() {
    itemsRef.on("value", (snapshot) => {
      let data = snapshot.val();
      if (data === null) return [];
      let items = Object.values(data);
      this.setState({ items });
    });
  }

  render() {
    var listItems = [];

    for (let i = 0; i < this.state.items.length; i++) {
      listItems.push(
        <ListItem key={i}>
          <Text>{this.state.items[i].text}</Text>
        </ListItem>
      );
    }

    return (
      <Container>
        <Header />
        <Content>
          <List>{listItems}</List>
        </Content>
      </Container>
    );
  }
}
