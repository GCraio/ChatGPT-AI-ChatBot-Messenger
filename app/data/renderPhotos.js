import { Image } from "react-native";
import React from "react";
import styles from "../styles/styles";

function ImageBlock({ imageId, styling }) {
  return (
    <>
      {imageId === 1 && (
        <Image
          style={styling}
          source={require("./photos/studentsphere-noText.png")}
        />
      )}
      {imageId === 2 && (
        <Image style={styling} source={require("./photos/studentsphere.png")} />
      )}
    </>
  );
}

export default ImageBlock;
