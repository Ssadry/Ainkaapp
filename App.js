// import 'react-native-gesture-handler';
// import React from 'react';
// import {Dimensions, Platform, StatusBar} from 'react-native';
// import Navigation from './components/navigation/index';
// import Provider from './application/provider';
// import styled from 'styled-components/native';

// export default () => {
//     return (
//         <Container>
//             <Provider>
//                 <Navigation/>
//             </Provider>
//         </Container>
//     );
// }

// export const Container = styled.SafeAreaView`
//     height: ${Dimensions.get('screen').height + 'px'};
//     flex: 1;
//     padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight + 'px' : 0};
// `;

import React from "react";
import Slider from '@react-native-community/slider';
import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";

export default () => {
    const [value, setValue] = React.useState();
    return (
        <Container>
              <Slider
                style={{width: 300, height: 200}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#001eff"
                maximumTrackTintColor="#000000"
            />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;