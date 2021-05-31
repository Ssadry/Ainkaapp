import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    /* background-color: white; */
    border-radius: 8px;
    width: ${({itemWidth}) => itemWidth + 'px'};
    padding-bottom: 0px;
    overflow: hidden;
    margin-top: 15px;
    margin-bottom: 15px;
`;