import {CommonActions} from '@react-navigation/native';
import {NavigationActions, StackActions} from 'react-navigation';

export const removeNavigationScreen = (navigation, routeName) => {
    navigation.dispatch((state) => {
        const routes = state.routes.filter(r => r.name !== routeName);
        return CommonActions.reset({
            ...state,
            routes,
            index: routes.length - 1,
          });
    });
};

export const resetNavigationScreen = (navigation, defaultRouteName) => {
    navigation.dispatch(() => {
        StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: defaultRouteName})]
        });
    });
}