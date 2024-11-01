import {
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
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
    };

    // add the userMessage first then the botMessage to the messageLogs
    setMessageLogs([...messageLogs, userMessage, botMessage]);
    setMessage("");
  };

  const insertMessageLog = (messageText) => {
    const newMessage = {
      id: messageLogs.length + 1, // Unique ID for each message
      text: messageText,
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
        <TextInput
          value={message}
          style={styles.chatRoomTextInput}
          placeholder="Type a message..."
          placeholderTextColor={colorPalette.fifthColor}
          onChangeText={(text) => setMessage(text)}
          onSubmitEditing={() => insertMessageLog(message)}
          returnKeyType="send"
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default BotChatRoom;
