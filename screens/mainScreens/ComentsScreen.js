import React from "react";
import { useState, useEffect } from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
// import {  } from "@expo/vector-icons";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Platform,
  ScrollView,
} from "react-native";

const initialState = {
  comment: "",
};
const sendIcon = require("../../assets/icon/send.png");
const img = require("../../assets/images/postImg1.png");
const ava1 = require("../../assets/images/avatar2.jpg");
const ava2 = require("../../assets/images/avatar.png");

export default function CommentsScreen({ navigation }) {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [comment, setComment] = useState(initialState);
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
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      dimensionsHandler.remove();
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const keyboardHide = () => {
    setKeyboardVisible(false);
    Keyboard.dismiss();
  };

  const submitForm = () => {
    const takeDate = () => {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0");
      let yyyy = today.getFullYear();
      let hh = today.getHours() + ":" + today.getMinutes();
      today = mm + "/" + dd + "/" + yyyy + " | " + hh;
      return today;
    };
    const commentDate = takeDate();

    console.log("Text:", comment.comment, "Date:", takeDate());
    setComment(initialState);
    navigation.navigate("PostsScreen", comment);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={{ maxWidth: dimensions }}>
          {!isKeyboardVisible && (
            <>
              <View style={styles.postImgThmb}>
                <Image source={img} style={styles.postImg} />
              </View>
            </>
          )}

          <ScrollView style={{ ...styles.commentsList }}>
            <View
              // style={{ ...styles.comment, maxWidth: dimensions - 50 }}
              style={{ ...styles.comment }}
            >
              <View style={styles.imgThmb}>
                <Image source={ava1} style={styles.img} />
              </View>
              <View
                style={{ ...styles.commentThmb, maxWidth: dimensions - 40 }}
              >
                <Text style={styles.text}>
                  Really love your most recent photo. I’ve been trying to
                  capture the same thing for a few months and would love some
                  tips!
                </Text>
                <Text style={styles.date}>09 июня, 2020 | 08:40</Text>
              </View>
            </View>

            <View
              style={{
                ...styles.comment,
                ...styles.commentRevers,
              }}
            >
              <View style={{ ...styles.imgThmb, ...styles.imgThmbReverse }}>
                <Image source={ava2} style={styles.img} />
              </View>
              <View
                style={{
                  ...styles.commentThmb,
                  ...styles.commentThmbRevers,
                  maxWidth: dimensions - 40,
                }}
              >
                <Text style={styles.text}>
                  A fast 50mm like f1.8 would help with the bokeh. I’ve been
                  using primes as they tend to get a bit sharper images.
                </Text>
                <Text style={{ ...styles.date, ...styles.dateReverse }}>
                  09 июня, 2020 | 09:14
                </Text>
              </View>
            </View>

            <View
              style={{
                ...styles.comment,
                ...styles.commentRevers,
              }}
            >
              <View style={{ ...styles.imgThmb, ...styles.imgThmbReverse }}>
                <Image source={ava2} style={styles.img} />
              </View>
              <View
                style={{
                  ...styles.commentThmb,
                  ...styles.commentThmbRevers,
                  maxWidth: dimensions - 40,
                }}
              >
                <Text style={styles.text}>
                  A fast 50mm like f1.8 would help with the bokeh. I’ve been
                  using primes as they tend to get a bit sharper images.
                </Text>
                <Text style={{ ...styles.date, ...styles.dateReverse }}>
                  09 июня, 2020 | 09:14
                </Text>
              </View>
            </View>
          </ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isKeyboardVisible ? 10 : 0,
              }}
            >
              <View style={{ ...styles.inputThmb, marginTop: "auto" }}>
                <TextInput
                  placeholder="Комментировать..."
                  value={comment.comment}
                  style={styles.input}
                  textAlign={"left"}
                  onFocus={() => setKeyboardVisible(true)}
                  onChangeText={(value) =>
                    setComment((prevState) => ({
                      ...prevState,
                      comment: value,
                    }))
                  }
                />
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.subBtn}
                  onPress={() => submitForm()}
                >
                  <AntDesign name="arrowup" size={14} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 16,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  postImgThmb: {
    marginBottom: 32,
  },
  postImg: {
    width: "100%",
    borderRadius: 8,
    marginBottom: 8,
  },
  commentsList: {
    marginBottom: 31,
  },
  comment: {
    flexDirection: "row",
    marginBottom: 24,
    justifyContent: "center",
  },
  commentRevers: { flexDirection: "row-reverse" },
  imgThmb: {
    marginRight: 15,
  },
  imgThmbReverse: {
    marginRight: 0,
    marginLeft: 15,
  },

  img: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  commentThmb: {
    padding: 16,
    borderTopRightRadius: 6,
    // borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  commentThmbRevers: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 6,
  },
  text: {
    marginBottom: 8,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "400",
    color: "#212121",
    fontFamily: "Roboto-Regular",
  },
  date: {
    textAlign: "right",
    fontSize: 10,
    lineHeight: 12,
    fontWeight: "400",
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
  },
  dateReverse: {
    textAlign: "left",
  },

  inputThmb: {
    marginTop: "auto",
    position: "relative",
  },
  input: {
    padding: 8,
    paddingLeft: 16,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
  },
  subBtn: {
    position: "absolute",
    right: 8,
    bottom: 6,

    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    borderColor: "transparent",
  },
});
