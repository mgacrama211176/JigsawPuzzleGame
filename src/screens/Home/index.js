import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";
import { Button } from "@rneui/themed";

export default function Home() {
  const randomImage = `https://picsum.photos/seed/${Math.random()}/500`;
  const puzzlePiece = `assets/PuzzlePiece.png`;
  console.log(puzzlePiece);

  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <Text>index</Text>
      <View>
        <Image
          source={{ uri: randomImage }}
          style={{
            width: width,
            height: height / 2,

            padding: 10,
            borderWidth: 2,
            borderColor: "yellow",
          }}
        />
        <Image
          source={{ uri: randomImage }}
          style={{ width: width, height: height / 2 }}
        />
      </View>

      <View style={{ display: "flex", gap: 2, marginTop: 10 }}>
        <Button title="Upload Image" />
        <Button title="Start Game!" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
});
