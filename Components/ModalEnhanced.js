import React from "react";
import { Platform } from "react-native";
import WebModal from './WebModal';
import MobileModal from './MobileModal';

export default function ModalEnhanced(props) {
  return (
    Platform.OS == 'web'
      ? <WebModal {...props} />
      : <MobileModal {...props} />
  );
}

