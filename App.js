import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { List } from "./js/components/List";
import { Loader } from "./js/components/Loader";
import { getAllPokemon } from "./js/services/pokemonService";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const data = await getAllPokemon();

    this.setState({ data });
  }

  render() {
    return (
      <View style={styles.container}>
        <Loader loaded={this.state.data.length}>
          <List data={this.state.data} />
        </Loader>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  }
});
