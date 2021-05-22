import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const LogoContainer = styled.View`
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-width: 1px;
    border-radius: 100px;
    margin-bottom: 10px;
`;

export const Logo = styled.Image`
    width: 100%;
    height: 100%;
`;

export const Text = styled.Text`
    font-size: 60px;
    text-align: center;
    margin-top: 10px;
    color: rgb(51, 51, 102);
    font-family: 'QuicksandRegular';
`;