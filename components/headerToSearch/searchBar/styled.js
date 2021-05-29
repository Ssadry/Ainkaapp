import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 15px;
`;

export const SearchBar = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: white;
    border-radius: ${({width}) => width * 0.1 + 'px'};
    border-width: 1px;
    width: ${({width}) => width + 'px'};
    height: 40px;
    overflow: hidden;
`;

export const TextInput = styled.TextInput`
    width: ${({width}) => width + 'px'};
    padding-left: 20px;
    height: 40px;
`;

export const Icon = styled.View`
    width: ${({width}) => width + 'px'};
    justify-content: center;
    align-items: center;
`;

export const ProfileContainer = styled.TouchableOpacity`
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