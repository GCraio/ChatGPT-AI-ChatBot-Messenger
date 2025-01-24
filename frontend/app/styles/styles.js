import { StyleSheet, Dimensions, Platform } from "react-native";

const firstColor = "#212A31";
const secondColor = "#2E3944";
const thirdColor = "#124E66";
const fourthColor = "#748D92";
const fifthColor = "#D3D9D4";

const colorPalette = {
  firstColor,
  secondColor,
  thirdColor,
  fourthColor,
  fifthColor,
};

export default StyleSheet.create({
  androidContainer: {
    flex: 1,
    backgroundColor: firstColor,
    paddingBottom: Platform.OS === "ios" ? 0 : 10,
    paddingTop: Platform.OS === "ios" ? 0 : 35,
  },
  homeScreenMainTitleText: {
    color: fifthColor,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  homeScreenMainContainer: {
    backgroundColor: secondColor,
    padding: 10,
    marginVertical: 10,
    flex: 1,
  },
  homeScreenBotsContainer: {
    backgroundColor: fourthColor,
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: firstColor,
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  chatRoomScrollContainer: {
    flexGrow: 1,
    backgroundColor: fifthColor,
    padding: 10,
    // justifyContent: "flex-end",
  },
  homeScreenSecondartTitleText: {
    color: fifthColor,
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  chatBotButtonIcon: {
    height: 75,
    width: 75,
    marginRight: 15,
    borderRadius: 10,
  },
  chatBotButton: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    backgroundColor: secondColor,
    marginVertical: 5,
  },
  chatBotButtonContainer: {
    backgroundColor: fifthColor,
    padding: 10,
    borderRadius: 10,
    marginVertical: 7,
    borderWidth: 3,
    borderColor: firstColor,
  },
  chatBotButtonTextDescription: {
    color: fifthColor,
  },
  chatBotButtonTitleText: {
    color: firstColor,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
  },
  textSide: {
    flex: 1,
  },
  chatRoomTextInput: {
    padding: 10,
    color: fifthColor,
    minHeight: 30,
    maxHeight: 130,
    width: "80%",
  },
  chatRoomTextInputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
    borderColor: fifthColor,
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 5,
  },
  messageLogContainerUser: {
    alignSelf: "flex-end",
    backgroundColor: thirdColor,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: "80%",
  },
  messageLogContainerBot: {
    alignSelf: "flex-start",
    backgroundColor: firstColor,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: "80%",
  },
  messageLogText: {
    color: fifthColor,
  },
  messagingEditingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  sendMessageIcon: {
    height: 25,
    width: 25,
    tintColor: fifthColor,
  },
  microphoneIcon: {
    height: 25,
    width: 25,
    tintColor: fifthColor,
    marginLeft: 8,
  },
  activityIndicatorStyle: {
    marginLeft: 10,
  },
  stopSpeakingButtonText: {
    color: fifthColor,
    textAlign: "center",
    fontSize: 12,
    marginLeft: 6,
  },
  modalLoadingBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha (last value) to control transparency
    justifyContent: "center",
    alignItems: "center",
  },
  centeredViewLoadingIndicator: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { colorPalette };
