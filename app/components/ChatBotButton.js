import React from "react";
import styles from "../styles/styles";
import { Text, View, TouchableOpacity, Image } from "react-native";
import ImageBlock from "../data/renderPhotos";

function ChatBotButton({ goto, title, description, imageId }) {
  return (
    <View style={styles.chatBotButtonContainer}>
      <Text style={styles.chatBotButtonTitleText}>{title}</Text>
      <TouchableOpacity style={styles.chatBotButton} onPress={goto}>
        <View style={styles.imageSide}>
          <ImageBlock imageId={imageId} styling={styles.chatBotButtonIcon} />
        </View>
        <View style={styles.textSide}>
          <Text style={styles.chatBotButtonTextDescription}>{description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ChatBotButton;
