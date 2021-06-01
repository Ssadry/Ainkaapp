import React, {useState} from 'react';
import { ScrollView, Dimensions } from 'react-native';
import {Container, UploadPhoto, UplodadPhotoText, Form, Line, Title, CategoriesChecksContainer} from './styled';
import Input from '../../../components/form/input';
import Check from '../../../components/form/check';

const width = Math.round(Dimensions.get('screen').width);
const formWidth = width * 0.8;
const checksWidth = formWidth * 0.5;

export default Content = ({category}) => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const [categoriesCheckeds, setCategoriesCheckeds] = useState({
        art: false,
        music: false,
        kitchen: false,
        sport: false,
        idiom: false,
        craft: false,
        leisure: false,
        technology: false,
        transport: false,
        others: false
    });

    const handleChangeCheckeds = (name, value) => {
        setCategoriesCheckeds((prevCategoriesCheckeds) => ({
            ...prevCategoriesCheckeds,
            [name]: value
        }));
    };

    const checks = [
        {
            name: 'art',
            value: categoriesCheckeds.art,
            text: 'Arte',
        },
        {
            name: 'music',
            value: categoriesCheckeds.music,
            text: 'Música',
        },
        {
            name: 'kitchen',
            value: categoriesCheckeds.kitchen,
            text: 'Cocina',
        },
        {
            name: 'sport',
            value: categoriesCheckeds.sport,
            text: 'Deporte',
        },
        {
            name: 'idiom',
            value: categoriesCheckeds.idiom,
            text: 'Idioma',
        },
        {
            name: 'craft',
            value: categoriesCheckeds.craft,
            text: 'Manualidad',
        },  
        {
            name: 'leisure',
            value: categoriesCheckeds.leisure,
            text: 'Ocio',
        }, 
        {
            name: 'technology',
            value: categoriesCheckeds.technology,
            text: 'Tecnología',
        },  
        {
            name: 'transport',
            value: categoriesCheckeds.transport,
            text: 'Transporte',
        },           
        {
            name: 'others',
            value: categoriesCheckeds.others,
            text: 'Otros',
        },
    ];

    return (
        <ScrollView>
            <Container>
                <UploadPhoto
                    width={width}
                >
                    <UplodadPhotoText>
                        Subir foto
                    </UplodadPhotoText>
                    <Line
                        width={width}
                    />
                </UploadPhoto>
                <Form
                    width={formWidth}
                >
                    <Input 
                        width={formWidth}
                        placeHolder={'Título*'}
                        setValue={setTitle}
                        value={title}
                        canTextHide={false}
                        isCorrect={title.length > 0}
                        errorText={'Título obligatorio.'}
                        maxLength={15}
                    />
                    <Input 
                        width={formWidth}
                        placeHolder={'Ubicación (Donde se da el servicio)'}
                        setValue={setLocation}
                        value={location}
                        canTextHide={false}
                        isCorrect={true}
                        errorText={''}
                    />

                    <Input 
                        width={formWidth}
                        placeHolder={'Descripción*'}
                        setValue={setDescription}
                        value={description}
                        canTextHide={false}
                        isCorrect={description.length > 0}
                        errorText={'Descripción obligatoria.'}
                        multiline={true}
                        maxLength={200}
                    />
                    <Title>
                        Categoría: {category}
                    </Title>
                    <Line 
                        width={formWidth}
                    />
                    <CategoriesChecksContainer
                        width={formWidth}
                    >
                        {
                            checks.map((check, i) =>
                                <Check 
                                    key={i}
                                    width={checksWidth}
                                    setValue={(value) => handleChangeCheckeds(check.name, value)}
                                    value={check.value}
                                    text={check.text}
                                />
                            )
                        }
                    </CategoriesChecksContainer>
                    <Title>
                        Tiempo de duración del servicio*
                    </Title>
                    <Line 
                        width={formWidth}
                    />
                </Form>
            </Container>
        </ScrollView>
    )
}