import styled from 'styled-components/native';

export const Send = styled.View`
    flex: 0.1;
    border: 1px solid black;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
`;

export const Left = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Right = styled.View`
    justify-content: center;
`;

export const InputContainer = styled.View`
    border: 1px solid black;
    background-color: white;
    border-radius: 10px;
`;

export const ButtonContainer = styled.View`
    width: 40px;
    height: 40px;
    margin-left: 10px;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    border: 1px solid black;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

export const TextInput = styled.TextInput`
    justify-content: center;
    align-items: center;
    height: 20px;
    margin: 10px;
`;