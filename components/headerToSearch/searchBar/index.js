import React from 'react';
import { Container, SearchBar, TextInput, Icon, ProfileContainer, Profile, Hours } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons'

export default ({width, setText, searchText, click}) => {
    const searchBarWidth = width * 0.85;
    const profileContainerWidth = width * 0.1;
    const textInputWidth = searchBarWidth * 0.85;
    const imageWidth = searchBarWidth * 0.15;
    const profileWidth = profileContainerWidth * 0.99;

    return (
        <Container width={width}>
            <SearchBar width={searchBarWidth}>
                <TextInput 
                    placeholder="Buscar..." 
                    value={searchText} 
                    onChangeText={(text) => setText(text)} 
                    width={textInputWidth}
                />
                <Icon width={imageWidth}>
                    <FontAwesomeIcon icon={faSearch} resizeMode='stretch'/>
                </Icon>
            </SearchBar>
            <ProfileContainer 
                onPress={_ => click()}
                width={profileContainerWidth}
            >
                <Profile width={profileWidth}>
                    <Hours adjustFontSizeToFit={true} numberOfLines={1}>10 h</Hours>
                </Profile>
            </ProfileContainer>
        </Container>
    )
}