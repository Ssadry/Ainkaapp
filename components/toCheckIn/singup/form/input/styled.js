import styled from 'styled-components/native';

export const Container = styled.View`
    border-bottom-width: 1px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: ${({width}) => width + 'px'};
    flex-direction: row;
    justify-content: space-between;
`;

export const TextInput = styled.TextInput`
    font-size: 15px;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0px;
`;

export const IconButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    display: ${({isVisible}) => isVisible ? 'flex' : 'none'};
`;