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
import {View, Text} from 'react-native';

export default () => {
    const arr = [
        <ToArray/>,
        <ToArray/>,
        <ToArray/>,
        <ToArray/>,
    ];
    return (
        <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 40}}>
            <AnotherComponent arr={arr}/>
        </View>
    )
}

export const AnotherComponent = ({arr}) => {
    return (
        <View>
            <Text>
                {
                    arr.map((num, i) => {
                        const v = 700;
                        num.props.width = v;
console.log(num)
                        return num
                    })
                }
            </Text>
        </View>
    )
}

export const ToArray = ({width}) => {
    return (
        <View style={{width: width, backgroundColor: 'cyan', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                Andry
            </Text>
        </View>
    )
}