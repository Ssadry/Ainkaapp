import styled from 'styled-components/native';

export const Header = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${({width}) => width};
    background-color: cyan;
    position: absolute;
    top: 0px;
`;

export const Profile = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: white;
    margin: 50px 5px 5px 5px;
    display: flex;
    text-align: center;
    justify-content: center;
    border: 1px solid black;
`;

export const Hours = styled.Text`
    text-align: center;
`;