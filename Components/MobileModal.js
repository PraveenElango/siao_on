import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Modal from 'react-native-modal';

export default class MobileModal extends Component {
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={{fontSize: 18, color: 'white'}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text style={{fontSize: 20}}>{this.props.text}</Text>
      {this._renderButton("Close", () => { this.props.closeAlert() })}
    </View>
  );

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.showAlert}
        backdropColor='black'
        backdropOpacity={0.7}
        onBackdropPress={() => this.props.closeAlert()}
      >
        {this._renderModalContent()}
      </Modal>

    );
  }
}

const styles = StyleSheet.create({

  button: {
    backgroundColor: "gray",
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
