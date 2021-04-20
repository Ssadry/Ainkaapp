import React from 'react';
import styled from 'styled-components/native';
import TopImage from '../toServices/topImage/index';
import Service from '../toServices/service/index';
import User from '../toServices/user/index';
import Petition from '../toServices/petition/index';

export default () => {
    return (
        <Container>
            <TopImage />
            <Service />
            <User />
            <Petition />
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
`;