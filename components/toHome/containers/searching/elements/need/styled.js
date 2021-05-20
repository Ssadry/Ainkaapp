import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${({width}) => width + 'px'};
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    width: ${({width}) => width + 'px'};
    border-width: 1px;
    border-radius: 10px;
    overflow: hidden;
    margin: 20px;
`;

export const Top = styled.ImageBackground`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
    align-items: flex-end;
`;

export const BookMark = styled.TouchableOpacity`
    margin: 5px;
`;

export const Bottom = styled.View`
    background-color: gray;
    flex-direction: row;
    padding: 10px;
    justify-content: space-between;
`;

export const BottomRight = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: white;
    width: ${({width}) => width + 'px'};
`;

export const HoursContainer = styled.View`
    justify-content: center;
    align-items: center;
    border-radius: ${({width}) => width * 0.5 + 'px'};;
    border: 2px solid white;
    align-items: center;
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
    margin-bottom: 10px;
`;

export const HoursText = styled.Text`
    color: white;
    text-align: center;
`;