import React, {useEffect} from 'react';
import { Keyboard, BackHandler } from 'react-native';
import { Container, SearchBar, TextInput, Icon, HoursContainer } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Hours from '../../hours';
import defaultColors from '../../../assets/colors/defaultColors.json';
import {SearchIcon} from '../../../assets/svg/icon';

const HARDWARE_BACK_PRESS = 'hardwareBackPress';

export default ({
    width, 
    setSearchText, 
    setTextInputIsOnFocus, 
    searchText, 
    click, 
    backToDefaultContent,
    isSearchingOnHome
}) => {
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setTextInputIsOnFocus(true);
            BackHandler.addEventListener(HARDWARE_BACK_PRESS, backToDefaultContent);
        });
    }, []);

    return (
        <Container
            width={width}
        >
            <SearchBar
                isSearchingOnHome={isSearchingOnHome}
                colorToIsSearching={defaultColors.Lila}
            >
                <TextInput 
                    placeholder="Buscar..."
                    placeholderTextColor={defaultColors.GrisOscuro} 
                    value={searchText} 
                    onChangeText={(text) => setSearchText(text)}
                    onFocus={() => {
                        setTextInputIsOnFocus(true);
                        BackHandler.addEventListener(HARDWARE_BACK_PRESS, backToDefaultContent);
                    }}
                />
                <Icon>
                    <SearchIcon
                        size={20}
                    />
                </Icon>
            </SearchBar>
            <HoursContainer>
                <Hours 
                    click={click}
                    changeColor={isSearchingOnHome}
                >
                    3h
                </Hours>
            </HoursContainer>
        </Container>
    )
}