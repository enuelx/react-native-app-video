import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import Home from './src/screen/containers/home';
import Header from './src/section/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header />
        <Text>buscador</Text>
        <Text>categorías</Text>
        <SuggestionList />
      </Home>
    );
  }
}