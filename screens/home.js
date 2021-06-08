import React from 'react';
import HeaderToSearch from '../components/headerToSearch';
import styled from 'styled-components/native';
import Default from '../components/toHome/containers/default';
import Searching from '../components/toHome/containers/searching';
import {Dimensions, BackHandler} from 'react-native';

const Home = ({navigation}) => {
    const [searchText, setSearchText] = React.useState('');
    const [textInputIsOnFocus, setTextInputIsOnFocus] = React.useState(false);

    // React.useEffect(() => {
    //     BackHandler.addEventListener('hardwareBackPress', () => {
    //         console.log('xd');
    //     });
    //     return BackHandler.removeEventListener('hardwareBackPress', () => true);
    // }, [])

    return (
        <Container>
            <HeaderToSearch 
                setSearchText={setSearchText} 
                textInputIsOnFocus={textInputIsOnFocus}
                setTextInputIsOnFocus={setTextInputIsOnFocus}
                click={_ => navigation.navigate('Profile')}
                width={Math.round(Dimensions.get('screen').width)}
            />
            <Default 
                textInputIsOnFocus={textInputIsOnFocus}
                navigation={navigation}
            />
            {/* El componente 'Searching' solo se visualiza cuando se escribe algo en el buscador. */}
            <Searching 
                textInputIsOnFocus={textInputIsOnFocus} 
                click={_ => navigation.navigate('WatchProfile')}
            />
        </Container>
    )
};

export default Home;

const Container = styled.View`
    flex: 1;
`;
