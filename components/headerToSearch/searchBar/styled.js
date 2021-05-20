import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
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
    width: ${({width}) => width + 'px'};
    justify-content: center;
    align-items: center;
`;

export const Profile = styled.View`
    height: ${({width}) => width + 'px'};
    width: ${({width}) => width + 'px'};
    border-radius: ${({width}) => width * 0.5 + 'px'};
    background-color: white;
    border-width: 1px;
    justify-content: center;
`;

export const Hours = styled.Text`
    text-align: center;
`;