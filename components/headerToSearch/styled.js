import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width + 'px'};
    margin-top: 40px;
    margin-bottom: 20px;
`;

export const SearchBarContainer = styled.View`
    margin-right: 5px;
    margin-left: 5px;
`;

export const ProfileContainer = styled.View`
    margin-left: 5px;
    margin-right: 5px;
`;

export const Profile = styled.View`
    height: 40px;
    width: 40px;
    border-radius: 100px;
    background-color: white;
    justify-content: center;
    border: 1px solid black;
`;

export const Hours = styled.Text`
    text-align: center;
    font-size: 16px;
`;