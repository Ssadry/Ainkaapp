import React from 'react';
import { Slider, Content, Container, ScrollView } from './styled';
import Icon from './icon/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

export default ({numberItemsDisplayed, items, setItemsWidth}) => {
    return (
        <Slider>
            <Icon>
                <FontAwesomeIcon icon={faCaretLeft}/>
            </Icon>
            <ScrollView
                horizontal={true} 
                showsHorizontalScrollIndicator={false}  
                onLayout={
                    ({nativeEvent}) => {
                        const {width} = nativeEvent.layout;
                        setItemsWidth(width / numberItemsDisplayed);
                    }
                }
            >
                <Content>
                    <Container>
                        {
                            items.map(item => item)
                        }
                    </Container>
                </Content>
            </ScrollView>
            <Icon>
                <FontAwesomeIcon icon={faCaretRight}/>
            </Icon>
        </Slider>
    )
}