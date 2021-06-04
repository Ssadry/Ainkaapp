    import React from 'react';
    import {
        Container, 
        PhotoProfileContainer, 
        Name, 
        PhotoProfile,
        Profile,
        Info,
    } from './styled';
    import {Dimensions} from 'react-native';
    import Icon from '../../../assets/icon.png';
    import SwitchView from '../../switchView/buttons';
    import ContentProfile from './profile';

    const width = Math.round(Dimensions.get('screen').width);
    const padding = width * 0.2;

    export default Content = () => {
        const [currentState, setCurrentState] = React.useState(0);
        const buttons = ['Perfil', 'Servicios', 'Necesidades'];
        return (
            <Container
                myPadding={padding}
            >
                <Profile>
                    <PhotoProfileContainer>
                        <PhotoProfile 
                            resizeMode='stretch'
                            source={Icon}
                        />
                    </PhotoProfileContainer>
                    <Name>
                        Nombre
                    </Name>
                </Profile>
                <Info>
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
                </Info>
            </Container>
        )
    }