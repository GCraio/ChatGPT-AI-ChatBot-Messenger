import { StyleSheet, Dimensions, Platform } from "react-native";

const firstColor = "#212A31";
const secondColor = "#2E3944";
const thirdColor = "#124E66";
const fourthColor = "#748D92";
const fifthColor = "#D3D9D4";

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
  imageSide: {},
  textSide: {
    flex: 1,
  },
});
