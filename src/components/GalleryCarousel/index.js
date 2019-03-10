import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';//prop-type  


//GalleryCarousel의 컴포넌트는 react에서 할당받은 class based컴포넌트가 아닌 
//function based컴포넌트
const GalleryCarousel = (props) => {
  const {images, onClick} = props;

  return (
    <Wrapper>
    {
      images.map((image)=>{
        const{type, url}=image;
        return(
          <Box key={type} onClick={()=>onClick(type)}>
          <img src={url} alt=""/>
          </Box>
        )
      })
    }
    </Wrapper>
  );
}

GalleryCarousel.propTypes={
  images: PropTypes.array,
  onClick: PropTypes.func,
}

const Wrapper = styled.div`
  white-space: nowrap;
  overflow-y: scroll;
`;

const Box = styled.div`
  display: inline-block;
  margin-right: 20px;
  border: 3px solid #333;
  width: 100px;
  height: 100px;
  background-color: #fff;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default GalleryCarousel;