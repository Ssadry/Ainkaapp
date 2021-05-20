import React from 'react';
import {Container, Top, Bottom, TextButton, LeftText, RightText} from './styled';
import Slider from '../slider';

export default ({numberItemsDisplayed, items, setItemsWidth, leftText, rightText, navigation}) => {
    return (
        <Container>
            <Top>
                <LeftText>
                    {leftText}
                </LeftText>
                <TextButton onPress={() => {
                    navigation.navigate('WatchMoreItems', {
                        title : leftText,
                        items : items
                    })
                }}>
                    <RightText>
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