import React from "react";

import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

function Header(props) {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            source={require("../../../assets/images/logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.right}>
            {props.children}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain'
  },
  container: {
      padding: 10,
      flexDirection: 'row',
  },
  right: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end'
  }
});

export default Header;
