import styled from 'styled-components/native';

const FLEX = 'flex', NONE = 'none';

export const Container = styled.View`
    display: ${({searchText}) => searchText.trim() != '' ? FLEX : NONE};
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Categories = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    display: ${({currentState, pos}) => currentState === pos ? FLEX : NONE};
`;

export const Profiles = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    display: ${({currentState, pos}) => currentState === pos ? FLEX : NONE};
`;