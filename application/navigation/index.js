import {CommonActions} from '@react-navigation/native';

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

export const resetNavigationHistory = (navigation) => {
    navigation.dispatch((state) => {
        const {history} = state.routes[0].state;
        const length = history.length;

        return CommonActions.reset({
            ...state,
            ...routes,
            ...state,
            history: new Array()
        });
    });
};