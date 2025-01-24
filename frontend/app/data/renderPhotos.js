import { Image } from "react-native";
import React from "react";
import styles from "../styles/styles";

function ImageBlock({ imageId, styling }) {
  return (
    <>
      {imageId === 1 && (
        <Image style={styling} source={require("./photos/healthBot.jpeg")} />
      )}
      {imageId === 2 && (
        <Image style={styling} source={require("./photos/financeBot.jpeg")} />
      )}
      {imageId === 3 && (
        <Image style={styling} source={require("./photos/newsBot.jpeg")} />
      )}
      {imageId === 4 && (
        <Image style={styling} source={require("./photos/travelBot.jpeg")} />
      )}
      {imageId === 5 && (
        <Image style={styling} source={require("./photos/studyBot.webp")} />
      )}
    </>
  );
}

export default ImageBlock;
