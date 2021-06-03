import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: ${({width}) => width + 'px'};
    background-color: rgba(200, 200, 200, 1);
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    border-width: 1px;
    overflow: hidden;
`;

export const PhotoContainer = styled.View`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
    overflow: hidden;
`;

export const Photo = styled.Image`
    width: 100%;
    height: 100%;
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
    font-size: 20px;
    font-weight: bold;
`;

export const Paraph = styled.Text`
`;

export const NotificationPoint = styled.View`
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
    background-color: ${({isNew}) => isNew ? 'red' : 'transparent'};;
    position: relative;
    top: 7.5px;
    right: 7.5px;
`;