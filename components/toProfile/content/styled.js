import styled from 'styled-components/native';

const PROFILE_SIZE = 130;
const TOP = `${-(PROFILE_SIZE * 0.5 + 1.5)}px`; //El 1.5 es el grosor de la línea central.

export const Container = styled.View`
    padding-left: ${({myPadding}) => myPadding * 0.5 + 'px'};
    padding-right: ${({myPadding}) => myPadding * 0.5 + 'px'};
`;

export const Profile = styled.View`
    justify-content: center;
    align-items: center;
    position: relative;
    top: ${TOP};
`;

export const PhotoProfileContainer = styled.View`
    overflow: hidden;
    border: 1px solid gray;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: white;
    width: ${`${PROFILE_SIZE}px`};
    height: ${`${PROFILE_SIZE}px`};
`;

export const PhotoProfile = styled.Image`
    width: 80%;
    height: 60%;
`;

export const Name = styled.Text`
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
`;

export const Info = styled.View`
    flex: 1;
    position: relative;
    top: ${TOP};
    margin-top: 30px;
    margin-bottom: -65px;
`;

export const BarContainer = styled.View`
    min-height: 100px;
`;

export const EmptyBar = styled.View`
    width: 300px;
    height: 30px;
    background-color: rgb(220, 220, 220);
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
`;

export const FillBar = styled.View`
    background-color: rgb(180, 180, 180);
    width: 200px;
    max-width: 300px;
    min-width: 0px;
    height: 30px;
    border-radius: 20px;
`;

export const Star = styled.View`
    margin-left: -25px;
`;

export const Total = styled.Text`
    text-align: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    color: black;
    position: absolute;
    bottom: -40px;
    right: 10px;
`;
