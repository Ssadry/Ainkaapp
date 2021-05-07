import React, {useState} from 'react';
import {Container, Content} from './styled';
import Category from './elements/category';
import Profile from './elements/profile';
import SwitchButtons from '../../../switchView/buttons';
import {ScrollView, Dimensions} from 'react-native';

const types = {
    CATEGORY : 'category',
    PROFILE : 'profile'
}

export default ({searchText, click}) => {
    const {width} = Dimensions.get('window');
    const elementWidth = width * 0.5;

    const createArray = (type, amount) => {
        const arr = [amount];
        switch(type) {
            case types.CATEGORY:
                for (let i = 0; i < amount; i++) arr[i] = <Category width={elementWidth} key={i}/>
                break;
            case types.PROFILE:
                for (let i = 0; i < amount; i++) arr[i] = <Profile width={elementWidth} key={i} click={click}/>
                break;
        }
        return arr;
    }
    
    const [currentState, setCurrentState] = useState(0);

    const categories = createArray(types.CATEGORY, 13);
    const profiles = createArray(types.PROFILE, 7);

    return (
        <Container searchText={searchText}>
            <SwitchButtons 
                currentState={currentState}
                setCurrentState={setCurrentState}
                leftText={'Categorías'}
                rightText={'Perfiles'}
            />
            <ScrollView>
                <Content 
                    currentState={currentState}
                    pos={0}
                >
                    {
                        categories.map(category => category)
                    }
                </Content>
                <Content 
                    currentState={currentState}
                    pos={1}
                >
                    {
                        profiles.map(profile => profile)
                    }
                </Content>
            </ScrollView>
        </Container>
    )
}
