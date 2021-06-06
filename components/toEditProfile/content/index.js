import React from 'react';
import {
    Container, 
    PhotoProfileContainer, 
    ChangePhotoText, 
    PhotoProfile,
    Profile,
    Info,
    ButtonProfile
} from './styled';
import {Dimensions} from 'react-native';
import Icon from '../../../assets/icon.png';

const width = Math.round(Dimensions.get('screen').width);
const padding = width * 0.2;

export default Content = () => {
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
                    >
                        <ButtonProfile>
                            <ChangePhotoText>
                                Cambiar
                            </ChangePhotoText>
                        </ButtonProfile>
                    </PhotoProfile>
                </PhotoProfileContainer>

            </Profile>
            <Info>

            </Info>
        </Container>
    )
}