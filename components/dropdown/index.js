import React from 'react';
import {Container, Button, Text} from './styled';

export default Dropdown = ({
    parentLayout = {x: 0, y: 0, width: 100, height: 25},
    optionsArray = ['First', 'Second'],
    optionsHandle = [() => alert('First'), () => alert('Second')],
    isActive = false
}) => {
    const [ownSize, setOwnSize] = React.useState({
        width: 10, 
        height: 10
    });
    return (
        <Container
            parentLayout={parentLayout}
            onLayout={
                ({nativeEvent}) => {
                    const {width, height} = nativeEvent.layout;
                    setOwnSize({width: width, height: height});
                }
            }
            ownSize={ownSize}
            isActive={isActive} 
        >
            {
                optionsArray.map((option, i) => 
                    <Button 
                        key={i}
                        onPress={optionsHandle[i] ?? (() => alert(i))}
                    >
                        <Text>
                            {option}
                        </Text>
                    </Button>
                )
            }
        </Container>
    )
}