// import React from 'react';
// import {ScrollView} from 'react-native';
// import { Container } from './styled';
// import Article from '../article';
// import facebook from '../../../../../assets/services/Aprende_a_usar_Facebook.jpg';
// import kitchen from '../../../../../assets/services/Clase_de_cocina.jpg';
// import climbing from '../../../../../assets/services/Clase_de_escalada_indoor.jpg';
// import piano from '../../../../../assets/services/Clase_de_Piano.jpg';
// import programming from '../../../../../assets/services/Clase_de_Programacion.jpg';
// import yoga from '../../../../../assets/services/Clase_de_Yoga.jpg';
// import babysitting from '../../../../../assets/services/Servicio_de_canguro.jpg';
// import searchJob from '../../../../../assets/services/Te_ayudo_a_buscar_trabajo.jpg';
// import accounting from '../../../../../assets/services/Te_ayudo_a_hacer_la_contabilidad.jpg';

// export default ({width, click}) => {
//     const articleWidth = width * 0.5;

//     const content = [
//         {
//             title : 'Clases de Facebook',
//             image : facebook
//         },
//         {
//             title : 'Clases de cocina',
//             image : kitchen
//         },
//         {
//             title : 'Escalada indoor',
//             image : climbing
//         },
//         {
//             title : 'Clases de piano',
//             image : piano
//         },
//         {
//             title : 'Clases de programación',
//             image : programming
//         },
//         {
//             title : 'Clases de yoga',
//             image : yoga
//         },
//         {
//             title : 'Canguro',
//             image : babysitting
//         },
//         {
//             title : 'Te ayudo a buscar trabajo',
//             image : searchJob
//         },
//         {
//             title : 'Te ayudo en la contabilidad',
//             image : accounting
//         }
//     ];

//     const amountArticles = content.length;
//     const articles = [amountArticles];

//     for (let i = 0; i < amountArticles; i++)
//         articles[i] = 
//                     <Article 
//                         width={articleWidth} 
//                         key={i}
//                         click={click} 
//                         img={content[i].image}
//                     >
//                         {content[i].title}
//                     </Article>

//     return (
//         <ScrollView>
//             <Container>
//                 {articles.map(article => article)}
//             </Container>
//         </ScrollView>
//     )
// }

import React from 'react';
import {Container} from './styled';
import Need from '../../../../slider/item/need';
import Featured from '../../../../slider/item/featured';
import SliderWithTitles from '../../../../slider/withTitles';

const AMOUNT_SLIDER_ITEMS = 12;
const ITEMS_DISPLAYED = 1.8;

export default ({navigation}) => {
    const [itemsWidth, setItemsWidth] = React.useState(0);

    const myNeeds = [
        {
            title: 'Título de la necesidad 1',
            hours: 3
        },
        {
            title: 'Título de la necesidad 2',
            hours: 5
        },
        {
            title: 'Título de la necesidad 3',
            hours: 8
        },
        {
            title: 'Título de la necesidad 4',
            hours: 9
        },
        {
            title: 'Título de la necesidad 5',
            hours: 2
        },
        {
            title: 'Título de la necesidad 6',
            hours: 10
        },
        {
            title: 'Título de la necesidad 7',
            hours: 30
        }
    ];

    const myFeatureds = [
        {
            title: 'Título destacado 1',
            hours: 5
        },
        {
            title: 'Título destacado 2',
            hours: 6
        },
        {
            title: 'Título destacado 3',
            hours: 7
        },
        {
            title: 'Título destacado 4',
            hours: 2
        },
        {
            title: 'Título destacado 5',
            hours: 13
        },
        {
            title: 'Título destacado 6',
            hours: 45
        },
    ];

    const mySliders = [
        {
            items: () => 
                myFeatureds.map((featured, i) => 
                    <Featured 
                        key={i}
                        width={itemsWidth}
                        title={featured.title}
                        hours={featured.hours}
                    />   
                ),
            leftText: 'Destacados',
            rightText: 'Ver más'
        },
        {
            items: () => 
                myNeeds.map((need, i) => 
                    <Need 
                        key={i}
                        width={itemsWidth}
                        title={need.title}
                        hours={need.hours}
                    />   
                ),
            leftText: 'Necesidades',
            rightText: 'Ver más'
        },
        {
            items: () => 
                myNeeds.map((need, i) => 
                    <Need 
                        key={i}
                        width={itemsWidth}
                        title={need.title}
                        hours={need.hours}
                    />   
                ),
            leftText: 'Necesidades',
            rightText: 'Ver más'
        },
    ];

    return (
        <Container>
            {
                mySliders.map((mySlider, i) => 
                    <SliderWithTitles 
                        key={i}
                        numberItemsDisplayed={ITEMS_DISPLAYED}
                        items={Object.values(mySlider.items()).map(item => item)}
                        setItemsWidth={setItemsWidth}
                        leftText={mySlider.leftText}
                        rightText={mySlider.rightText}
                        navigation={navigation}
                    />
                )
            }
        </Container>
    )
}