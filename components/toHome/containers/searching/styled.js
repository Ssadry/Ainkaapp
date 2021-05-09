import styled from 'styled-components/native';

const FLEX = 'flex', NONE = 'none';

export const Container = styled.View`
    display: ${({searchText}) => searchText.trim() != '' ? FLEX : NONE};

    flex: 1;
`;

export const Content = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    display: ${({currentState, pos}) => currentState === pos ? FLEX : NONE};
    background-color: green;
    flex: 1;
`;