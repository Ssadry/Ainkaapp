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
    background-color: ${({backgroundColor}) => backgroundColor};
`;

export const ImageContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
`;

export const Image = styled.Image`
    width: 70%;
    height: 50%;
`;

export const BookMark = styled.TouchableOpacity` 
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 3px;
    right: 3px;
    width: 30px;
    height: 30px;
`;

export const Info = styled.View`
    width: ${({width}) => width + 'px'};
    justify-content: space-between;
    padding: 5px;
    background-color: ${({backgroundColor}) => backgroundColor};
`;

export const Title = styled.Text`
    font-weight: bold;
    color: ${({color}) => color};
    flex: 1;
    font-size: 15px;
`;

export const HoursContainer = styled.View`
    border: 2px solid ${({color}) => color};
    margin-bottom: 5px;
    justify-content: center;
    align-items: center;
    border-radius: 150px;
    width: 30px;
    height: 30px;
`;

export const Hours = styled.Text`
    color: ${({color}) => color};
    text-align: center;
    font-size: 12px;
    margin: 5px;
`;

export const Top = styled.View`
    justify-content: space-between;
    flex-direction: row;
`;

export const Bottom = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

export const StarsContainer = styled.View`
    flex-direction: row;
`;

export const Star = styled.View`
`;

export const FreeChangeContainer = styled.View`
    margin-right: 2px;
`;