import React, {useState} from 'react';
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
import Logo from '../../../../assets/images/logo.png';
import {SavedIcon, UnsaveIcon} from '../../../../assets/svg/icon';
import {CheckBox} from 'react-native-elements';
import defaultColors from '../../../../assets/colors/defaultColors.json';
import { ArtIcon, KitchenIcon, MusicIcon, SportIcon } from '../../../../assets/svg/icon';

const AMOUNT_INTERESTS = 4;
const SIZE_ICON = '100%';

const interestsIcons = [
    <ArtIcon
        size={SIZE_ICON}
    />,
    <KitchenIcon
        size={SIZE_ICON}
    />,
    <MusicIcon
        size={SIZE_ICON}
    />,
    <SportIcon
        size={SIZE_ICON}
    />,
]

const Profile = ({ 
    width, 
    click = () => alert('click'),
    title = 'Nombre',
    image = Logo
}) => {
    const contentWidth = width * 0.9;
    const imageWidth = contentWidth * 0.6;
    const interestContainerWidth = contentWidth * 0.9;
    const interestWidth = interestContainerWidth / AMOUNT_INTERESTS * 0.7;
    const [isSaved, setIsSaved] = useState(false);

    const interests = [];

    for (let i = 0; i < AMOUNT_INTERESTS; i++)
        interests[i] = 
            <InterestsContent 
                key={i} 
                width={interestWidth}
            >
                {interestsIcons[i]}
            </InterestsContent>;
    return (
        <Container 
            width={width}
        >
            <Content 
                width={contentWidth} 
                onPress={click}
                backgroundColor={defaultColors.Blanco}
                style={{elevation: 2}}
            >
                <BookMark>
                    <CheckBox
                        center
                        checkedIcon={<SavedIcon size={30} color={defaultColors.Lila}/>}
                        uncheckedIcon={<UnsaveIcon size={30} color={defaultColors.Lila}/>}
                        checked={isSaved}
                        onPress={() => setIsSaved(!isSaved)}
                    />
                </BookMark>
                <ImageContainer 
                    style={{elevation: 1}}
                    width={imageWidth}
                >
                    <Image 
                        source={image} 
                        resizeMode='stretch'
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