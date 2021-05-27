import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${({width}) => width + 'px'};
    align-items: center;
    justify-content: center;
`;

export const Content = styled.TouchableOpacity`
    width: ${({width}) => width + 'px'};
    align-items: center;
    justify-content: center;
    border-width: 1px;
    margin: 20px;
    border-radius: ${({width}) => width * 0.05 + 'px'};
`;

export const BookMark = styled.View`
    position: absolute;
    right: 0px;
    top: 0px;
    margin-top: 5px;
    margin-right: 5px;
`;

export const ImageContainer = styled.View`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
    border: 1px solid black;
    border-radius: ${({width}) => width * 0.2 + 'px'};
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

export const InterestsContainer = styled.View`
    width: ${({width}) => width + 'px'};
    margin-bottom: 10px;
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const InterestsContent = styled.View`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
    border-width: 1px;
    overflow: hidden;
`;

export const InterestImage = styled.Image`
    width: 100%;
    height: 100%;
`;