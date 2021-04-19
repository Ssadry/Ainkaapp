import React, {useState} from 'react';
import { Dimensions, View } from 'react-native';
import Header from '../headerToSearch/index';
import Switch from '../toServicesAndProfiles/switch/index';
import Content from '../toServicesAndProfiles/content/index';

const names = {
    categories : 'CATEGORIES',
    profiles : 'PROFILES'
}

export default () => {
    const {width} = Dimensions.get('window');
    const [currentState, setCurrentState] = useState(names.categories);

    return (
        <View style={{ flex: 1 }}>
            <Header width={width}/>
            <Switch width={width} 
                    setCurrentState={setCurrentState} 
                    currentState={currentState} 
                    names={names}/>
            <Content width={width} 
                    currentState={currentState} 
                    states={names}/>
        </View>
    );
}