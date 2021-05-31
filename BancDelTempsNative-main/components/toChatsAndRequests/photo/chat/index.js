import React,  {useState} from 'react';
import {Container, Image} from './styled';
import Photo from '../../../../assets/icon.png';

export default () => {
    const [fatherWidth, setFatherWidth] = useState(0);
    const [fatherHeight, setFatherHeight] = useState(0);

    return (
        <Container 
            onLayout={event => {
                setFatherWidth(event.nativeEvent.layout.width);
                setFatherHeight(event.nativeEvent.layout.height);
            }}
        >
            <Image source={Photo} width={fatherWidth} height={fatherHeight}/>
        </Container>
    )
}