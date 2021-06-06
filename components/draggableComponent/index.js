import React, { useState } from "react";
import { Animated, PanResponder } from "react-native";
import styled from 'styled-components/native';
import Icon from '../../assets/icon.png';

export default ({
    image = Icon,
    children = <Box source={Icon} resizeMode='stretch'/>,
    direction = {horizontal: true, vertical: false}
}) => {
  const [pan, setPan] = useState(new Animated.ValueXY());

  console.log(pan)

  const [panResponder] = useState(
    PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            console.log(pan.x)
            pan.setOffset({
                x: pan.x._value,
                y: pan.y._value
            });
            // setPan({
            //     x: pan.x,
            //     y: pan.y
            // })
        },
        onPanResponderMove: 
            Animated.event(
                [
                    null, 
                    { dx: pan.x, dy: pan.y }
                ], 
                {useNativeDriver: false}
            ),
            // (e, gestureState) => {
            //     const {dx, dy} = gestureState;
            //     setPan({
            //         x: dx < 180 ? dx <= 0 ? 0 : dx : 180,
            //         y: dy
            //     })
            //     console.log(gestureState)
            //     Animated.event(
            //         [
            //             null, 
            //             pan
            //         ], 
            //         {useNativeDriver: false}
            //     )
            // },  
        onPanResponderRelease: () => {
            pan.flattenOffset();
        }
    })
  );

  return (
    <Container>
        {
            image != null || image != undefined ? 
                <Animated.Image
                    style={{
                        transform: [{ translateX: pan.x }, { translateY: direction.vertical ? pan.y : 0 }], backgroundColor: 'red', width: 40, height: 40
                    }}
                    {...panResponder.panHandlers}
                    source={Icon}
                    resizeMode='stretch'
                />
                :
                <Animated.View
                    style={{
                        transform: [{ translateX: pan.x }, { translateY: direction.vertical ? pan.y : 0 }], backgroundColor: 'red', height: 40, width: 40, borderRadius: 5, borderWidth: 1
                    }}
                    {...panResponder.panHandlers}
                />
        }
    </Container>
  );
}

const Container = styled.View`
    flex: 1;
`;

const Box = styled.ImageBackground`
    height: 40px;
    width: 40px;
    border-radius: 5px;
    border-width: 1px;
    background-color: white;
`;