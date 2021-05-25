import React from 'react';
import { Slider, Content, Container, ScrollView } from './styled';
import Arrow from './arrow/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

export default ({numberItemsDisplayed, items, setItemsWidth}) => {
    return (
        <Slider>
            <Arrow>
                <FontAwesomeIcon icon={faCaretLeft}/>
            </Arrow>
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
            <Arrow>
                <FontAwesomeIcon icon={faCaretRight}/>
            </Arrow>
        </Slider>
    )
}