import React, { Component } from "react";
import { Container, Header, Content, List, ListItem, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default class Home extends Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Text>Home screen</Text>
        </Content>
      </Container>
    );
  }
}
