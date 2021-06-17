import styled from 'styled-components/native';

export const CustomTabScreen = styled.View`
    height: 60px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    top: 0px;
    left: 0px;
    z-index: 10;
    background-color: ${({backgroundColor}) => backgroundColor};
`;

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    margin: 4px;
    height: 50px;
    width: 50px;
    padding: 8px;
    padding-right: 16px;
    padding-left: 16px;
    justify-content: center;
    align-items: center;
`;

export const Notification = styled.View`
    opacity: ${({hasNotifications}) => hasNotifications > 0 ? 1 : 0};
    width: 18px;
    height: 18px;
    border-radius: 9px;
    background-color: ${({backgroundColor}) => backgroundColor};
    position: absolute;
    top: 0px;
    right: 0px;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export const NotificationText = styled.Text`
    color: white;
    text-align: center;
    font-size: 10px;
`;