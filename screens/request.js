import React from 'react';
import styled from 'styled-components/native';
import Content from '../components/toRequest/content';
import {ScrollView} from 'react-native';
import Icon from '../assets/icon.png';

export default ({navigation, route}) => {
    const topPhoto = route?.params?.topPhoto ?? Icon;
    const title = route?.params?.title ?? 'Título por defecto';
    const isNeed = route?.params?.isNeed ?? true;
    const handleButton = route?.params?.button ?? (() => alert('click'));
    const textButton = route?.params?.textButton ?? 'TEXTO POR DEFECTO'
    
    return (
        <ScrollView>
            <Container>
                <Content
                    title={title}
                    isNeed={isNeed}
                    button={handleButton}
                    textButton={textButton}
                />
            </Container>
        </ScrollView>
    )
}

const Container = styled.View`
    flex: 1;
`;