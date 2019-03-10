import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import List from './components/List';
import Main from './components/Main';

export default class App extends Component {

  state = {
    pokemons: [],
    selectedPokemonUrl: null,
    selectedPokemonData: null
  }

  //async : 비동기 키워드
  async componentDidMount() { //서버 실행 후, 단 한번 실행되는 것을 console.log를 통해 확인가능
    try{
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1000'); //fetch메소드 호출-인자 : 데이터를 가져올 api 주소
      const data = await response.json();

      const {results} = data;

      this.setState({
        pokemons: results
      });

    }catch(error){
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps, prevState){//prop : state가 바뀌었을 때 업데이트 됨
    if(prevState.selectedPokemonUrl !== this.state.selectedPokemonUrl){
      // selectedPokemonUrl이 변했을 떄만 해당 로직을 수행!
      try{
        const response = await fetch(this.state.selectedPokemonUrl); 
        const data = await response.json();

        this.setState({
          selectedPokemonData: data
        });

      }catch(error){

      }
    }
  }

  handleSelect = (url) => {
    this.setState({
      selectedPokemonUrl: url //select한 url로 업데이트 -> componentDidUpdate (라이프사이클 메소드)
    })
  }

  render() {
    const { pokemons, selectedPokemonUrl, selectedPokemonData } = this.state;
    return (
      <Wrapper>
        <Globalstyle />
        <Main data={selectedPokemonData} />
        
        <List
        pokemons={pokemons}
        onSelect={this.handleSelect}
        selectedPokemonUrl={selectedPokemonUrl}
        />
      </Wrapper>
    );
  }
}

const Globalstyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0px;
    padding: 0px;
    font-family: "NanumSquare";
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;