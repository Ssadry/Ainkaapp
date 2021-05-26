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

const ITEMS_DISPLAYED = 1.8;

export default ({navigation}) => {
    const [itemsWidth, setItemsWidth] = React.useState(0);

    const myNeeds = [
        {
            title: 'Necesidad',
            hours: 3
        },
        {
            title: 'Necesidad',
            hours: 5
        },
        {
            title: 'Necesidad',
            hours: 8
        },
        {
            title: 'Necesidad',
            hours: 9
        },
        {
            title: 'Necesidad',
            hours: 2
        },
        {
            title: 'Necesidad',
            hours: 10
        },
        {
            title: 'Necesidad',
            hours: 30
        }
    ];

    const myFeatureds = [
        {
            title: 'Destacado',
            hours: 5
        },
        {
            title: 'Destacado',
            hours: 6
        },
        {
            title: 'Destacado',
            hours: 7
        },
        {
            title: 'Destacado',
            hours: 2
        },
        {
            title: 'Destacado',
            hours: 13
        },
        {
            title: 'Destacado',
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
                        title={featured.title + ' - ' + i}
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
                        title={need.title + ' - ' + i}
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
                        title={need.title + ' - ' + i}
                        hours={need.hours}
                    />   
                ),
            leftText: 'Prueba',
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