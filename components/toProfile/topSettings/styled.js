import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: space-between;
    align-items: center;
`;

export const IconsContainer = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
`;

export const Icon = styled.TouchableOpacity`
    margin-left: 10px;
    margin-right: 10px;
`;