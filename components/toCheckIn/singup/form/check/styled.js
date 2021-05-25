import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${({width}) => width + 'px'};
    flex-direction: row;
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const CheckBoxContainer = styled.View`
    width: 20px;
    height: 20px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

export const Text = styled.Text`
    flex: 1;
`;