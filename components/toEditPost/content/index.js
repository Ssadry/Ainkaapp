import React, {useState} from 'react';
import { ScrollView, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import {Container, Form, Title, CategoriesChecksContainer, NeedContainer, Description, Category, SliderContainer, SubTitle, Hours, MySlider, ModalitiesChecksContainer, ButtonContainer} from './styled';
import Input from '../../../components/form/input';
import Check from '../../../components/form/check';
import FatButton from '../../../components/form/button/fat';
import UploadPhoto from './uploadPhoto';
import defaultColors from '../../../assets/colors/defaultColors.json';

const width = Math.round(Dimensions.get('screen').width);
const formWidth = width * 0.8;
const checksWidth = formWidth * 0.5;

export default Content = ({textbutton, isNeed}) => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const [allChecks, setAllChecks] = useState({
       categories: {
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
       },
       modalities: {
            faceToFace: false, 
            online: false,
            freeNegociation: false
       }
    });

    const [value, setValue] = useState(0);
    const [sliderContainerWidth, setSliderContainerWidth] = useState(100);

    const handleChangeCheckeds = (type, name, value) => {
        setAllChecks((prevChecks) => ({
            ...prevChecks,
            [type]: {
                [name]: value
            }
        }));
    }

    const categories = [
        {
            name: 'art',
            value: allChecks.categories.art,
            text: 'Arte',
        },
        {
            name: 'music',
            value: allChecks.categories.music,
            text: 'Música',
        },
        {
            name: 'kitchen',
            value: allChecks.categories.kitchen,
            text: 'Cocina',
        },
        {
            name: 'sport',
            value: allChecks.categories.sport,
            text: 'Deporte',
        },
        {
            name: 'idiom',
            value: allChecks.categories.idiom,
            text: 'Idioma',
        },
        {
            name: 'craft',
            value: allChecks.categories.craft,
            text: 'Manualidad',
        },  
        {
            name: 'leisure',
            value: allChecks.categories.leisure,
            text: 'Ocio',
        }, 
        {
            name: 'technology',
            value: allChecks.categories.technology,
            text: 'Tecnología',
        },  
        {
            name: 'transport',
            value: allChecks.categories.transport,
            text: 'Transporte',
        },           
        {
            name: 'others',
            value: allChecks.categories.others,
            text: 'Otros',
        },
    ];

    const modatilies = [
        {
            name: 'faceToFace',
            value: allChecks.modalities.faceToFace,
            text: 'Presencial'
        },
        {
            name: 'online',
            value: allChecks.modalities.online,
            text: 'Online'
        },
        {
            name: 'freeNegociation',
            value: allChecks.modalities.freeNegociation,
            text: 'Negociación libre'
        }
    ];

    return (
        <ScrollView>
            <Container>
                <UploadPhoto
                    width={width}
                />
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
                    <Description>
                        Descripción
                    </Description>
                    <Input 
                        width={formWidth}
                        placeHolder={'Escribe aquí tu descripción...'}
                        setValue={setDescription}
                        value={description}
                        canTextHide={false}
                        isCorrect={description.length > 0}
                        errorText={'Descripción obligatoria.'}
                        multiline={true}
                        maxLength={300}
                    />
                    <NeedContainer
                        isNeed={isNeed}
                    >
                        <Category>
                            Categoría
                        </Category>
                        <SubTitle
                            color={defaultColors.GrisOscuro}
                        >
                            Selecciona una categoría para el anuncio
                        </SubTitle>
                        <CategoriesChecksContainer>
                            {
                                categories.map((category, i) =>
                                    <Check 
                                        key={i}
                                        width={checksWidth}
                                        setValue={(value) => handleChangeCheckeds('categories', category.name, value)}
                                        value={category.value}
                                        text={category.text}
                                    />
                                )
                            }
                        </CategoriesChecksContainer>
                    </NeedContainer>  
                    <Title>
                        Tiempo de duración del servicio*
                    </Title>
                    <SliderContainer
                        onLayout={
                            ({nativeEvent}) => {
                                const {width} = nativeEvent.layout;
                                setSliderContainerWidth(width);
                            }
                        }
                    >
                        <MySlider
                            width={sliderContainerWidth * 0.9}
                        >
                            <Slider
                                style={{width: sliderContainerWidth * 0.9, height: 70}}
                                minimumValue={0}
                                maximumValue={3}
                                step={1}
                                onValueChange={(value) => setValue(value)}
                                minimumTrackTintColor="green"
                                maximumTrackTintColor="#000000"
                            />
                        </MySlider>
                        <Hours
                            width={sliderContainerWidth * 0.1}
                        >
                            {value} h
                        </Hours>
                    </SliderContainer>
                    <Title>
                        Modalidad
                    </Title>
                    <SubTitle
                        color={defaultColors.GrisOscuro}
                    >
                        Selecciona la modalidad del anuncio
                    </SubTitle>
                    <ModalitiesChecksContainer>
                        {
                            modatilies.map((modality, i) =>
                                <Check 
                                    key={i}
                                    width={checksWidth}
                                    setValue={(value) => handleChangeCheckeds('modalities', modality.name, value)}
                                    value={modality.value}
                                    text={modality.text}
                                />
                            )
                        }
                    </ModalitiesChecksContainer>
                    <ButtonContainer>
                        <FatButton >
                            {textbutton}
                        </FatButton>
                    </ButtonContainer>
                </Form>
            </Container>
        </ScrollView>
    )
}