// import 'react-native-gesture-handler';
// import React from 'react';
// import {Dimensions} from 'react-native';
// import Navigation from './components/navigation/index';
// import Provider from './application/provider';
// import PostAdPopUp from './screens/postAd';
// import styled from 'styled-components/native';

// const WINDOW = 'window';
// const {width} = Dimensions.get(WINDOW);
// const {height} = Dimensions.get(WINDOW);

// export default () => {
//     return (
//         <Container>
//             <Provider>
//                 <Navigation/>
//                 <PostAdPopUp/>
//             </Provider>
//         </Container>
//     );
// }

// export const Container = styled.View`
//     width: ${width + 'px'};
//     height: ${height + 'px'};
//     position: absolute;
//     bottom: 0px;
//     left: 0px;
// `;

import React, {useRef} from 'react';
import {Platform, StatusBar, StyleSheet, SafeAreaView, View, Animated, TouchableHighlight, Text, Dimensions} from 'react-native';
import user from './components/toServices/user';

export default () => {
    return (
        <SafeAreaView style={styleDefault.container}>
            <TranslateAnim/>
        </SafeAreaView>
    );
};

const styleDefault = {
    container : {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
}

export const TranslateAnim = () => {
    const transAnim = React.useState(new Animated.Value(0))[0];
    let {height} = useRef(Dimensions.get('screen')).current;

    const move = (value) => {
        Animated.timing(transAnim, {
            toValue: value,
            duration: 500,
            useNativeDriver: true
        }).start();
    }

    return (
        <View style={styleTranslateAnim.content}>
            <Animated.View
                style={[styleTranslateAnim.fromAnim, {
                    transform: [{translateY: transAnim}]
                }]}
            >
                <View style={styleTranslateAnim.popUp}>
                    <Text>
                        Holita :)
                    </Text>
                </View>
            </Animated.View>
            <TouchableHighlight 
                style={styleTranslateAnim.button}
                onPress={() => {
                    height *= -1;
                    move(height);
                }}
            >
                <Text>
                    Pulsame, pelotudo
                </Text>
            </TouchableHighlight>
        </View>
    )
}

const styleTranslateAnim = {
    content : {
        flex: 1,
        backgroundColor: 'cyan',
    },
    fromAnim : {
        flex: 1,
        backgroundColor: 'green',
        position: 'relative',
        bottom: -Dimensions.get('screen').height,
        left: 0,
    },
    popUp : {
        backgroundColor: '#FF970F',
        width: Dimensions.get('screen').width * 0.90,
        height: Dimensions.get('screen').height,
        position: 'absolute',
        top: 0,
        left: Dimensions.get('screen').width * 0.05,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button : {
        borderWidth: 1,
        padding: 20,
        backgroundColor: 'white'
    }
}

export const FadeAnim = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = _ => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start(() => {
            alert("Me acabé de animar c:");
        });
    }

    return (
        <View style={styleFadeAnim.content}>
            <Animated.View
                style={[styleFadeAnim.circle, {
                    opacity: fadeAnim
                }]}
            >
                <View style={styleFadeAnim.circle}></View>
            </Animated.View>
            <TouchableHighlight 
                style={styleFadeAnim.th}
                onPress={fadeIn}
            >
                <Text>
                    Presionar
                </Text>
            </TouchableHighlight>
        </View>
    );
};

const styleFadeAnim = StyleSheet.create({
    content : {
        flex: 1,
        backgroundColor: 'green',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle : {
        backgroundColor: 'red',
        width: 50,
        height: 50,
        borderRadius: 25,
        position: 'relative'
    },
    th : {
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 20
    }
});