import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

let itemArray = new Array(9).fill("empty");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross: false,
      winMessage: "",
    };
    this.winGame = this.winGame.bind(this);
  }

  drawItem = (itemNumber) => {
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = this.state.isCross;
      this.setState({
        isCross: !itemArray[itemNumber],
      });

      // Check for Win
      this.winGame();
    }
  };

  chooseItemIcon = (itemNumber) => {
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "cross" : "circle";
    }
    return "pencil";
  };

  chooseItemColor = (itemNumber) => {
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "red" : "green";
    }
    return "black";
  };

  resetGame = () => {
    itemArray.fill("empty");
    this.setState({ winMessage: "" });
    this.forceUpdate();
  };

  winGame = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" win !"),
      });
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      this.setState({
        winMessage: (itemArray[3] ? "Cross" : "Circle").concat(" win !"),
      });
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[6] ? "Cross" : "Circle").concat(" win !"),
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" win !"),
      });
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      this.setState({
        winMessage: (itemArray[1] ? "Cross" : "Circle").concat(" win !"),
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[2] ? "Cross" : "Circle").concat(" win !"),
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" win !"),
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      this.setState({
        winMessage: (itemArray[2] ? "Cross" : "Circle").concat(" win !"),
      });
    }
  };

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <LinearGradient
            colors={["#BB2CD9", "#E74292"]}
            style={styles.linearHeadFoot}
            start={[0, 1]}
            end={[1, 0]}
          >
            <Text style={styles.heading}> ==|| Tic-Tac-Toe ||== </Text>
          </LinearGradient>
        </View>
        <View style={styles.container}>
          <View style={styles.grid}>
            <View style={styles.row}>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(0);
                  }}
                >
                  <Entypo
                    name={this.chooseItemIcon(0)}
                    size={50}
                    color={this.chooseItemColor(0)}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(1);
                  }}
                >
                  <Entypo
                    name={this.chooseItemIcon(1)}
                    size={50}
                    color={this.chooseItemColor(1)}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(2);
                  }}
                >
                  <Entypo
                    name={this.chooseItemIcon(2)}
                    size={50}
                    color={this.chooseItemColor(2)}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(3);
                  }}
                >
                  <Entypo
                    name={this.chooseItemIcon(3)}
                    size={50}
                    color={this.chooseItemColor(3)}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(4);
                  }}
                >
                  <Entypo
                    name={this.chooseItemIcon(4)}
                    size={50}
                    color={this.chooseItemColor(4)}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(5);
                  }}
                >
                  <Entypo
                    name={this.chooseItemIcon(5)}
                    size={50}
                    color={this.chooseItemColor(5)}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(6);
                  }}
                >
                  <Entypo
                    name={this.chooseItemIcon(6)}
                    size={50}
                    color={this.chooseItemColor(6)}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(7);
                  }}
                >
                  <Entypo
                    name={this.chooseItemIcon(7)}
                    size={50}
                    color={this.chooseItemColor(7)}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(8);
                  }}
                >
                  <Entypo
                    name={this.chooseItemIcon(8)}
                    size={50}
                    color={this.chooseItemColor(8)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={styles.winMessage}>{this.state.winMessage}</Text>
          <TouchableOpacity onPress={this.resetGame}>
            <LinearGradient
              colors={["purple", "#E74292"]}
              style={styles.button}
              start={[0, 1]}
              end={[1, 0]}
            >
              <Text style={styles.btnText}>Reset</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <LinearGradient
            colors={["#BB2CD9", "#E74292"]}
            style={styles.linearHeadFoot}
            start={[0, 1]}
            end={[1, 0]}
          >
            <Text style={styles.heading}> Made By Manish </Text>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  header: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
  },
  linearHeadFoot: {
    padding: 15,
    alignItems: "center",
    width: "100%",
  },
  container: {
    flex: 8,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  item: {
    borderWidth: 2,
    borderColor: "black",
    padding: 30,
  },
  winMessage: {
    padding: 20,
    fontSize: 32,
    fontWeight: "bold",
    color: "#E71C23"
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 50,
    width: "100%",
  },
  btnText: {
    color: "white",
    fontSize: 25,
    width: 275,
    textAlign: "center",
  },
  footer: {
    flex: 1,
    width: "100%",
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  footing: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
  },
});
