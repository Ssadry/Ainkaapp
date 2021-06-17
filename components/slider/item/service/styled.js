import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${({width}) => width + 'px'};
    justify-content: center;
    align-items: center;
    /* border: 1px solid transparent; */
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const Content = styled.TouchableOpacity`
    width: ${({width}) => width + 'px'};
    justify-content: center;
    align-items: center;
    border-radius: ${({borderRadius}) => borderRadius + 'px'};
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: ${({backgroundColor}) => backgroundColor};
`;

export const IconContainer = styled.View`
    margin-top: 5px;
`;

export const Title = styled.Text`
    margin-top: 10px;
`;