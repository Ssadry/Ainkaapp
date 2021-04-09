import styled from 'styled-components/native';

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${({screenSize}) => screenSize.width};
    margin-top: 40px;
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
`;