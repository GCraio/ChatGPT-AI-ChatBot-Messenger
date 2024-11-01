import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React, { useState, useEffect } from "react";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Button } from "react-native";
// import Voice from "@react-native-voice/voice";

// export default function App() {
//   const [isListening, setIsListening] = useState(false);
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     // Attach Voice handlers
//     Voice.onSpeechStart = onSpeechStartHandler;
//     Voice.onSpeechEnd = onSpeechEndHandler;
//     Voice.onSpeechResults = onSpeechResultsHandler;

//     // Clean up listeners on unmount
//     return () => {
//       Voice.destroy().then(Voice.removeAllListeners);
//     };
//   }, []);

//   const onSpeechStartHandler = (e) => {
//     console.log("Speech started");
//     setIsListening(true);
//   };

//   const onSpeechEndHandler = (e) => {
//     console.log("Speech ended");
//     setIsListening(false);
//   };

//   const onSpeechResultsHandler = (e) => {
//     console.log("Speech results", e.value);
//     setResults(e.value);
//   };

//   const startListening = async () => {
//     try {
//       await Voice.start("en-US");
//       setResults([]);
//     } catch (error) {
//       console.error("Error starting Voice recognition:", error);
//     }
//   };

//   const stopListening = async () => {
//     try {
//       await Voice.stop();
//       setIsListening(false);
//     } catch (error) {
//       console.error("Error stopping Voice recognition:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text>React Native Voice Recognition</Text>
//       <Button
//         title={isListening ? "Stop Listening" : "Start Listening"}
//         onPress={isListening ? stopListening : startListening}
//       />
//       <View style={styles.resultsContainer}>
//         {results.map((result, index) => (
//           <Text key={index} style={styles.resultText}>
//             {result}
//           </Text>
//         ))}
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   resultsContainer: {
//     marginTop: 20,
//     alignItems: "center",
//   },
//   resultText: {
//     fontSize: 18,
//     color: "#333",
//     marginVertical: 2,
//   },
// });
