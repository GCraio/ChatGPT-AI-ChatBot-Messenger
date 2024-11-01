import {
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "../styles/styles";
import BotData from "../data/BotData.json";
import { colorPalette } from "../styles/styles";
import ChatBotButton from "../components/ChatBotButton";
import MessageLogBlock from "../components/MessageLogBlock";

function BotChatRoom({ navigation, route }) {
  const [botData, setBotData] = useState({});
  const [message, setMessage] = useState("");
  const [messageLogs, setMessageLogs] = useState([]);

  const getBotData = () => {
    // Get the bot data from the BotData.json file
    const jsonBotData = BotData.find((bot) => bot.id === route.params.botId);
    setBotData(jsonBotData);
    // edit screen title name
    navigation.setOptions({ title: "Chatting with " + jsonBotData.name });
  };

  const insertBotMessage = (userMessage) => {
    const botMessage = {
      id: messageLogs.length + 1, // Unique ID for each message
      text: "Hello! How can I help you today?",
      isUser: false,
    };

    // add the userMessage first then the botMessage to the messageLogs
    setMessageLogs([...messageLogs, userMessage, botMessage]);
    setMessage("");
  };

  const insertMessageLog = (messageText) => {
    if (messageText === "") {
      return;
    }
    const newMessage = {
      id: messageLogs.length + 1, // Unique ID for each message
      text: messageText,
      isUser: true,
    };
    insertBotMessage(newMessage);
  };

  useEffect(() => {
    getBotData();
  }, []);

  return (
    <SafeAreaView style={styles.androidContainer}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={90}
      >
        <ScrollView contentContainerStyle={styles.chatRoomScrollContainer}>
          {messageLogs.map((messageLog, index) => {
            return <MessageLogBlock key={index} messageLogData={messageLog} />;
          })}
        </ScrollView>
        <View style={styles.messagingEditingContainer}>
          <TextInput
            value={message}
            style={styles.chatRoomTextInput}
            placeholder="Type a message..."
            placeholderTextColor={colorPalette.fifthColor}
            onChangeText={(text) => setMessage(text)}
            multiline={true}
          />
          <TouchableOpacity onPress={() => insertMessageLog(message)}>
            <Image
              source={require("../data/photos/sendMessage.png")}
              style={styles.sendMessageIcon}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default BotChatRoom;
