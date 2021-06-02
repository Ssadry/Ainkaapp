import React from 'react';
import styled from 'styled-components/native';
import TopSettings from '../components/toServiceOrNeed/topSettings';
import TopPhoto from '../components/toServiceOrNeed/topPhoto';
import Content from '../components/toServiceOrNeed/content';
import {ScrollView} from 'react-native';
import Icon from '../assets/icon.png';

export default ({navigation, route}) => {
    const topPhoto = route?.params?.topPhoto ?? Icon;
    const title = route?.params?.title ?? 'Título por defecto';
    const isNeed = route?.params?.isNeed ?? true;
    const handleButton = route?.params?.button ?? (() => alert('click'));
    const textButton = route?.params?.textButton ?? 'TEXTO POR DEFECTO'
    
    return (
        <Container>
            <TopSettings/>
            <ScrollView>
                <TopPhoto
                    icon={topPhoto}
                />
                <Content
                    title={title}
                    isNeed={isNeed}
                    button={handleButton}
                    textButton={textButton}
                />
            </ScrollView>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`;