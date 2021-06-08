import 'react-native-gesture-handler';
import React from 'react';
import {Dimensions, Platform, StatusBar} from 'react-native';
import Navigation from './components/navigation/index';
import Provider from './application/provider';
import styled from 'styled-components/native';

export default () => {
    return (
        <Container>
            <Provider>
                <Navigation/>
            </Provider>
        </Container>
    );
}

const Container = styled.SafeAreaView`
    height: ${Dimensions.get('screen').height + 'px'};
    flex: 1;
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight + 'px' : 0};
`;

// import React from 'react';
// import styled from 'styled-components/native';
// import DraggableComponent from './components/draggableComponent';

// export default () => {
//     return (
//         <Container>
//             <Slider>
//                 <DraggableComponent
//                     direction={{horizontal: true, vertical: false}}
//                 >
//                     <ComponentToDrag/>
//                 </DraggableComponent>
//             </Slider>
//         </Container>
//     )
// }

// const Container = styled.View`
//     flex: 1;
//     background-color: cyan;
//     justify-content: center;
//     align-items: center;
// `;

// const ComponentToDrag = styled.View`
//     width: 40px;
//     height: 40px;
//     border-radius: 20px;
//     border-width: 1px;
//     background-color: aquamarine;
// `;

// const Slider = styled.View`
//     width: 200px;
//     height: 40px;
//     border-radius: 100px;
//     background-color: white;
// `;

//DANIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII

// import React from 'react';
// import {post} from './services';
// import {View} from 'react-native';
// import Icon from './assets/icon.png';

// export default () => {
//     const url = 'https://pablomonteserin.com/sites/ainkaa/index.php/services/postservices';
//     const params = new URLSearchParams();
//     params.append('Ocio', 0);
//     params.append('Cocina', 0);
//     params.append('Idiomas', 1);
//     params.append('Arte', 0);
//     params.append('Musica', 0);
//     params.append('Deporte', 0);
//     params.append('Manualidades', 0);
//     params.append('Tecnologia', 0);
//     params.append('Transporte', 0);
//     params.append('Otros', 0);
//     params.append('NameService', 'Yatusabeh');
//     params.append('DescService', 'yatusabeh he dicho');
//     params.append('ImageService', Icon);
//     params.append('HoursService', 69);
//     params.append('IsTruek', 0);
//     params.append('IsOnline', 0);
//     params.append('IsPresential', 0);



//     post(url, params);

//     return (
//         <View>

//         </View>
//     )
// }