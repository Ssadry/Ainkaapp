import React from 'react';
import { Dimensions } from 'react-native';
import {Container} from './styled';

export const SLIDER_WIDTH = Dimensions.get('screen').width + 80
export const SLIDER_HEIGHT = Dimensions.get('screen').height;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
export const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.5)

export default Item = ({ item, index }) => {
  return (
    <Container 
        key={index}
        itemWidth={ITEM_WIDTH}
    >
      {
        item.screen
      }
    </Container>
  )
}