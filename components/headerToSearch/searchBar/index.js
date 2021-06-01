import React from 'react';
import { Container, SearchBar, TextInput, Icon, HoursContainer } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import Hours from '../../hours';

export default ({width, setText, searchText, click}) => {
    const searchBarWidth = width * 0.8;
    const profileContainerWidth = width * 0.1;
    const textInputWidth = searchBarWidth * 0.85;
    const imageWidth = searchBarWidth * 0.15;
    // const notificationPointWidth = profileContainerWidth * 0.7;

    return (
        <Container>
            <SearchBar width={searchBarWidth}>
                <TextInput 
                    placeholder="Buscar..." 
                    value={searchText} 
                    onChangeText={(text) => setText(text)} 
                    width={textInputWidth}
                />
                <Icon width={imageWidth}>
                    <FontAwesomeIcon 
                        icon={faSearch} 
                        resizeMode='stretch'
                    />
                </Icon>
            </SearchBar>
            <HoursContainer>
                <Hours 
                    click={click}
                    width={profileContainerWidth}
                >
                    3h
                </Hours>
            </HoursContainer>
            {/* <ProfileContainer 
                onPress={_ => click()}
                width={profileContainerWidth}
            >
                <Profile>
                    <Hours 
                        adjustFontSizeToFit={true} 
                        numberOfLines={1}
                    >
                        3h
                    </Hours>
                </Profile>
                <NotificationPoint
                        width={notificationPointWidth}
                />
            </ProfileContainer> */}
        </Container>
    )
}