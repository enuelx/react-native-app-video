import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import Home from './src/screen/containers/home';
import Header from './src/section/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api';
import CategoryList from './src/videos/containers/category-list';

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
        <Text>buscador</Text>
        <CategoryList
          list = {this.state.CategoryList} 
        />
        <SuggestionList 
          list = {this.state.SuggestionList}
        />
      </Home>
    );
  }
}