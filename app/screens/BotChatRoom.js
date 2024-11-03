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
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles/styles";
import BotData from "../data/BotData.json";
import { colorPalette } from "../styles/styles";
import MessageLogBlock from "../components/MessageLogBlock";
import { OPENAI_API_KEY_Gabriel, OPENAI_API_KEY_ROPRO } from "@env";
import OpenAI from "openai";
import Tts from "react-native-tts";

function BotChatRoom({ navigation, route }) {
  const [botData, setBotData] = useState({});
  const [message, setMessage] = useState("");
  const [messageLogs, setMessageLogs] = useState([]);
  const openai = new OpenAI({ apiKey: OPENAI_API_KEY_ROPRO });
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  Tts.addEventListener("tts-start", (event) => setIsSpeaking(true));
  Tts.addEventListener("tts-finish", (event) => setIsSpeaking(false));

  const getBotData = () => {
    // Get the bot data from the BotData.json file
    const jsonBotData = BotData.find((bot) => bot.id === route.params.botId);
    setBotData(jsonBotData);
    // edit screen title name
    navigation.setOptions({ title: "Chatting with " + jsonBotData.name });
  };

  const getBotResponse = async (prompt) => {
    if (prompt === "") {
      return;
    }
    setLoading(true);

    const botPersonality = botData.personality;
    const finalPrompt = botPersonality + " Here is the user prompt:  " + prompt;

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: finalPrompt,
              },
            ],
          },
        ],
      });

      const botRespone = response.choices[0].message.content;

      const newMessage = {
        id: messageLogs.length + 1,
        text: prompt,
        isUser: true,
      };

      const botMessage = {
        id: messageLogs.length + 2,
        text: botRespone,
        isUser: false,
      };

      setMessageLogs([...messageLogs, newMessage, botMessage]);
      setMessage("");
      setLoading(false);
      Tts.speak(botRespone);
    } catch (error) {
      setLoading(false);
      console.error(
        "Error: ",
        error.response ? error.response.data : error.message
      );
    }
  };

  const textToSpeech = () => {
    Tts.speak("Hello Matilda, you are so beautiful");
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
          {loading && (
            <ActivityIndicator size="large" color={colorPalette.fifthColor} />
          )}
          {!loading && !isSpeaking && (
            <TouchableOpacity onPress={() => getBotResponse(message)}>
              <Image
                source={require("../data/photos/sendMessage.png")}
                style={styles.sendMessageIcon}
              />
            </TouchableOpacity>
          )}
          {!loading && isSpeaking && (
            <TouchableOpacity
              onPress={() => {
                Tts.stop();
                setIsSpeaking(false);
              }}
            >
              <Text style={styles.stopSpeakingButtonText}>
                Stop{"\n"}Speaking
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default BotChatRoom;
