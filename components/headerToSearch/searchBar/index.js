import React, {useEffect} from 'react';
import { Keyboard, BackHandler } from 'react-native';
import { Container, SearchBar, TextInput, Icon, HoursContainer } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Hours from '../../hours';

export default ({width, setSearchText, setTextInputIsOnFocus, searchText, click, backToDefaultContent}) => {
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setTextInputIsOnFocus(true);
            BackHandler.addEventListener('hardwareBackPress', backToDefaultContent);
        });
    }, []);

    useEffect(() => {
        Keyboard.addListener('keyboardDidChangeFrame', () => {
            console.log('ñe')            
        });
    }, []);

    return (
        <Container
            width={width}
        >
            <SearchBar>
                <TextInput 
                    placeholder="Buscar..." 
                    value={searchText} 
                    onChangeText={(text) => setSearchText(text)}
                />
                <Icon>
                    <FontAwesomeIcon 
                        icon={faSearch} 
                        resizeMode='stretch'
                    />
                </Icon>
            </SearchBar>
            <HoursContainer>
                <Hours 
                    click={click}
                >
                    3h
                </Hours>
            </HoursContainer>
        </Container>
    )
}