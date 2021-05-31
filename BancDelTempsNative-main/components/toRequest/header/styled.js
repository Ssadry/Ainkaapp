import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    padding-left: 10px;
    padding-right: 10px;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const GoToBackButtonContainer = styled.View`
`;

export const PhotoContainer = styled.View`
    overflow: hidden;
    border-radius: 100px;
    margin-left: 10px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
`;

export const Photo = styled.Image`
    width: 100px;
    height: 100px;
`;

export const TextContainer = styled.View`
    justify-content: space-around;
`;

export const Name = styled.Text`
    font-size: 20px;
`;

export const StarsContainer = styled.View`
    flex-direction: row;
`;

export const Location = styled.Text`

`;

export const SettingsContainer = styled.View`
    justify-content: center; 
    align-items: center;
`;

export const Left = styled.View`
    flex-direction: row;
`;