import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './components/navigation/index';
import Provider from './application/provider';
import PostAdPopUp from './screens/postAd';

export default () => {

    return (
        <Provider>
            <Navigation/>
            <PostAdPopUp/>
        </Provider>
    );
}