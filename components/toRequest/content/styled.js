import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const MyContent = styled.View`
    padding-left: ${({myPadding}) => myPadding * 0.5 + 'px'};
    padding-right: ${({myPadding}) => myPadding * 0.5 + 'px'};
    margin-top: ${({serviceNameHeight}) => -(serviceNameHeight + 75.5) + 'px'};;
`;

export const TopPhoto = styled.ImageBackground`
    height: 200px;
`;

export const Line = styled.View`
    background-color: gray;
    width: ${({width}) => width + 'px'};
    height: 1px;
    position: absolute;
    bottom: 0px;
`;

export const ServiceName = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 20px;
`;

export const Profile = styled.View`
    justify-content: center;
    align-items: center;
`;

export const PhotoProfileContainer = styled.View`
    width: 150px;
    height: 150px;
    border: 1px solid gray;
    border-radius: 20px;
    overflow: hidden;
`;

export const PhotoProfile = styled.Image`
    width: 100%;
    height: 100%;
`;

export const Name = styled.Text`
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Images = styled.View`
    flex-direction: row;
`;

export const Info = styled.View`
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 20px;
    margin-bottom: 20px;
`;

export const Location = styled.Text`
    font-size: 18px;
`;

export const ParaphContainer = styled.View`
    background-color: rgb(200, 200, 200);
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const Paraph = styled.Text`
    padding: 20px;
`;

export const ButtonContainer = styled.View`
    width: ${({width}) => width + 'px'};
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 50px;
`;

export const Button = styled.View`
    margin-left: 5px;
    margin-right: 5px;
`;