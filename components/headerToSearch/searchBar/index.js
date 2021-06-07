import React from 'react';
import { Keyboard } from 'react-native';
import { Container, SearchBar, TextInput, Icon, HoursContainer, GoToDefaultContent } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Hours from '../../hours';

export default ({width, setSearchText, textInputIsOnFocus, setTextInputIsOnFocus, searchText, click}) => {
    const searchBarWidth = width * 0.8;
    const profileContainerWidth = width * 0.1;
    const textInputWidth = searchBarWidth * 0.85;
    const imageWidth = searchBarWidth * 0.15;

    return (
        <Container>
            <GoToDefaultContent
                textInputIsOnFocus={textInputIsOnFocus}
                onPress={() => {
                    setTextInputIsOnFocus(false);
                    setSearchText('');
                    Keyboard.dismiss
                }}
            >
                <FontAwesomeIcon 
                    icon={faArrowLeft}
                    size={25}
                />
            </GoToDefaultContent>
            <SearchBar width={searchBarWidth}>
                <TextInput 
                    placeholder="Buscar..." 
                    value={searchText} 
                    onChangeText={(text) => setSearchText(text)} 
                    width={textInputWidth}
                    onFocus={() => setTextInputIsOnFocus(true)}
                    onSubmitEditing={() => {
                        setTextInputIsOnFocus(false);
                        Keyboard.dismiss
                    }}
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
        </Container>
    )
}