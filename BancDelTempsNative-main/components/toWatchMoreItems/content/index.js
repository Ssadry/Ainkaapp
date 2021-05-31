import React from 'react';
import {Container, Content} from './styled';
import Featured from '../../slider/item/featured';
import Need from '../../slider/item/need';
import Profile from '../../slider/item/profile';
import {Dimensions, ScrollView} from 'react-native';

const {width} = Dimensions.get('screen');
const containerWidth = width * 0.9;
const itemsWidth = containerWidth * 0.5;

const AMOUNT_ITEMS = 9;

export default ({itemName}) => {
    const items = [];

    switch (itemName) {
        case Featured.name:
            for (let i = 0; i < AMOUNT_ITEMS; i++)
                items[i] = 
                    <Featured
                        key={i}
                        width={itemsWidth}
                        title='Destacado'
                        hours={9}
                    />
            break;
        case Need.name:
            for (let i = 0; i < AMOUNT_ITEMS; i++)
                items[i] = 
                    <Need
                        key={i}
                        width={itemsWidth}
                        title='Necesidad'
                        hours={4}
                    />
            break;
        case Profile.name:
            for (let i = 0; i < AMOUNT_ITEMS; i++)
                items[i] = 
                    <Profile
                        key={i}
                        width={itemsWidth}
                        title='Perfil'
                        click={() => alert('No recuerdo qué hace el botón :D')}
                    />
            break;
    }

    return (
        <ScrollView>
            <Container>
                <Content
                    width={containerWidth}
                >
                    {
                        items.map(item => item)
                    }
                </Content>
            </Container>
        </ScrollView>
    )
}