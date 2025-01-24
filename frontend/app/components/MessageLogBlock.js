import React from "react";
import styles from "../styles/styles";
import { Text, View, TouchableOpacity, Image } from "react-native";

function MessageLogBlock({ messageLogData }) {
  return messageLogData.isUser ? (
    // USER
    <View style={styles.messageLogContainerUser}>
      <Text style={styles.messageLogText}>{messageLogData.text}</Text>
    </View>
  ) : (
    // BOT
    <View style={styles.messageLogContainerBot}>
      <Text style={styles.messageLogText}>{messageLogData.text}</Text>
    </View>
  );
}

export default MessageLogBlock;
