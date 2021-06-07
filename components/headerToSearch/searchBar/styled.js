import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 15px;
`;

export const SearchBar = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: white;
    border-radius: ${({width}) => width * 0.1 + 'px'};
    width: ${({width}) => width + 'px'};
    overflow: hidden;
`;

export const TextInput = styled.TextInput`
    width: ${({width}) => width + 'px'};
    padding-left: 20px;
    height: 40px;
`;

export const Icon = styled.View`
    width: ${({width}) => width + 'px'};
    justify-content: center;
    align-items: center;
`;

export const HoursContainer = styled.View`
    margin-left: 15px;
`;

export const GoToDefaultContent = styled.TouchableOpacity`
    width: 45px;
    height: 45px;
    margin-right: 5px;
    position: ${({textInputIsOnFocus}) => textInputIsOnFocus ? 'absolute' : 'relative'};;
    top: 0px;
    left: -65px;
    justify-content: center;
    align-items: center;
    display: ${({textInputIsOnFocus}) => textInputIsOnFocus ? 'flex' : 'none'};
`;