import React, { Component } from "react";
import { Text, TouchableOpacity, View, ScrollView, StyleSheet } from "react-native";
import Modal from "modal-enhanced-react-native-web";


export default class ModalEnhanced extends Component {
  // state = {
  //   displayModal: true
  // };

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
      {this._renderButton("Close", () => {this.props.closeAlert()})}
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        
        {/* {this._renderButton("Press Me!", () =>
          this.setState({ displayModal: true })
        )} */}
        <Modal
          isVisible={this.props.showAlert}
          style={styles.bottomModal}>
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
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
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
});
