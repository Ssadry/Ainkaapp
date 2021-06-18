import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    padding-right: 10px;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
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

export const Icons = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Settings = styled.TouchableOpacity`
    margin-left: 17px;
`;