import React from 'react';
import {Container, Top, Bottom, TextButton, LeftText, RightText} from './styled';
import Slider from '../../slider';
import defaultColors from '../../../assets/colors/defaultColors.json';

export default ({
    numberItemsDisplayed, 
    items,
    itemName,
    setItemsWidth, 
    leftText, 
    rightText, 
    navigation
}) => {
    return (
        <Container>
            <Top>
                <LeftText>
                    {leftText}
                </LeftText>
                <TextButton onPress={() => {
                    navigation.navigate('WatchMoreItems', {
                        title: leftText,
                        itemName: itemName,
                    });
                }}>
                    <RightText
                        color={defaultColors.Lila}
                    >
                        {rightText}
                    </RightText>
                </TextButton>
            </Top>
            <Bottom>
                <Slider
                    numberItemsDisplayed={numberItemsDisplayed}
                    items={items}
                    setItemsWidth={setItemsWidth}
                />
            </Bottom>
        </Container>
    )
}