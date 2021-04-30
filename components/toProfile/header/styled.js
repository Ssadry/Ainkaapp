import styled from 'styled-components/native';

export const Header = styled.View`
    margin-top: 40px;
    width: ${({width}) => width};
    border: 1px solid black;
`;

export const Icons = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const LeftIcons = styled.View`
    margin-left: 10px;
    justify-content: center;
    align-items: center;
`;

export const RightIcons = styled.View`
    flex-direction: row;
`;

export const Settings = styled.View`
    margin-right: 40px;
`;

export const Share = styled.View`
    margin-right: 10px;
`;

export const User = styled.View`
    margin-right: 20px;
    margin-left: 20px;
`;

export const Info = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Personal = styled.View`
    justify-content: center;
    align-items: center;
    margin-right: 30px;
`;

export const Name = styled.Text`
    font-size: 20px;
`;

export const Starts = styled.View`
    flex-direction: row;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
`;

export const Photo = styled.View`

`;

export const Amount = styled.Text`
    margin-left: 10px;
`;

export const Details = styled.View`
    width: 200px;
    height: 100px;
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
`;

export const Icon = styled.View`
    margin-right: 20px;
`;

export const Text = styled.Text`
    font-size: 15px;
`;

export const Counter = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;

export const PulledApart = styled.View`
    justify-content: center;
    align-items: center;
    width: ${({width}) => width};
`;

export const PulledApartNumber = styled.Text`
    font-size: 25px;
`;

export const PulledApartText = styled.Text`
    font-size: 15px;
`;