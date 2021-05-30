import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    padding: 20px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    margin-left: 20px;
    font-weight: bold;
    font-size: 25px;
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