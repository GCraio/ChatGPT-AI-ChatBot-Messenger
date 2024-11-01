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
    backgroundColor: fifthColor,
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
  },
  chatBotButton: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    backgroundColor: secondColor,
    marginVertical: 5,
  },
  chatBotButtonContainer: {
    backgroundColor: firstColor,
    padding: 10,
    borderRadius: 10,
    marginVertical: 7,
  },
  chatBotButtonTextDescription: {
    color: fifthColor,
  },
  chatBotButtonTitleText: {
    color: fifthColor,
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
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: fifthColor,
    color: fifthColor,
  },
  messageLogContainer: {
    backgroundColor: thirdColor,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  messageLogText: {
    color: fifthColor,
  },
});

export { colorPalette };
