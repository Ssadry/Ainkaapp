import styled from 'styled-components/native';

export const Container = styled.View`
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    align-items: center;
`;

export const ImageContainer = styled.View`
    border: 1px solid black;
    border-radius: 100px;
    width: ${({width}) => width};
    height: ${({width}) => width};
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-bottom: 10px;
`;

export const Image = styled.Image`
    width: ${({width}) => width};
    height: ${({width}) => width};
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