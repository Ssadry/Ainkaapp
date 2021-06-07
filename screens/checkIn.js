import React from 'react';
import styled from 'styled-components/native';
import Carousel from '../components/toCheckIn/myCarousel/card';
import Pagination from '../components/toCheckIn/myCarousel/pagination';
import Choose from '../components/toCheckIn/choose';
import Signup from '../components/toCheckIn/singup';
import Welcome from '../components/toCheckIn/welcome';
import Community from '../components/toCheckIn/community';
import {Dimensions} from 'react-native';
import axios from 'axios';

const {width, height} = Dimensions.get('screen');

const carouselHeight = height * 0.8;

export default ({navigation}) => {

    const createAccount = () => {
        axios({
            method: 'post',
            // url: 'https://digiapp.es/apptemps/index.php/register',
            url: 'https://pablomonteserin.com/sites/ainkaa/',
            data: {EmailUser: 'EmailUser', PassUser: 'PassUser', NameUser: 'NameUser', LastNameUser: 'LastNameUser'},
            config: { headers: { "Content-Type": "multipart/form-data" } }
        })
        .then(res => {
            console.log(res.data);
        })
        .catch((e) => {
            console.log('Error en el catch de axios.', e);
        }, []);
    };

    // const createAccount = () => {
    //     // React.useEffect(
    //     axios
    //         .post(
    //             'https://digiapp.es/apptemps/index.php/register', 
    //             {
    //                 EmailUser: 'EmailUser',
    //                 PassUser : 'PassUser',
    //                 NameUser : 'NameUser',
    //                 LastNameUser : 'LastNameUser',
    //             }, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //             }
    //         }).then(response => {
    //             console.log(response.data);
    //         }).catch(err => console.log("api Erorr: ", err)
    //     )
    //     // )
    // };

    const getAccount = async() => {
        try {
            await axios
                .get("https://digiapp.es/apptemps/index.php/services/showservices/1")
                .then(res => {
                    const posts = res.data;
                    console.log(posts);
                })
                // .catch(function(error) {
                //     console.log(error);
                // }, []);
        } catch (error) {
            console.log(error.message);
        }
    };
    
    // createAccount()
    getAccount();
    
    const [currentPos, setCurrentPos] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(0);

    const changePage = (index) => {
        setCurrentPos(width * -(currentPos + index));
        setCurrentPage(currentPage + index);
    }

    const nextScreen = () => {
        navigation.navigate('MyRouter');
    }

    const data = [
        {
            screen: 
                <Signup 
                    changePage={changePage}
                />
        },
        {
            screen: 
                <Welcome 
                    changePage={changePage}
                />
        },
        {
            screen: 
                <Community 
                    changePage={nextScreen}
                />
        },
    ];

    return (
        <Container>
            <Carousel
                items={data}
                itemWidth={width}
                height={carouselHeight}
                currentPage={currentPage}
            />
            <Pagination
                width={width}
                amountItems={data.length}
                currentPage={currentPage}
            />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`;