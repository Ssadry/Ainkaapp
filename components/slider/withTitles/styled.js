import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const Top = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 10px;
`;

export const Bottom = styled.View`
`;

export const TextButton = styled.TouchableOpacity`
    justify-content: flex-end;
`;

export const LeftText = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-left: 4px;
`;

export const RightText = styled.Text`
    font-size: 16px;
    color: ${({color}) => color}
`;