import React, {useState} from 'react';
import {Keyboard, BackHandler} from 'react-native';
import { Container, GoToDefaultContent, Left, Right, Middle } from './styled';
import SearchBar from './searchBar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Dimensions} from 'react-native';

export default ({searchText, textInputIsOnFocus, setTextInputIsOnFocus, setSearchText, click, navigation}) => {
    const [widthCurrentScreen, setWidthCurrentScreen] = useState(Math.round(Dimensions.get('screen').width));

    const sideWidth = widthCurrentScreen * 0.15;
    const middleWidth = widthCurrentScreen * 0.75;

    const backToDefaultContent = () => {
        setTextInputIsOnFocus(false);
        BackHandler.removeEventListener('hardwareBackPress', backToDefaultContent);
        return true;
    }

    return (
        <Container
            onLayout={
                ({nativeEvent}) => {
                    const {width} = nativeEvent.layout;
                    setWidthCurrentScreen(Math.round(width));
                }
            }
        >
            <Left
                width={sideWidth}
            >
                <GoToDefaultContent
                    width={sideWidth}
                    textInputIsOnFocus={textInputIsOnFocus}
                    onPress={() => {
                        BackHandler.removeEventListener('hardwareBackPress', backToDefaultContent);

                        Keyboard.dismiss();
                        setTextInputIsOnFocus(false);

                        BackHandler.addEventListener('hardwareBackPress', () => {
                            if (navigation.canGoBack()) {
                                navigation.goBack();
                                return true;
                            }
                            BackHandler.exitApp();
                            return false;
                        });
                    }}
                    disabled={!textInputIsOnFocus}
                >
                    <FontAwesomeIcon 
                        icon={faArrowLeft}
                        size={15}
                    />
                </GoToDefaultContent>
            </Left>
            <Middle
                width={middleWidth}
            >
                <SearchBar 
                    width={middleWidth}
                    setTextInputIsOnFocus={setTextInputIsOnFocus}
                    setSearchText={setSearchText}
                    searchText={searchText}
                    click={click}
                    backToDefaultContent={backToDefaultContent}
                />
            </Middle>
            <Right
                width={sideWidth}
            />
        </Container>
    )
}