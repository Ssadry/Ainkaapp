import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    display: ${({currentState, pos}) => currentState === pos ? 'flex' : 'none'};
`;

export const Top = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

export const BarContainer = styled.View`
    min-height: 100px;
`;

export const EmptyBar = styled.View`
    width: 250px;
    height: 15px;
    background-color: rgb(220, 220, 220);
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
`;

export const FillBar = styled.View`
    background-color: rgb(180, 180, 180);
    width: 160px;
    max-width: 250px;
    min-width: 0px;
    height: 15px;
    border-radius: 20px;
`;

export const Star = styled.View`
    margin-left: -25px;
`;

export const Total = styled.Text`
    text-align: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    color: black;
    position: absolute;
    bottom: -30px;
    right: 10px;
`;

export const Exchanges = styled.View`
    width: 300px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const LeftExchanges = styled.View`
    justify-content: center;
    align-items: center;
    width: 140px;
`;

export const AmountLeftExchanges = styled.Text`
    font-weight: bold;
    color: ${({color}) => color};
`;

export const TextLeftExchanges = styled.Text`
    text-align: center;
    color: ${({color}) => color};
`;

export const RightExchanges = styled.View`
    justify-content: center;
    align-items: center;
    width: 140px;
`;

export const AmountRightExchanges = styled.Text`
    font-weight: bold;
    color: ${({color}) => color};
`;

export const TextRightExchanges = styled.Text`
    text-align: center;
    color: ${({color}) => color};
`;

export const Bottom = styled.View`
    margin-left: 15px;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: 30px;
`;

export const Description = styled.Text`
    margin-top: 15px;
    font-size: 16px;
`;

export const ImagesContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ImageContainer = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    /* border-width: 1px; */
    overflow: hidden;
    margin-top: 15px;
    margin-right: 15px;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

export const SocialsWebs = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const SocialWeb = styled.View`
    flex-direction: row;
    margin-top: 5px;
`;

export const SocialWebTitle = styled.Text`
    font-weight: bold;
    margin-right: 10px;
    color: ${({color}) => color};
`;

export const SocialWebText = styled.Text`
    
`;