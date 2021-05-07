import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${({width}) => width + 'px'};
    justify-content: center;
    align-items: center;
`;

export const Element = styled.View`
    width: ${({width}) => width + 'px'};
    border-width: 1px;
    margin: 10px;
    overflow: hidden;
`;

export const Top = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Bottom = styled.View`
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const PhotoContainer = styled.View`
    overflow: hidden;
    border-radius: 600px;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
`;

export const Photo = styled.Image`
    width: 100%;
    height: 100%;
`;

export const UserName = styled.Text`
    font-size: 15px;
`;

export const StarsContainer = styled.View`
    flex-direction: row;
`;

export const Description = styled.Text`
    margin-top: 10px;
`;

export const ContainerInterests = styled.View`
    flex-direction: row;
    margin-top: 10px;
    flex-wrap: wrap;
    align-items: center;
`;

export const Interest = styled.View`
    border: 1px solid black;
    margin: 2px;
`;

export const InterestText = styled.Text`
    margin: 2px;
`;