import React from "react";
import { Text } from "react-native";

import Home from "./src/screen/containers/home";
import Header from "./src/section/components/header";

const App: () => React$Node = () => {
  return (
    <>
      <Home>
        <Header/>
        <Text>buscador</Text>
        <Text>categorías</Text>
        <Text>sugerencias</Text>
      </Home>
    </>
  );
};

export default App;
