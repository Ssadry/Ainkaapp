import React from 'react';
import {Container} from './styled';
import Button from './button/index';

export default ({width, setCurrentState, names, currentState}) => {

    const handlerButton = (name) => {
        switch (name) {
            case names.categories:
                if (currentState !== names.categories) setCurrentState(names.categories);
                break;
            case names.profiles:
                if (currentState !== names.profiles) setCurrentState(names.profiles);    
                break;
        }
    }

    return (
        <Container width={width}>
            <Button width={width * 0.5} currentState={currentState} click={handlerButton}>
                {names.categories}
            </Button>
            <Button width={width * 0.5} currentState={currentState} click={handlerButton}>
                {names.profiles}
            </Button>
        </Container>
    )
}