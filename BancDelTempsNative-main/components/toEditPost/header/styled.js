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

export const Icons = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Edit = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`;

export const Share = styled.TouchableOpacity`
    margin-left: 17px;
`;

export const Settings = styled.TouchableOpacity`
    margin-left: 17px;
`;