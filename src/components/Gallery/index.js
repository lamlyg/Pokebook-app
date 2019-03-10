import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';//prop-type  
import GalleryCarousel from '../GalleryCarousel';

export default class Gallery extends React.Component {
  
  state={
    selectedImageType: 'front_default',
  }
  
  handleClick = (type) =>{
    this.setState({
      selectedImageType: type
    })
  }
  
  render() {

    const {images} = this.props;
    
    let selectedImageUrl = null;

    let carouseImages = [];

    if(images){
      selectedImageUrl = images[this.state.selectedImageType];
      carouseImages = Object.keys(images).filter((key)=>{
        return images[key] !== null;
      }).map((key)=>{
        return {
          type: key,
          url: images[key]
        }
      });
    }

    console.log(selectedImageUrl);

    return (
      <Wrapper>
        <Main image={selectedImageUrl}/>
        <GalleryCarousel 
        images={carouseImages}
        onClick={this.handleClick}/>
      </Wrapper>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.object
}

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const Main = styled.div`
  width: 100%;
  height: 270px;
  border: 3px solid #333;
  background-color: #fff;
  margin-bottom: 30px;
  ${(props) => {
    if (props.image) {
      return `background-image: url(${props.image});`
    }
  }}
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
`;