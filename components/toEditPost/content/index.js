import React from 'react';
import { ScrollView, Dimensions } from 'react-native';
import {Container, UploadPhoto, UplodadPhotoText, Form, Line, Category} from './styled';
import Input from '../../../components/form/input';

const {width} = Dimensions.get('screen');
const formWidth = width * 0.8;

export default Content = ({route: {category}}) => {
    // const {category} = route.params ?? {category: 'Category'};
    const c = category ?? 'Category';

    const [title, setTitle] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [description, setDescription] = React.useState('');

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
                        isCorrect={title.trim().length > 0}
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
                        isCorrect={description.trim().length > 0}
                        errorText={'Descripción obligatoria.'}
                        multiline={true}
                    />
                    <Category>
                        Category: {c}
                    </Category>
                </Form>
            </Container>
        </ScrollView>
    )
}