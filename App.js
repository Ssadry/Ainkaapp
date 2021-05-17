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

import React from 'react';
import {Platform, StatusBar, Animated} from 'react-native';
import styled from 'styled-components/native';

export default () => {
    return (
        <Container 
            statusBarHeight={StatusBar.currentHeight}
            platform={Platform.OS}
        >
            <Content>
                <Button onPress={() => alert('xd')}>
                    <TextButton>
                        Púlsame
                    </TextButton>
                </Button>
            </Content>
        </Container>
    )
}

export const Container = styled.SafeAreaView`
    padding-top: ${({statusBarHeight, platform}) => platform === 'android' ? statusBarHeight + 'px' : 0 + 'px'};
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;
    background-color: cyan;
`;

export const Button = styled.TouchableOpacity`
    background-color: white;
    border-width: 1px; 
`;

export const TextButton = styled.Text`
    font-size: 20px;
    text-align: center;
    margin: 20px;
`;