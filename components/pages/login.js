import React from 'react';
import { View } from 'react-native';
import LogoContainer from '../../components/toLogin/containers/logo/index';
import FormContainer from '../../components/toLogin/containers/form/index';

export default () => {
    return (
        <View style={{ backgroundColor: 'cyan', flex: 1 }}>
            <LogoContainer />
            <FormContainer />
        </View>
    )
}