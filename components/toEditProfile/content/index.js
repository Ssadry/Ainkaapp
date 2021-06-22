import React, {useState} from 'react';
import { ScrollView, Dimensions } from 'react-native';
// import {Platform} from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
import {
    Container, 
    Form, 
    Title, 
    CategoriesChecksContainer, 
    ButtonContainer, 
    ButtonProfile, 
    ProfileContainer, 
    UploadPhoto, 
    Button, 
    Text, 
    BottomLine
} from './styled';
import Input from '../../../components/form/input';
import Check from '../../../components/form/check';
import FatButton from '../../../components/form/button/fat';
import Icon from '../../../assets/icon.png';

const width = Math.round(Dimensions.get('screen').width);
const formWidth = width * 0.8;
const checksWidth = formWidth * 0.5;

export default Content = () => {
    const [name, setName] = useState('');
    const [lastNames, setLastNames] = useState('');
    const [description, setDescription] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const [image, setImage] = useState(null);

    const [allChecks, setAllChecks] = useState({
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
        setAllChecks((prevChecks) => ({
            ...prevChecks,
                [name]: value
        }));
    }

    const categories = [
        {
            name: 'art',
            value: allChecks.art,
            text: 'Arte',
        },
        {
            name: 'music',
            value: allChecks.music,
            text: 'Música',
        },
        {
            name: 'kitchen',
            value: allChecks.kitchen,
            text: 'Cocina',
        },
        {
            name: 'sport',
            value: allChecks.sport,
            text: 'Deporte',
        },
        {
            name: 'idiom',
            value: allChecks.idiom,
            text: 'Idioma',
        },
        {
            name: 'craft',
            value: allChecks.craft,
            text: 'Manualidad',
        },  
        {
            name: 'leisure',
            value: allChecks.leisure,
            text: 'Ocio',
        }, 
        {
            name: 'technology',
            value: allChecks.technology,
            text: 'Tecnología',
        },  
        {
            name: 'transport',
            value: allChecks.transport,
            text: 'Transporte',
        },           
        {
            name: 'others',
            value: allChecks.others,
            text: 'Otros',
        },
    ];

    // useEffect(() => {
    //     (async () => {
    //         if (Platform.OS !== 'web') {
    //             const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //             if (status !== 'granted') 
    //                 alert('Che, boludo, necesitamos permisos para espiarte.');
    //         }
    //     })();
    // }, []);

    // const pickImage = async() => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1,
    //     });

    //     if (!result.cancelled) setImage(result.uri);
    //     else alert('¿en serio? ¿ninguna imagen?'); 
    // }

    const pickImage = () => alert('ñe');

    return (
        <ScrollView>
            <Container>
                <UploadPhoto
                    width={width}
                    // source={{uri: image}}
                    resizeMode={'cover'}
                >
                    <Button
                        onPress={pickImage}
                    >
                        <Text>
                            Cambiar
                        </Text>
                    </Button>
                    <BottomLine width={width}/>
                </UploadPhoto>
                <ProfileContainer
                    source={Icon}
                    resizeMode='stretch'
                >
                    <ButtonProfile
                        onPress={pickImage}
                    >
                        <Text>
                            Cambiar
                        </Text>
                    </ButtonProfile>
                </ProfileContainer>
                <Form
                    width={formWidth}
                >
                    <Title>
                        Información general
                    </Title>
                    <Input 
                        width={formWidth}
                        placeHolder={'Nombre*'}
                        setValue={setName}
                        value={name}
                        canTextHide={false}
                        isCorrect={true}
                        errorText={'Título obligatorio.'}
                        maxLength={15}
                    />
                    <Input 
                        width={formWidth}
                        placeHolder={'Apellidos*'}
                        setValue={setLastNames}
                        value={lastNames}
                        canTextHide={false}
                        isCorrect={true}
                        errorText={''}
                    />
                    <Title>
                        Descripción
                    </Title>
                    <Input 
                        width={formWidth}
                        placeHolder={'Escribe aquí tu descripción...'}
                        setValue={setDescription}
                        value={description}
                        canTextHide={false}
                        isCorrect={true}
                        errorText={'Descripción obligatoria.'}
                        multiline={true}
                        maxLength={200}
                    />
                    <Title>
                        Intereses
                    </Title>
                    <CategoriesChecksContainer>
                        {
                            categories.map((category, i) =>
                                <Check 
                                    key={i}
                                    width={checksWidth}
                                    setValue={(value) => handleChangeCheckeds(category.name, value)}
                                    value={category.value}
                                    text={category.text}
                                />
                            )
                        }
                    </CategoriesChecksContainer>
                    <Title>
                        Redes
                    </Title>
                    <Input 
                        width={formWidth}
                        placeHolder={'Instagram*'}
                        setValue={setInstagram}
                        value={instagram}
                        canTextHide={false}
                        isCorrect={true}
                        errorText={''}
                        multiline={false}
                    />
                    <Input 
                        width={formWidth}
                        placeHolder={'Facebook*'}
                        setValue={setFacebook}
                        value={facebook}
                        canTextHide={false}
                        isCorrect={true}
                        errorText={''}
                        multiline={false}
                    />
                    <Input 
                        width={formWidth}
                        placeHolder={'LinkedIn*'}
                        setValue={setLinkedin}
                        value={linkedin}
                        canTextHide={false}
                        isCorrect={true}
                        errorText={''}
                        multiline={false}
                    />
                    <Title>
                        Información privada
                    </Title>
                    <Input 
                        width={formWidth}
                        placeHolder={'Cambiar correo electrónico*'}
                        setValue={setEmail}
                        value={email}
                        canTextHide={false}
                        isCorrect={true}
                        errorText={''}
                        multiline={false}
                    />
                    <Input 
                        width={formWidth}
                        placeHolder={'Cambiar contraseña*'}
                        setValue={setPassword}
                        value={password}
                        canTextHide={false}
                        isCorrect={true}
                        errorText={''}
                        multiline={false}
                    />
                    <ButtonContainer>
                        <FatButton >
                            GUARDAR
                        </FatButton>
                    </ButtonContainer>
                </Form>
            </Container>
        </ScrollView>
    )
}