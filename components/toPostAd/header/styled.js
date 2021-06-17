import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 10px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    margin-left: 20px;
    font-weight: bold;
    font-size: 20px;
`;

export const TitleAndIcon = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    flex: 1;
`;

export const Icon = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;