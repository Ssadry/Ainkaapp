import styled from 'styled-components/native';

export const Container = styled.View`
    flex: ${({flex}) => flex};
    width: ${({width}) => width + 'px'};
    position: relative;
    bottom: 0px;
    left: ${({currentPage, itemWidth}) => currentPage * -itemWidth + 'px'};
    flex-direction: row;
`;