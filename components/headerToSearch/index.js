import React, {useState} from 'react';
import {Keyboard, BackHandler} from 'react-native';
import { Container, GoToDefaultContent, Left, Right, Middle } from './styled';
import SearchBar from './searchBar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Dimensions} from 'react-native';
import defaultColors from '../../assets/colors/defaultColors.json';

const HARDWARE_BACK_PRESS = 'hardwareBackPress';

export default ({searchText, isSearchingOnHome, setIsSearchingOnHome, setSearchText, click, navigation}) => {
    const [widthCurrentScreen, setWidthCurrentScreen] = useState(Math.round(Dimensions.get('screen').width));

    const sideWidth = widthCurrentScreen * 0.05;
    const middleWidth = widthCurrentScreen * 0.85;

    const backToDefaultContent = () => {
        setIsSearchingOnHome(false);
        BackHandler.removeEventListener(HARDWARE_BACK_PRESS, backToDefaultContent);
        return true;
    }

    return (
        <Container
            bakcgroundColor={defaultColors.Lila}
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
                    textInputIsOnFocus={isSearchingOnHome}
                    onPress={() => {
                        BackHandler.removeEventListener(HARDWARE_BACK_PRESS, () => true);

                        Keyboard.dismiss();
                        setIsSearchingOnHome(false);

                        BackHandler.addEventListener(HARDWARE_BACK_PRESS, () => {
                            if (navigation.canGoBack()) {
                                navigation.goBack();
                                return true;
                            }
                            BackHandler.exitApp();
                            return false;
                        });
                    }}
                    disabled={!isSearchingOnHome}
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
                    setTextInputIsOnFocus={setIsSearchingOnHome}
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