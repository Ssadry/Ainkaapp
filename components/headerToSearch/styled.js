import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({bakcgroundColor}) => bakcgroundColor};
    padding-top: 17px;
    padding-bottom: 17px;
`;

export const Left = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Middle = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 40px;
`;

export const Right = styled.View`
    height: 40px;
`;

export const GoToDefaultContent = styled.TouchableOpacity`
    flex: 1;
    width: ${({width}) => width + 'px'};
    justify-content: center;
    align-items: center;
    opacity: ${({textInputIsOnFocus}) => textInputIsOnFocus ? 1 : 0};
`;