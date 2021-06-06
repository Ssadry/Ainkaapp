import styled from 'styled-components/native';

export const Container = styled.View`
    height: 170px;
`;

export const Line = styled.View`
    height: 1.5px;
    width: ${({width}) => width + 'px'};
    background-color: gray;
`;

export const PhotoServicie = styled.ImageBackground`
    flex: 1;
    width: ${({width}) => width + 'px'};
    z-index: 1;
`;

export const Button = styled.TouchableOpacity`
    flex: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-top: -20px;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: 20px;
`;

export const TopSettings = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    z-index: 1;
`;

export const IconsContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
`;

export const Image = styled.TouchableOpacity`
    margin-left: 30px;
    z-index: 10;
`;