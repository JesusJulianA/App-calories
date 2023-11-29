import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Icon } from "@rneui/themed";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../types";
import { StackNavigationProp } from "@react-navigation/stack";

const staticInfo = {
  name: "Elijah Ortega",
  uri: "https://yacarros.com/noticias/wp-content/uploads/2022/05/carros-de-lujo-rd.jpg",
};


type RootStackParamListWithIndex = RootStackParamList & {
  [key: string]: any;
};

const Header = () => {
  const { canGoBack, goBack } = useNavigation<
    StackNavigationProp<RootStackParamListWithIndex, "Home">
  >();

  const handlePressBack = () => {
    if (canGoBack()) {
      goBack();
    }
  };

  return (
    <View style={styles.container}>
      {canGoBack() && (
        <View style={styles.containerButton}>
          <Button
            icon={<Icon name="arrow-back" size={30} onPress={handlePressBack} />}
            type="clear"
          />
        </View>
      )}
      <View style={styles.leftContainer}>
        <Text style={styles.name}>Hello {staticInfo.name}</Text>
        <Text style={styles.subText}>welcome back to your goal</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image source={{ uri: staticInfo.uri }} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Back: { fontSize: 20 },
  name: { fontWeight: "bold" },
  subText: { fontWeight: "300" },
  container: { flexDirection: "row", marginTop: 20, marginHorizontal: 10 },
  rightContainer: { flex: 1, alignItems: "flex-end", justifyContent: "center" },
  leftContainer: { flex: 1, justifyContent: "center" },
  containerButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
});

export default Header;
