import styled from 'styled-components/native';

const padding = 30;

export const Container = styled.View`
    background-color: rgba(200, 200, 200, 1);
    border: 1px solid rgba(100, 100, 100, 1);
    position: absolute;
    top: ${({parentLayout}) => parentLayout.y + parentLayout.height + 'px'};
    left: ${({parentLayout, ownSize}) => parentLayout.x - ownSize.width + parentLayout.width + 'px'};
    opacity: ${({isActive}) => isActive ? 1 : 0};
    margin-top: 15px;
`;

export const Button = styled.TouchableOpacity`
    z-index: 100;
`;

export const Text = styled.Text`
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: ${padding + 'px'};
    margin-right: ${padding + 'px'};
`;