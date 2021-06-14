import React from 'react';
import {
    Container,
    Content,
    ImageContainer,
    Image,
    Name,
    InterestImage,
    InterestsContainer,
    BookMark,
    InterestsContent
} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../../../assets/icon.png';
import {SavedIcon} from '../../../../assets/svg/icon';

const AMOUNT_INTERESTS = 4;

const Profile = ({ 
    width, 
    click = () => alert('click'),
    title = 'User name' 
}) => {
    const contentWidth = width * 0.9;
    const imageWidth = contentWidth * 0.6;
    const interestContainerWidth = contentWidth * 0.9;
    const interestWidth = interestContainerWidth / AMOUNT_INTERESTS * 0.9;

    const interests = [];

    for (let i = 0; i < AMOUNT_INTERESTS; i++)
        interests[i] = 
            <InterestsContent 
                key={i} 
                width={interestWidth}
            >
                <InterestImage 
                    source={Icon} 
                    resizeMode='stretch'
                />
            </InterestsContent>;

    return (
        <Container 
            width={width}
        >
            <Content 
                width={contentWidth} 
                onPress={click}
            >
                <BookMark>
                    <SavedIcon
                        color='rgba(170, 170, 170, 1)' 
                        size={30}
                    />
                </BookMark>
                <ImageContainer 
                    width={imageWidth}
                >
                    <Image 
                        source={Icon} 
                        width={imageWidth}
                    />
                </ImageContainer>
                <Name>
                    {title}
                </Name>
                <InterestsContainer 
                    width={interestContainerWidth}
                >
                    {interests.map(interest => interest)}
                </InterestsContainer>
            </Content>
        </Container>
    );
};

export default Profile;