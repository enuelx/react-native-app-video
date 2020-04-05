import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import Home from './src/screen/containers/home';
import Header from './src/section/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api';
import CategoryList from './src/videos/containers/category-list';
import Video from 'react-native-video';

type Props = {};
export default class App extends Component<Props> {
  state = {
    SuggestionList: [],
    CategoryList: []
  }
  async componentDidMount() {
    const sugerencias = await API.getSuggestion(10);
    const categorias = await API.getMovies();
    this.setState({
      SuggestionList: sugerencias,
      CategoryList: categorias
    })
  }
  render() {
    return (
      <Home>
        <Header />
        <View style={{ flex:1, height:100 }}>
          <Video
            source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0
            }}
            resizeMode="contain"
          />
        </View>
        <Text>buscador</Text>
        <CategoryList
          list={this.state.CategoryList}
        />
        <SuggestionList
          list={this.state.SuggestionList}
        />
      </Home>
    );
  }
}