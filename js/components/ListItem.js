import _ from "lodash";
import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Loader } from "./Loader";
import { fetchUrl } from "../services/pokemonService";

export class ListItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  async componentDidMount() {
    const { url } = this.props;

    if (url) {
      const data = await fetchUrl(url);
      this.setState({ data });
    }
  }

  render() {
    let image;
    const uri = _.get(this.state, "data.sprites.front_default");

    if (this.props.url) {
      image = (
        <View style={styles.image}>
          <Loader loaded={!!uri}>
            <Image source={{ uri }} style={styles.image} />
          </Loader>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {image}
        <View style={styles.name}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  name: {
    flex: 1
  },
  image: {
    width: 100,
    height: 100
  }
});
