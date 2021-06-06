import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export const IconsContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export const Icon = styled.TouchableOpacity`
    margin-left: 10px;
    margin-right: 10px;
    z-index: 100;
`;