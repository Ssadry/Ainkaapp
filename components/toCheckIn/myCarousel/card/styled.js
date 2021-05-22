import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${({width}) => width + 'px'};
    height: ${({height}) => height + 'px'};
    border: 1px solid red;
    position: relative;
    bottom: 0px;
    left: ${({currentPos}) => currentPos + 'px'};
    flex-direction: row;
`;