import React, {useContext, useState} from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/toSaved/header';
import SliderWithTitles from '../components/slider/withTitles';
import Need from '../components/slider/item/need';
import Featured from '../components/slider/item/featured';
import Profile from '../components/slider/item/profile';
import {featured, needs, profiles} from '../components/toSaved/data';
// import {post} from '../services';
import { AppContext } from '../application/provider';

const ITEMS_DISPLAYED = 1.85;

const Saved = ({navigation}) => {
    const [routeName] = useContext(AppContext);
    const [itemsWidth, setItemsWidth] = useState(0);

    const itemFeatured = 
        featured.map((ftd, i) => 
            <Featured
                key={i} 
                width={itemsWidth} 
                title={ftd.title}
                hours={ftd.hours}
                click={() => navigation.navigate(routeName.watchMoreItems, {title: 'Servicios', itemName: Featured.name})}
            />);

    const itemsNeeds = 
        needs.map((need, i) => 
            <Need 
                key={i}     
                width={itemsWidth} 
                title={need.title} 
                hours={need.hours}
                click={() => navigation.navigate(routeName.watchMoreItems, {title: 'Necesidades', itemName: Need.name})}
            />);
    
    const itemsProfiles = 
        profiles.map((profile, i) => 
            <Profile 
                key={i} 
                width={itemsWidth} 
                title={profile.title}
                click={() => navigation.navigate(routeName.watchMoreItems, {title: 'Perfiles', itemName: Profile.name})}
            />);

    const sliders = [
        {
            items: itemFeatured,
            leftText: 'Servicios',
            itemName: Featured.name,
            rightText: 'Ver más',
        },
        {
            items: itemsNeeds,
            leftText: 'Necesidades',
            itemName: Need.name,
            rightText: 'Ver más',
        },
        {
            items: itemsProfiles,
            leftText: 'Perfiles',
            itemName: Profile.name,
            rightText: 'Ver más',
        }
    ]

    return (
        <Container>
            <Header 
                navigation={navigation}
                title={'Guardados'}
            />
            <ScrollView>
                <Content>
                    {
                        sliders.map((slider, i) => 
                            <SliderWithTitles
                                key={i}
                                numberItemsDisplayed={ITEMS_DISPLAYED}
                                items={slider.items.map(item => item)}
                                itemName={slider.itemName}
                                setItemsWidth={setItemsWidth}
                                leftText={slider.leftText}
                                rightText={slider.rightText}
                                navigation={navigation}
                            />
                        )
                    }
                </Content>
        </ScrollView>
        </Container>
    )
}

export default Saved;

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;
`;