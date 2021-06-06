import styled from 'styled-components/native';

export const Container = styled.View`
    padding-left: ${({myPadding}) => myPadding * 0.5 + 'px'};
    padding-right: ${({myPadding}) => myPadding * 0.5 + 'px'};
`;

export const Profile = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    position: relative;
    /* top: -75.5px; */
`;

export const PhotoProfileContainer = styled.View`
    width: 150px;
    height: 150px;
    overflow: hidden;
    border: 1px solid gray;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;

export const ButtonProfile = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const PhotoProfile = styled.ImageBackground`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const ChangePhotoText = styled.Text`
    text-align: center;
    font-size: 20px;
`;

export const Info = styled.View`
    flex: 1;
    position: relative;
    /* top: -75.5px; */
    margin-top: 30px;
    /* margin-bottom: -75.5px; */
`;

export const BarContainer = styled.View`
    min-height: 100px;
`;

export const EmptyBar = styled.View`
    width: 300px;
    height: 30px;
    background-color: rgb(220, 220, 220);
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
`;

export const FillBar = styled.View`
    background-color: rgb(180, 180, 180);
    width: 200px;
    max-width: 300px;
    min-width: 0px;
    height: 30px;
    border-radius: 20px;
`;

export const Star = styled.View`
    margin-left: -25px;
`;

export const Total = styled.Text`
    text-align: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    color: black;
    position: absolute;
    bottom: -40px;
    right: 10px;
`;
