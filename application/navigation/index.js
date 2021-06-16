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
        console.log('Pre:')
        console.log(history);
        const length = history.length;
        const routes = history[length - 1];
        console.log('Pos:');
        console.log(routes);
        return CommonActions.reset({
            ...state,
            history: []
        });
    });
};