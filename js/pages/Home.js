import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { List } from "../components/List";
import { Loader } from "../components/Loader";
import { connect } from "react-redux";
import { fetchAllPokemons } from "../actions";

class Home extends Component {
  componentDidMount() {
    this.props.fetchAllPokemons();
  }

  render() {
    return (
      <View style={styles.container}>
        <Loader loaded={this.props.pokemons.length !== 0}>
          <List data={this.props.pokemons} />
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
    pokemons: state.pokemons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPokemons: () => {
      dispatch(fetchAllPokemons());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
