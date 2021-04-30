import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${({width}) => width + 'px'};
    padding: 10px;
    align-items: center;
    justify-content: center;
`;

export const Element = styled.TouchableOpacity`
    width: ${({width}) => width + 'px'};
    align-items: center;
    justify-content: center;
    border: 1px solid black;
`;

export const ImageContainer = styled.View`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
    border: 1px solid black;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const Image = styled.Image`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
`;

export const Name = styled.Text`

`;

export const StarsContainer = styled.View`
    margin-bottom: 10px;
    margin-top: 10px;
    flex-direction: row;
`;

export const Description = styled.Text`

`;

export const InterestsContainer = styled.View`
    margin-bottom: 10px;
    margin-top: 10px;
    flex-direction: row;
`;

export const Interests = styled.Text`
    text-align: center;
    border: 1px solid black;
    margin: 5px;
    padding-left: 10px;
    padding-right: 10px;
`;