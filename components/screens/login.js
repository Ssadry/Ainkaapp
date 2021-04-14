import React from 'react';
import { View } from 'react-native';
import LogoContainer from '../../components/toLogin/containers/logo/index';
import FormContainer from '../../components/toLogin/containers/form/index';

export default ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <LogoContainer />
            <FormContainer navigation={navigation} />
        </View>
    )
}