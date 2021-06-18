import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.View`
    margin-top: 20px;
`;

export const Title = styled.Text`
    margin-bottom: 5px;
    align-self: flex-start;
    font-weight: bold;
    font-size: 18px;
`;

export const NeedContainer = styled.View`
    display: ${({isNeed}) => isNeed ? 'none' : 'flex'};
`;

export const Description = styled(Title)`
    margin-top: 10px;
`;

export const Category = styled(Title)`
    margin-top: 10px;
`;

export const SubTitle = styled.Text`
    color: ${({color}) => color};
`;

export const CategoriesChecksContainer = styled.View`
    flex: 1;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 25px;
    margin-bottom: 25px;
`;

export const SliderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const MySlider = styled.View`
    width: ${({width}) => width + 'px'};
`;

export const Hours = styled.Text`
    flex: 1;
    text-align: center;
    width: ${({width}) => width + 'px'};
`;

export const ModalitiesChecksContainer = styled.View`
    padding-top: 25px;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 25px;
`;

export const ButtonContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`;