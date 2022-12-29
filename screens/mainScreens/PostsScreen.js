import React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const profile = {
  name: "Nataliaa Romanova",
  email: "email@example.com",
};

const ava = require("../../assets/images/avatar.png");
const image = require("../../assets/images/postImg1.png");
const commentPin = require("../../assets/icon/comment-pin.png");
const mapPin = require("../../assets/icon/map-pin.png");

export default function PostsScreen({ navigation }) {
  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  const { name, email } = profile;

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      console.log(width);
      setdimensions(width);
    };
    const dimensionsHandler = Dimensions.addEventListener("change", onChange);

    return () => {
      dimensionsHandler.remove();
    };
  }, []);

  return (
    <View style={{ ...styles.container, width: dimensions + 16 * 2 }}>
      <View style={styles.userThmb}>
        <Image style={styles.avatar} source={ava} />
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.post}
        onPress={() => navigation.navigate("Coments")}
      >
        <Image source={image} style={styles.postImg} />
        <Text style={styles.postTitle}>Лес</Text>
        <View style={styles.postFooter}>
          <View style={styles.postCommentThmb}>
            <Image style={styles.postCommentIcon} source={commentPin} />
            <Text style={styles.postCommentNumber}>0</Text>
          </View>
          <View style={styles.postLocationThmb}>
            <Image style={styles.postLocationIcon} source={mapPin} />
            <Text style={styles.postLocationTitle}>
              Ivano-Frankivs'k Region, Ukraine
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: "flex-start",
    // alignItems: "flex-start",
  },
  userThmb: {
    flexDirection: "row",
    marginBottom: 32,
    // flex: 1,
    // display: "flex",
  },
  name: {
    fontSize: 15,
    lineHeight: 19,
    color: "#212121",
    fontFamily: "Roboto-Bold",
  },
  email: {
    fontSize: 11,
    lineHeight: 19,
    color: "#212121",
    fontFamily: "Roboto-Regular",
  },
  avatar: {
    marginRight: 8,
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  post: {
    marginBottom: 32,
  },
  postImg: {
    width: "100%",
    borderRadius: 8,
    marginBottom: 8,
  },
  postTitle: {
    marginBottom: 9,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    color: "#212121",
    fontFamily: "Roboto-Regular",
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postCommentThmb: {
    flexDirection: "row",
  },
  postCommentIcon: {
    marginRight: 9,
  },
  postCommentNumber: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
  },
  postLocationThmb: {
    flexDirection: "row",
  },
  postLocationIcon: {
    marginRight: 9,
  },
  postLocationTitle: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    color: "#212121",
    fontFamily: "Roboto-Regular",
    textDecoration: "underlin",
  },
});
