import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: ${({width}) => width + 'px'};
    overflow: hidden;
`;

export const Element = styled.View`
    width: ${({width}) => width + 'px'};
    justify-content: center;
    align-items: center;
    border-width: 1px;
    overflow: hidden;
    margin-top: 10px;
`;

export const Image = styled.Image`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
`;

export const Text = styled.View`
    justify-content: flex-end;
`;

export const Description = styled.Text`

`;

export const Hours = styled.Text`
    text-align: right;
`;

