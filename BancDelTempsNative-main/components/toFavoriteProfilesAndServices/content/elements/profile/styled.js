import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    width: ${({width}) => width + 'px'};
`;

export const Element = styled.View`
    width: ${({width}) => width + 'px'};
    overflow: hidden;
    margin: 10px;
    border-width: 1px;
`;

export const PhotoContainer = styled.View`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
    justify-content: center;
    align-items: center;
`;

export const Photo = styled.Image`
    width: 100%;
    height: 100%;
`;

export const Title = styled.Text`

`;

export const Hours = styled.Text`

`;

export const TitleAndHours = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
`;

export const Description = styled.Text`
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
`;