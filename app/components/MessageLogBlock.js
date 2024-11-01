import React from "react";
import styles from "../styles/styles";
import { Text, View, TouchableOpacity, Image } from "react-native";

function MessageLogBlock({ messageLogData }) {
  return (
    <View style={styles.messageLogContainer}>
      <Text style={styles.messageLogText}>{messageLogData.text}</Text>
    </View>
  );
}

export default MessageLogBlock;
