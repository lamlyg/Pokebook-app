import React from 'react';
import styled from 'styled-components';
import { listenerCount } from 'events';
import PropTypes from 'prop-types';//prop-type  

export default class List extends React.Component {
  render() {

    const {pokemons, onSelect, selectedPokemonUrl} = this.props;

    return (
      <Wrapper>
        {
          pokemons.map((pokemon)=>{
            const {name, url} = pokemon;
            console.log(selectedPokemonUrl)
          return<Item active={url === selectedPokemonUrl} key={url} onClick={() => onSelect(url)}>{name}</Item>
          })
      }
      </Wrapper>
    )
  }
}

List.propTypes = {
  pokemons: PropTypes.array,
  onSelect: PropTypes.func,
  selectedPokemonUrl: PropTypes.string,
}

const Wrapper = styled.div`
  display: inline-block;
  width: 250px;
  height: 800px;
  border: 3px solid #333;
  border-left: 0px;
  overflow-y: scroll;
`;

const Item = styled.div`
  cursor: pointer;
  height: 60px;
  padding: 15px 20px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  color: ${(props) => props.active ? '#fff' : '#333'};
  background-color: ${(props) => props.active ? '#333' : '#f9f9f9' };
`;