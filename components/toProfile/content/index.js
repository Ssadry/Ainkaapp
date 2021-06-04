import React from 'react';
import {
    Container, 
    PhotoProfileContainer, 
    Name, 
    PhotoProfile,
    Profile,
    Info,
    HoursContainer,
    AnotherPhotoProfileContainer
} from './styled';
import {Dimensions} from 'react-native';
import Icon from '../../../assets/icon.png';
import SwitchView from '../../switchView/buttons';
import ContentProfile from './profile';
import ContentServicies from './servicies';
import ContentNeeds from './needs';
import Hours from '../../hours';

const width = Math.round(Dimensions.get('screen').width);
const padding = width * 0.2;

export default Content = ({
    isOwnProfile = false
}) => {
    const [currentState, setCurrentState] = React.useState(2);
    const [itemWidth, setItemWidth] = React.useState(0);
    const buttons = ['Perfil', 'Servicios', 'Necesidades'];
    return (
        <Container
            myPadding={padding}
        >
            <Profile>
                <PhotoProfileContainer>
                    <AnotherPhotoProfileContainer>
                        <PhotoProfile 
                            resizeMode='stretch'
                            source={Icon}
                        />
                    </AnotherPhotoProfileContainer>
                    <HoursContainer
                        isOwnProfile={isOwnProfile}
                    >
                        <Hours/>
                    </HoursContainer>
                </PhotoProfileContainer>
                <Name>
                    Nombre
                </Name>
            </Profile>
            <Info
                onLayout={
                    ({nativeEvent}) => {
                        const {width} = nativeEvent.layout;
                        setItemWidth(width * 0.5);
                    }
                }
            >
                <SwitchView
                    currentState={currentState}
                    setCurrentState={setCurrentState}
                    width={width - padding}
                    allTexts={buttons}
                />
                <ContentProfile
                    currentState={currentState}
                    pos={0}
                />
                <ContentServicies 
                    currentState={currentState}
                    pos={1}
                    itemWidth={itemWidth}
                />
                <ContentNeeds
                    currentState={currentState}
                    pos={2}
                    itemWidth={itemWidth}
                />
            </Info>
        </Container>
    )
}