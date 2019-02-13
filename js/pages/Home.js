import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
import { List } from "../components/List";
import { Loader } from "../components/Loader";
import { getAllPokemon } from "../services/pokemonService";
import { connect } from "react-redux";
import { loadAllPokemons } from "../actions";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getAllPokemon();
  }

  getAllPokemon = async () => {
    const data = await getAllPokemon();

    this.setState({ data });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.props.loadAllPokemons}
          title={this.props.pokemon}
          color="#841584"
          accessibilityLabel="Redux test"
        />
        <Loader loaded={this.state.data.length !== 0}>
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

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadAllPokemons: () => {
      dispatch(loadAllPokemons());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
