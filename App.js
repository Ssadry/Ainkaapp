import 'react-native-gesture-handler';
import React from 'react';
import {Dimensions, Platform, StatusBar} from 'react-native';
import Navigation from './components/navigation/index';
import Provider from './application/provider';
import PostAdPopUp from './screens/postAd';
import styled from 'styled-components/native';

export default () => {
    return (
        <Container>
            <Provider>
                <Navigation/>
                <PostAdPopUp/>
            </Provider>
        </Container>
    );
}

export const Container = styled.SafeAreaView`
    height: ${Dimensions.get('screen').height + 'px'};
    flex: 1;
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight + 'px' : 0};
`;

// import React from 'react'
// import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native'
// import CarouselCards from './CarouselCards'

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <CarouselCards />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//     paddingBottom: 0
//   },
// });

// import React from 'react';
// import { Text, View } from 'react-native';
// import AppLoading from 'expo-app-loading';
// import { useFonts } from 'expo-font';
// import QuicksandLight from './assets/fonts/Quicksand-Light.ttf';

// export default () => {
//     let [fontsLoaded] = useFonts({'QuicksandLight': QuicksandLight});

//     if (!fontsLoaded) 
//         return <AppLoading />
//     else 
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text style={{ fontFamily: 'QuicksandLight' }}>Quicksand</Text>
//                 <Text>Platform Default</Text>
//             </View>
//         );
// };