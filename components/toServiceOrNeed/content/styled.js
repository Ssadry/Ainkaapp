import styled from 'styled-components/native';

export const Container = styled.View`
    padding-left: ${({myPadding}) => myPadding * 0.5 + 'px'};
    padding-right: ${({myPadding}) => myPadding * 0.5 + 'px'};
`;

export const Profile = styled.View`
    justify-content: center;
    align-items: center;
    position: relative;
    top: -75.5px;
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

export const ImageContainer = styled.View`
    width: 35px;
    height: 35px;
    border: 1px solid gray;
    border-radius: 10px;
    overflow: hidden;
    margin-left: 5px;
    margin-right: 5px;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

export const Info = styled.View`
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: -75.5px;
`;

export const TitleLocationIcons = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TopLeft = styled.View`
    flex: 1;
`;

export const TopRight = styled.View`
    flex-direction: row;
`;

export const TopRightImage = styled.View`
    margin-left: 5px;
    margin-right: 5px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const Location = styled.Text`
    font-size: 18px;
`;

export const Middle = styled.View`
    font-size: 18px;
    font-weight: bold;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Description = styled.Text`
    flex: 1;
    font-size: 18px;
    font-weight: bold;
`;

export const Hours = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const Paraph = styled.Text`

`;

export const StarsContainer = styled.View`
    flex-direction: row;
    margin-top: 40px;
    display: ${({isNeed}) => isNeed ? 'none' : 'flex'};
`;

export const Star = styled.View`
    margin-left: 3px;
    margin-right: 3px;
`;

export const ButtonContainer = styled.View`
    margin-top: 30px;
`;