import React, {useState} from 'react';
import {
    Container,
    Content,
    ImageContainer,
    BookMark,
    Info,
    Title,
    HoursContainer,
    Hours,
    StarsContainer,
    Top,
    Bottom,
    Star,
    Image,
    FreeChangeContainer
} from './styled';
import Logo from '../../../../assets/images/logo.png';
import defaultColors from '../../../../assets/colors/defaultColors.json';
import { FreeChangeIcon } from '../../../../assets/svg/icon';
import {CheckBox} from 'react-native-elements';
import {SavedIcon, UnsaveIcon} from '../../../../assets/svg/icon';

const DRAK_BLUE = defaultColors.AzulOscuro;

const Featured = ({
    width = 200, 
    title = 'Title', 
    hours = 0,
    click = () => alert('click'),
    backgroundColor = defaultColors.Blanco,
    titleColor = defaultColors.Negro,
    hoursColor = DRAK_BLUE,
    starsColor = DRAK_BLUE,
    linkColor = DRAK_BLUE
}) => {
    const [isSaved, setIsSaved] = useState(false);
    const contentWidth = width * 0.9;
    return (
        <Container 
            width={width}
        >
            <Content 
                width={contentWidth}
                onPress={click}
                backgroundColor={backgroundColor}
                style={{elevation: 2}}
            >
                <ImageContainer
                    width={contentWidth}
                >
                    <Image
                        source={Logo}
                        resizeMode='stretch'
                    />
                    <BookMark>
                        <CheckBox
                            center
                            checkedIcon={<SavedIcon size={30} color={defaultColors.Lila}/>}
                            uncheckedIcon={<UnsaveIcon size={30} color={defaultColors.Lila}/>}
                            checked={isSaved}
                            onPress={() => setIsSaved(!isSaved)}
                        />
                    </BookMark>
                </ImageContainer>
                <Info 
                    width={contentWidth}
                    backgroundColor={backgroundColor}
                >
                    <Top>
                        <Title
                            color={titleColor}
                            adjustFontSizeToFit
                            numberOfLines={2}
                        >
                            {title}
                        </Title>
                        <HoursContainer
                            color={hoursColor}
                        >
                            <Hours
                                color={hoursColor}
                            >
                                {hours + 'h'}
                            </Hours>
                        </HoursContainer>
                    </Top>
                    <Bottom>
                        <FreeChangeContainer>
                            <FreeChangeIcon
                                size={25}
                            />
                        </FreeChangeContainer>
                    </Bottom>
                </Info>
            </Content>
        </Container>
    );
};

export default Featured;