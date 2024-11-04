import { View, Modal, ActivityIndicator } from "react-native";
import React from "react";
import styles from "../styles/styles";

function LoadingModal({ currLoading }) {
  return (
    <Modal animationType="fade" transparent={true} visible={currLoading}>
      <View style={styles.modalLoadingBackground}>
        <View style={styles.centeredViewLoadingIndicator}>
          <ActivityIndicator size="large" color="#D3D9D4" />
        </View>
      </View>
    </Modal>
  );
}

export default LoadingModal;
