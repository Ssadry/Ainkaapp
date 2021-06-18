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
    margin: 20px;
    border-radius: ${({width}) => width * 0.05 + 'px'};
    background-color: ${({backgroundColor}) => backgroundColor};
`;

export const BookMark = styled.View`
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 3px;
    right: 3px;
    width: 30px;
    height: 30px;
`;

export const ImageContainer = styled.View`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
    border-radius: ${({width}) => width * 0.2 + 'px'};
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-top: 40px;
`;

export const Image = styled.Image`
    width: 70%;
    height: 55%;
`;

export const Name = styled.Text`
    margin-top: 10px;
    font-weight: bold;
    font-size: 15px;
`;

export const InterestsContainer = styled.View`
    width: ${({width}) => width + 'px'};
    margin-bottom: 25px;
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const InterestsContent = styled.View`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
    overflow: hidden;
    justify-content: center;
    align-items: center;
`;

export const InterestImage = styled.Image`
    width: 100%;
    height: 100%;
`;