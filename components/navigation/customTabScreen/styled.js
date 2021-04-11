import styled from 'styled-components/native';

export const CustomTabScreen = styled.View`
    height: 70px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${({backgroundColor}) => backgroundColor};
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
    border: 1px solid black;
`;

export const Text = styled.Text`
    color: ${({tintColor}) => tintColor};
    text-align: center;
`;