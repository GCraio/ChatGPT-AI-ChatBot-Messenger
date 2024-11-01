import React, { useEffect, useState, useRef } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  Image,
} from "react-native";
import styles from "../styles/styles";
import ChatBotButton from "../components/ChatBotButton";
import BotData from "../data/BotData.json";

function HomeScreen({ navigation, route }) {
  const gotoChat = (botId) => {
    navigation.navigate("BotChatRoom", { botId: botId });
  };

  return (
    <SafeAreaView on style={styles.androidContainer}>
      <Text style={styles.homeScreenMainTitleText}>Welcome to AI Buddy!</Text>
      <View style={styles.homeScreenMainContainer}>
        <Text style={styles.homeScreenSecondartTitleText}>
          Please Select Which AI Buddy to Start Chatting With
        </Text>
        <View style={styles.homeScreenBotsContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {BotData.map((bot, index) => {
              return (
                <ChatBotButton
                  key={index}
                  title={bot.name}
                  description={bot.description}
                  imageId={bot.imageSrc}
                  goto={() => gotoChat(bot.id)}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default HomeScreen;
