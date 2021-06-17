import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
`;

export const Profile = styled.View`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
    border-radius: ${({width}) => width * 0.5 + 'px'};;
    justify-content: center;
    border: 2px solid white;
`;

export const Text = styled.Text`
    text-align: center;
    color: white;
`;

export const NotificationPoint = styled.View`
    position: absolute;
    right: ${({width}) => width * -0.4 + 'px'};
    bottom: ${({width}) => width * -0.4 + 'px'};
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
    border-radius: ${({width}) => width * 0.5 + 'px'};
    background-color: rgb(120, 120, 120);
    opacity: 0;
`;