import React, { useContext } from 'react';
import styled from 'styled-components/native';
import TopSettings from '../components/toServiceOrNeed/topSettings';
import TopPhoto from '../components/toServiceOrNeed/topPhoto';
import Content from '../components/toServiceOrNeed/content';
import {ScrollView} from 'react-native';
import { AppContext } from '../application/provider';

const ServiceOrNeed = ({navigation, route}) => {
    const title = route?.params?.title ?? 'Título por defecto';
    const isNeed = route?.params?.isNeed ?? true;
    const handleButton = route?.params?.button ?? (() => alert('click'));
    const textButton = route?.params?.textButton ?? 'TEXTO POR DEFECTO';

    const [routeName] = useContext(AppContext);
    
    return (
        <Container>
            <TopSettings
                navigation={navigation}
            />
                <ScrollView
                    style={{flex: 1}}
                >
                    <TopPhoto/>
                    <Content
                        navigation={navigation}
                        title={title}
                        isNeed={isNeed}
                        button={handleButton}
                        textButton={textButton}
                        handleButton={() => navigation.navigate(routeName.request)}
                    />
                </ScrollView>
        </Container>
    );
};

export default ServiceOrNeed;

const Container = styled.View`
    flex: 1;
`;