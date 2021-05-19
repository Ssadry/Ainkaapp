import React from 'react';
import {Container, Content, Top, Bottom, BookMark, Title, BottomRight, HoursContainer, HoursText} from './styled';
import Icon from '../../../../../../assets/icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark, faLink } from '@fortawesome/free-solid-svg-icons';

export default ({width}) => {
    const contentWidth = width * 0.9;
    const [titleWidth, setTitleWidth] = React.useState(0);
    const [brWidth, setBRWidth] = React.useState(0);

    return (
        <Container width={width}>
            <Content width={contentWidth}>
                <Top 
                    source={Icon}
                    width={contentWidth}
                >
                    <BookMark>
                        <FontAwesomeIcon icon={faBookmark} color='gray'/>
                    </BookMark>
                </Top>
                <Bottom onLayout={({nativeEvent}) => {
                    const {width} = nativeEvent.layout;
                    setTitleWidth(width * 0.6);
                    setBRWidth(width * 0.4);
                }}>
                    <Title 
                        numberOfLines={2}
                        width={titleWidth}
                    >
                        Título de la necesidad
                    </Title>
                    <BottomRight width={brWidth}>
                        <HoursContainer width={brWidth * 0.5}>
                            <HoursText numberOfLines={1}>
                                1h
                            </HoursText>
                        </HoursContainer>
                        <FontAwesomeIcon icon={faLink} color='white'/>
                    </BottomRight>
                </Bottom>
            </Content>
        </Container>
    )
}