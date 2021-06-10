import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgba(220, 220, 220, 1);
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const Left = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Middle = styled.View`
    justify-content: center;
    align-items: center;
    height: 40px;
`;

export const Right = styled.View`
    flex: 1;
`;

export const GoToDefaultContent = styled.TouchableOpacity`
    flex: 1;
    width: ${({width}) => width + 'px'};
    justify-content: center;
    align-items: center;
    opacity: ${({textInputIsOnFocus}) => textInputIsOnFocus ? 1 : 0};
`;