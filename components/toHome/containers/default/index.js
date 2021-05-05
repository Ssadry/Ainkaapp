import React from 'react';
import {Container} from './styled';
import Banner from './banner';
import Slider from './slider';
import Article from './article';
import ScrollToElements from '../../../scrollToElements';
import {Dimensions} from 'react-native';
import facebook from '../../../../assets/services/Aprende_a_usar_Facebook.jpg';
import kitchen from '../../../../assets/services/Clase_de_cocina.jpg';
import climbing from '../../../../assets/services/Clase_de_escalada_indoor.jpg';
import piano from '../../../../assets/services/Clase_de_Piano.jpg';
import programming from '../../../../assets/services/Clase_de_Programacion.jpg';
import yoga from '../../../../assets/services/Clase_de_Yoga.jpg';
import babysitting from '../../../../assets/services/Servicio_de_canguro.jpg';
import searchJob from '../../../../assets/services/Te_ayudo_a_buscar_trabajo.jpg';
import accounting from '../../../../assets/services/Te_ayudo_a_hacer_la_contabilidad.jpg';

const WINDOW = 'window';

export default ({searchText, navigation}) => {
    const screenSize = {
        width : Dimensions.get(WINDOW).width,
        height : Dimensions.get(WINDOW).height
    }

    const articleWidth = screenSize.width * 0.5 * 0.9;

    const goToSeeServices = () => {
        navigation.navigate('Services');
    }
    
    const articles = [
        <Article width={articleWidth} key={0} click={goToSeeServices} img={facebook}>Clases de Facebook</Article>,
        <Article width={articleWidth} key={1} click={goToSeeServices} img={kitchen}>Clases de cocina</Article>,
        <Article width={articleWidth} key={2} click={goToSeeServices} img={climbing}>Escalada indoor</Article>,
        <Article width={articleWidth} key={3} click={goToSeeServices} img={piano}>Clases de piano</Article>,
        <Article width={articleWidth} key={4} click={goToSeeServices} img={programming}>Clases de programación</Article>,
        <Article width={articleWidth} key={5} click={goToSeeServices} img={yoga}>Clases de yoga</Article>,
        <Article width={articleWidth} key={6} click={goToSeeServices} img={babysitting}>Canguro</Article>,
        <Article width={articleWidth} key={7} click={goToSeeServices} img={searchJob}>Te ayudo a buscar trabajo</Article>,
        <Article width={articleWidth} key={8} click={goToSeeServices} img={accounting}>Te ayudo en la contabilidad</Article>
    ];

    return (
        <Container searchText={searchText}>
            <Banner screenSize={screenSize}/>
            <Slider/>
            <ScrollToElements 
                width={screenSize.width} 
                elements={articles} 
                display={'flex'}
            />
        </Container>   
    )
}