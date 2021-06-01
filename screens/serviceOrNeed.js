import React from 'react';
import styled from 'styled-components/native';
import TopSettings from '../components/toServiceOrNeed/topSettings';

export default () => {
    return (
        <Container>
            <TopSettings/>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`;