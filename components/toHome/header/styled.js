import styled from 'styled-components/native';

export const StyledHeader = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90px;
    display: flex;
    border: 1px solid black;
    background-color: white;
    z-index: 100;

    > View {
        margin: 0;
        width: 60px;
        height: 50px;
        border-radius: 50%;
        text-align: center;
        border: 1px solid black;
        margin-right: 10px;
    }
`;