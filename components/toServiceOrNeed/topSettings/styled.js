import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 10px;
    justify-content: space-between;
    align-items: center;
`;

export const IconsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Icon = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-left: 20px;
`;

export const CheckBoxContainer = styled.View`
    width: ${({size}) => size + 'px'};
    height: ${({size}) => size + 'px'};
    justify-content: center;
    align-items: center;
`;