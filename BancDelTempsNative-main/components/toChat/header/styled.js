import styled from 'styled-components/native';

export const Header = styled.View`

`;

export const GoToBackButtonContainer = styled.View`
    margin-left: 10px;
    margin-right: 10px;
`;

export const Top = styled.View`
    margin-top: 30px;
    padding: 10px;
    background-color: white;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Image = styled.Image`
    width: 100px;
    height: 100px;
`;

export const TopLeft = styled.View`
    flex-direction: row;
`;

export const Text = styled.View`
    margin-left: 20px;
`;

export const Hours = styled.Text`
    font-size: 30px;
`;

export const Title = styled.Text`
    font-size: 20px;
`;

export const Icons = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const User = styled.View`
    margin-right: 10px;
`;

export const Settings = styled.View`
    margin-left: 10px;
`;

export const Bottom = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    width: ${({width}) => width + 'px'};
    height: 50px;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;

export const ButtonText = styled.Text`
`;