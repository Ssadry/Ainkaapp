import React, {useState} from 'react';
import {
    Container, 
    PhotoProfileContainer, 
    Name, 
    PhotoProfile,
    Profile,
    Info
} from './styled';
import {Dimensions} from 'react-native';
import Logo from '../../../assets/images//logo.png'
import SwitchView from '../../switchView/buttons';
import ContentProfile from './profile';
import ContentServicies from './servicies';
import ContentNeeds from './needs';

const width = Math.round(Dimensions.get('screen').width);
const padding = width * 0.1;

export default Content = ({
    isOwnProfile = false
}) => {
    const [currentState, setCurrentState] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);
    const buttons = ['Perfil', 'Servicios', 'Necesidades'];
    return (
        <Container
            myPadding={padding}
        >
            <Profile>
                <PhotoProfileContainer>
                    <PhotoProfile 
                        resizeMode='stretch'
                        source={Logo}
                    />
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
                    isOwnProfile={isOwnProfile}
                />
                <ContentNeeds
                    currentState={currentState}
                    pos={2}
                    itemWidth={itemWidth}
                    isOwnProfile={isOwnProfile}
                />
            </Info>
        </Container>
    )
}