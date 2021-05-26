import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${({width}) => width + 'px'};
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    padding: 20px;
`;

export const Title = styled.Text`
    margin-left: 20px;
    font-size: 30px;
`;

export const TitleAndIcon = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Plus = styled.TouchableOpacity`
    
`;