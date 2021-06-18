import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: ${({width}) => width + 'px'};
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 5px;
    flex-direction: row;
    overflow: hidden;
    background-color: ${({backgroundColor}) => backgroundColor};
`;

export const PhotoContainer = styled.View`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
    overflow: hidden;
    justify-content: center;
    align-items: center;
`;

export const Info = styled.View`
    padding-left: 15px;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    justify-content: center;
    flex: 1;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const Paraph = styled.Text`
    font-size: 16px;
`;

export const NotificationPoint = styled.View`
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
    background-color: ${({isNew, backgroundColor}) => isNew ? backgroundColor : 'transparent'};;
    position: relative;
    top: 7.5px;
    right: 7.5px;
`;