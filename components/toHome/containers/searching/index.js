import React, {useState} from 'react';
import {Container, Categories, Profiles, Content} from './styled';
import Category from './elements/category';
import Profile from './elements/profile';
import SwitchButtons from '../../../switchView/buttons';
import {ScrollView, Dimensions} from 'react-native';

export default ({searchText, click}) => {
    const {width} = Dimensions.get('window');
    const elementWidth = width * 0.5;
    const [currentState, setCurrentState] = useState(0);

    const categories = [
        <Category width={elementWidth} key={0}/>,
        <Category width={elementWidth} key={1}/>,
        <Category width={elementWidth} key={2}/>,
        <Category width={elementWidth} key={3}/>,
        <Category width={elementWidth} key={5}/>,
        <Category width={elementWidth} key={6}/>,
        <Category width={elementWidth} key={7}/>,
        <Category width={elementWidth} key={8}/>,
        <Category width={elementWidth} key={9}/>,
        <Category width={elementWidth} key={10}/>,
        <Category width={elementWidth} key={11}/>
    ];

    const profiles = [
        <Profile width={elementWidth} key={0} click={click}/>,
        <Profile width={elementWidth} key={1} click={click}/>,
        <Profile width={elementWidth} key={2} click={click}/>,
        <Profile width={elementWidth} key={3} click={click}/>,
        <Profile width={elementWidth} key={4} click={click}/>,
        <Profile width={elementWidth} key={5} click={click}/>,
        <Profile width={elementWidth} key={6} click={click}/>,
        <Profile width={elementWidth} key={7} click={click}/>
    ];

    return (
        <Container searchText={searchText}>
            <SwitchButtons 
                currentState={currentState}
                setCurrentState={setCurrentState}
                leftText={'Categorías'}
                rightText={'Perfiles'}
            />
            <ScrollView>
                <Content>
                    <Categories 
                        currentState={currentState}
                        pos={0}
                    >
                        {
                            categories.map(category => category)
                        }
                    </Categories>
                    <Profiles 
                        currentState={currentState}
                        pos={1}
                    >
                        {
                            profiles.map(profile => profile)
                        }
                    </Profiles>
                </Content>
            </ScrollView>
        </Container>
    )
}
