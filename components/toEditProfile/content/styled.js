import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Line = styled.View`
    width: ${({width}) => width + 'px'};
    height: 1px;
    margin-bottom: 20px;
    background-color: gray;
`;

export const Form = styled.View`
    margin-top: 20px;
`;

export const Title = styled.Text`
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 5px;
    align-self: flex-start;
    font-size: 18px;
`;

export const CategoriesChecksContainer = styled.View`
    flex: 1;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`;

export const ProfileContainer = styled.ImageBackground`
    width: 150px;
    height: 150px;
    border-radius: 20px;
    border-width: 1px;
    margin-top: -75px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const UploadPhoto = styled.ImageBackground`
    width: ${({width}) => width + 'px'};
    height: 150px;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    margin-top: -90px;
`;

export const ButtonProfile = styled.TouchableOpacity`
    
`;

export const Text = styled.Text`
    font-size: 20px;
    text-align: center;
`;

export const BottomLine = styled.View`
    width: ${({width}) => width + 'px'};
    height: 1px;
    background-color: gray;
    position: absolute;
    bottom: 0px;
    left: 0px;;
`;