import React, {useState} from 'react';
import {Animated, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const WINDOW = 'window';
const {width} = Dimensions.get(WINDOW);
let {height} = Dimensions.get(WINDOW);

export default () => {
    const bottomValue = useState(new Animated.Value(0))[0];

    const move = (value) => {
        Animated.timing(bottomValue, {
            toValue: value,
            duration: 500,
            useNativeDriver: true
        }).start();
    };

    return (
        <Container>
            <Animated.View style={[{transform: [{translateY: height}]}]}>
                <Pop/>
            </Animated.View>
            <Button onPress={() => {
                height *= -1;
                move(0);
            }}>
                <Text>
                    Mover
                </Text>
            </Button>
        </Container>
    )
}

export const Pop = () => {
    const [popIsVisible, setPopIsVisible] = useState(false);
    

    return (
        <ContainerPop 
            onPress={() => alert('cyan')}
        >
            <Close onPress={() => alert('rojo')}/>
            <ContentPop>
                Hola :)
            </ContentPop>
        </ContainerPop>
    )
}

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const ContainerPop = styled.TouchableOpacity`
    width: ${width + 'px'};
    height: ${height + 'px'};
    background-color: green;
    position: relative;
    bottom: ${-height + 'px'};
    justify-content: center;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    width: ${width + 'px'};
    position: absolute;
    bottom: 0px;
    justify-content: flex-end;
    border-width: 1px;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

export const Text = styled.Text`
    margin: 20px;
`;

export const Close = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: red;
`;

export const ContentPop = styled.Text`

`;