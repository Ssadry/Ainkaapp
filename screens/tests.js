import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') 
                    alert('Che, boludo, necesitamos permisos para espiarte.');
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const {status} = await ImagePicker.requestCameraPermissionsAsync();
                if (status !== 'granted') 
                    alert('Che, boludo, necesitamos permisos para la cámara.');
            }
        })();
    }, []);

    const pickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) setImage(result.uri);
        else alert('¿en serio? ¿ninguna imagen?'); 
    }

    const takePhoto = async() => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) setImage(result.uri);
        else alert('Ya wey, yo quería hacerte una fotito.');   
    }

    return (
        <Container>
            <Button onPress={takePhoto}>
                <Text>
                    Cámara
                </Text>
            </Button>
            <Button onPress={pickImage}>
                <Text>
                    Buscar imagen
                </Text>
            </Button>
            <Image source={{uri: image}} selectedImage={image}/>
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    width: 200px;
    border: 5px solid black;
    margin: 10px;
    border-radius: 10px;
    background-color: cyan;
`;

export const Text = styled.Text`
    margin: 20px;
    text-align: center;
    font-size: 20px;
`;

export const Image = styled.Image`
    background-color: red;
    width: 300px;
    height: 300px;
    display: ${({selectedImage}) => selectedImage === null ? 'none' : 'flex'};
`;