import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Info = styled.View`
`;

export const InfoText = styled.Text`
    margin: 10px;
`;

export const Line = styled.View`
    border-width: 0.5px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
`;

export const MessageContainer = styled.View`
    flex: 1;
    height: ${({height}) => height + 'px'};
    justify-content: flex-end;
`;

export const Message = styled.View`
    border-width: 1px;
    margin: 10px;
    justify-content: center;
    align-items: center;
`;

export const MessageText = styled.Text`
    margin: 10px;
`;

export const ScrollView = styled.ScrollView`

`