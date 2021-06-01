import styled from 'styled-components/native';

export const Container = styled.View`
    padding-left: ${({myPadding}) => myPadding * 0.5 + 'px'};
    padding-right: ${({myPadding}) => myPadding * 0.5 + 'px'};
    background-color: gray;
`;

export const Top = styled.View`
`;

export const TopLeft = styled.View`

`;

export const TopRight = styled.View`
    
`;

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
`;

export const Location = styled.Text`

`;

export const Middle = styled.View`

`;

export const Bottom = styled.View`

`;