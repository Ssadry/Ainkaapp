import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
`;

export const Profile = styled.View`
    height: 40px;
    width: 40px;
    border-radius: 20px;
    background-color: rgb(180, 180, 180);
    justify-content: center;
`;

export const Hours = styled.Text`
    text-align: center;
`;

export const NotificationPoint = styled.View`
    position: absolute;
    left: ${({width}) => width * -0.4 + 'px'};
    bottom: ${({width}) => width * -0.3 + 'px'};
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
    border-radius: ${({width}) => width * 0.5 + 'px'};
    background-color: rgb(120, 120, 120);
`;