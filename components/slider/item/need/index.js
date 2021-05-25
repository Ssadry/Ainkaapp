import React from 'react';
import {
    Container,
    Content
} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../../../assets/icon.png';

export default ({ width, click }) => {
    const contentWidth = width * 0.9;
    return (
        <Container width={width}>
            <Content width={contentWidth}>

            </Content>
        </Container>
    )
}