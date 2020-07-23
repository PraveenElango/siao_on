import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Alert, Modal } from "react-native";


export default class MobileModal extends Component {
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>{this.props.text}</Text>
      {this._renderButton("Close", () => { this.props.closeAlert() })}
    </View>
  );

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.showAlert}
      >
        {this._renderModalContent()}
      </Modal>

    );
  }
}

const styles = StyleSheet.create({

  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
});
