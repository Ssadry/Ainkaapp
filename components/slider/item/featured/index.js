import React from 'react';
import {
    Container,
    Content,
    ImageBackground,
    BookMark,
    Info,
    Title,
    HoursContainer,
    Hours,
    StarsContainer,
    Top,
    Bottom,
    Star
} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLink, faStar } from '@fortawesome/free-solid-svg-icons'
import {SavedIcon} from '../../../../assets/svg/icon';
import Icon from '../../../../assets/icon.png';

const Featured = ({
    width = 200, 
    title = 'Title', 
    hours = -1,
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
                        <SavedIcon
                            color='rgba(170, 170, 170, 1)'
                            size={30}
                        />
                    </BookMark>
                </ImageBackground>
                <Info width={contentWidth}>
                    <Top>
                        <Title
                            adjustFontSizeToFit
                            numberOfLines={2}
                        >
                            {title}
                        </Title>
                        <HoursContainer>
                            <Hours>
                                {hours + 'h'}
                            </Hours>
                        </HoursContainer>
                    </Top>
                    <Bottom>
                        <StarsContainer>
                            <Star>
                                <FontAwesomeIcon icon={faStar} color='white'/>
                            </Star>
                            <Star>
                                <FontAwesomeIcon icon={faStar} color='white'/>
                            </Star>
                            <Star>
                                <FontAwesomeIcon icon={faStar} color='white'/>
                            </Star>
                            <Star>
                                <FontAwesomeIcon icon={faStar} color='white'/>
                            </Star>
                            <Star>
                                <FontAwesomeIcon icon={faStar} color='white'/>
                            </Star>
                        </StarsContainer>
                        <FontAwesomeIcon 
                            icon={faLink} 
                            color={'white'} 
                            size={25}
                        />
                    </Bottom>
                </Info>
            </Content>
        </Container>
    );
};

export default Featured;