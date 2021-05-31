import styled from 'styled-components/native';

export const CustomTabScreen = styled.View`
    height: 70px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    top: 0px;
    left: 0px;
    z-index: 10;
`;

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    margin: 4px;
    height: 60px;
    width: 60px;
    padding: 8px;
    padding-right: 16px;
    padding-left: 16px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;