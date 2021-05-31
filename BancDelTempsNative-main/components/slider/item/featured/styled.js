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
    overflow: hidden;
    border: 1px solid rgba(170, 170, 170, 1);
`;

export const ImageBackground = styled.ImageBackground`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
`;

export const BookMark = styled.TouchableOpacity`
    justify-content: center;
    align-items: flex-end;
    margin: 5px;
`;

export const Info = styled.View`
    background-color: rgba(170, 170, 170, 1);
    width: ${({width}) => width + 'px'};
    justify-content: space-between;
    padding: 5px;
`;

export const Title = styled.Text`
    font-weight: bold;
    color: white;
    flex: 0.8;
`;

export const HoursContainer = styled.View`
    border: 1px solid white;
    margin-bottom: 5px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
`;

export const Hours = styled.Text`
    color: white;
    text-align: center;
    margin: 5px;
`;

export const Top = styled.View`
    justify-content: space-between;
    flex-direction: row;
`;

export const Bottom = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const StarsContainer = styled.View`
    flex-direction: row;
`;

export const Star = styled.View`
    margin: 2px;
`;