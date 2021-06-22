import React, {useContext} from 'react';
import {Container, Top, Bottom, TextButton, LeftText, RightText} from './styled';
import Slider from '../../slider';
import defaultColors from '../../../assets/colors/defaultColors.json';
import { AppContext } from '../../../application/provider';

export default ({
    numberItemsDisplayed, 
    items,
    itemName,
    setItemsWidth, 
    leftText, 
    rightText, 
    navigation
}) => {
    const [routeName] = useContext(AppContext);
    return (
        <Container>
            <Top>
                <LeftText>
                    {leftText}
                </LeftText>
                <TextButton onPress={() => 
                    navigation.navigate(routeName.watchMoreItems, {
                        title: leftText,
                        itemName: itemName,
                    })}
                >
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