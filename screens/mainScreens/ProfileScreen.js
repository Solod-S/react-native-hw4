import React from "react";
import { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";

//data
import posts from "../../assets/data/posts.json";

//images
const avatar = require("../../assets/images/avatar.png");
const imageBG = require("../../assets/images/screenBg.jpg");
const image = require("../../assets/images/postImg1.png");

//icons
const commentPin = require("../../assets/icon/comment-pin.png");
const lokePin = require("../../assets/icon/like.png");
const mapPin = require("../../assets/icon/map-pin.png");
const LogOutIcon = require("../../assets/icon/log-out.png");

export default function ProfileScreen({ navigation }) {
  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const onChange = () => {
      const height = Dimensions.get("window").height;
      const width = Dimensions.get("window").width - 16 * 2;
      setdimensions(width);
      setScreenHeight(height);
    };
    const dimensionsHandler = Dimensions.addEventListener("change", onChange);

    return () => {
      dimensionsHandler.remove();
    };
  }, []);

  return (
    <ImageBackground source={imageBG} style={styles.image}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ position: "absolute", top: 22, right: 16 }}
          onPress={() => navigation.navigate("Login")}
        >
          <Image source={LogOutIcon} style={{}} />
        </TouchableOpacity>
        <View style={{ position: "absolute", top: -60 }}>
          <View>
            <Image
              source={avatar}
              style={{
                width: 120,
                height: 120,
                objectFit: "cover",
                borderRadius: 16,
              }}
            ></Image>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                position: "absolute",

                transform: [{ rotate: "40deg" }],
                top: 80,
                right: -12,
                borderWidth: 1,
                borderColor: "#E8E8E8",
                backgroundColor: "#FFFFFF",
                justifyContent: "center",
                alignItems: "center",
                width: 25,
                height: 25,
                borderRadius: 50,
              }}
              // onPress={}
            >
              <Text style={{ color: "#E8E8E8" }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={{
              marginBottom: 33,
              fontSize: 30,
              lineHeight: 35,
              fontWeight: "500",
              color: "#212121",
              fontFamily: "Roboto-Bold",
            }}
          >
            Natali Romanova
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
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
                  <Text style={styles.postCommentNumber}>2</Text>
                </View>
                <View style={styles.postLikeThmb}>
                  <Image style={styles.postLikeIcon} source={lokePin} />
                  <Text style={styles.postLikeNumber}>11</Text>
                </View>
                <View style={styles.postLocationThmb}>
                  <Image style={styles.postLocationIcon} source={mapPin} />
                  <Text style={styles.postLocationTitle}>Ukraine</Text>
                </View>
              </View>
            </TouchableOpacity>
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
                  <Text style={styles.postCommentNumber}>222</Text>
                </View>
                <View style={styles.postLikeThmb}>
                  <Image style={styles.postLikeIcon} source={lokePin} />
                  <Text style={styles.postLikeNumber}>1234</Text>
                </View>
                <View style={styles.postLocationThmb}>
                  <Image style={styles.postLocationIcon} source={mapPin} />
                  <Text style={styles.postLocationTitle}>Ukraine</Text>
                </View>
              </View>
            </TouchableOpacity>
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
                  <Text style={styles.postCommentNumber}>12</Text>
                </View>
                <View style={styles.postLikeThmb}>
                  <Image style={styles.postLikeIcon} source={lokePin} />
                  <Text style={styles.postLikeNumber}>0</Text>
                </View>
                <View style={styles.postLocationThmb}>
                  <Image style={styles.postLocationIcon} source={mapPin} />
                  <Text style={styles.postLocationTitle}>Ukraine</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.post}
              onPress={() => navigation.navigate("Coments")}
            >
              <Image
                source={image}
                style={{ ...styles.postImg, width: dimensions }}
              />
              <Text style={styles.postTitle}>Лес</Text>
              <View style={styles.postFooter}>
                <View style={styles.postCommentThmb}>
                  <Image style={styles.postCommentIcon} source={commentPin} />
                  <Text style={styles.postCommentNumber}>555</Text>
                </View>
                <View style={styles.postLikeThmb}>
                  <Image style={styles.postLikeIcon} source={lokePin} />
                  <Text style={styles.postLikeNumber}>5555</Text>
                </View>
                <View style={styles.postLocationThmb}>
                  <Image style={styles.postLocationIcon} source={mapPin} />
                  <Text style={styles.postLocationTitle}>Ukraine</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
    paddingTop: 92,
    paddingBottom: 43,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  image: {
    flex: 1,
    paddingTop: 147,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
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
    // justifyContent: "space-between",
  },
  postCommentThmb: {
    flexDirection: "row",
    marginRight: 24,
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
  postLikeThmb: {
    flexDirection: "row",
  },
  postLikeIcon: {
    marginRight: 9,
  },
  postLikeNumber: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
  },
  postLocationThmb: {
    marginLeft: "auto",
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
