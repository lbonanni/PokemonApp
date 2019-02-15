import React from "react";
import { FlatList } from "react-native";
import { ListItem } from "./ListItem";

export class List extends React.PureComponent {
  renderItem = ({ item }) => {
    return <ListItem name={item.name} url={item.url} />;
  };

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => item.name}
      />
    );
  }
}
