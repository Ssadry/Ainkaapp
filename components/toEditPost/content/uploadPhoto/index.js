import React, {useState, useEffect} from 'react';
import {Container, Text, Line, Button} from './styled';
import {Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default UploadPhoto = ({width}) => {
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

    return (
        <Container
            width={width}
            source={{uri: image}}
            resizeMode={'cover'}
        >
            <Button
                onPress={pickImage}
            >
                <Text>
                    Subir foto
                </Text>
            </Button>
            <Line width={width}/>
        </Container>
    )
}