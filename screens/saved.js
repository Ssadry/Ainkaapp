import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/toSaved/header';
import SliderWithTitles from '../components/slider/withTitles';
import Need from '../components/slider/item/need';
import Featured from '../components/slider/item/featured';
import Profile from '../components/slider/item/profile';
import {featured, needs, profiles} from '../components/toSaved/data';
import {post} from '../services';

const ITEMS_DISPLAYED = 1.85;
console.log(Featured.name);

const Saved = ({navigation}) => {
    const [itemsWidth, setItemsWidth] = React.useState(0);

    const params = new URLSearchParams();
    params.append('UserID', 1);
    params.append('UserFav', 2);

    post('https://pablomonteserin.com/sites/ainkaa/index.php/users/addfavoriteuser', params);

    const itemFeatured = 
        featured.map((ftd, i) => 
            <Featured
                key={i} 
                width={itemsWidth} 
                title={ftd.title + ' - ' + i}
                hours={ftd.hours}
            />);

    const itemsNeeds = 
        needs.map((need, i) => 
            <Need 
                key={i}     
                width={itemsWidth} 
                title={need.title + ' - ' + i} 
                hours={need.hours}
            />);
    
    const itemsProfiles = 
        profiles.map((profile, i) => 
            <Profile 
                key={i} 
                width={itemsWidth} 
                title={profile.title + ' - ' + i}
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
            leftText: 'Necesidad',
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
    padding-left: 20px;
    padding-right: 20px;
`;