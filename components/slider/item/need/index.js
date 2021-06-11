import React from 'react';
import {
    Container,
    Content,
    ImageBackground,
    BookMark,
    Info,
    Title,
    Icons,
    HoursContainer,
    Hours
} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBookmark, faLink } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../../../assets/icon.png';

const Need = ({
    width = 200, 
    title = 'Need', 
    hours = -1 ,
    click = () => alert('click')
}) => {
    const contentWidth = width * 0.9;
    return (
        <Container 
            width={width}
        >
            <Content 
                width={contentWidth}
                onPress={click}
            >
                <ImageBackground 
                    source={Icon}
                    width={contentWidth}
                >
                    <BookMark
                        onPress={() => alert('Guardado')}
                    >
                        <FontAwesomeIcon 
                            icon={faBookmark} 
                            color='rgba(170, 170, 170, 1)'
                            size={25}
                        />
                    </BookMark>
                </ImageBackground>
                <Info width={contentWidth}>
                    <Title
                        adjustFontSizeToFit
                        numberOfLines={2}
                    >
                        {title}
                    </Title>
                    <Icons>
                        <HoursContainer>
                            <Hours>
                                {
                                    hours + 'h'
                                }
                            </Hours>
                        </HoursContainer>
                        <FontAwesomeIcon 
                            icon={faLink} 
                            color={'white'} 
                            size={25}
                        />
                    </Icons>
                </Info>
            </Content>
        </Container>
    );
};

export default Need;