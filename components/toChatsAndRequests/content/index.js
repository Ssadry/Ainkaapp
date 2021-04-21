import React, {useState} from 'react';
import {ChatContainer, RequestContainer} from './styled';
import {ScrollView} from 'react-native';
import Element from '../element';
import ChatPhoto from '../photo/chat';
import RequestPhoto from '../photo/request';

export default ({currentState}) => {
    const [chatTitles, setChatTitles] = useState(
        [
            'Título del servicio.',
            'Este es el segundo título.',
            'Este es el tercer título.',
            'Ya no quiero seguir un orden.',
            'No se me ocurre qué más poner',
            'Mmmmmmm',
            'Patata'
        ]
    );

    const [chatMessages, setChatMessages] = useState(
        [
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.',
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            'ñe',
            'Esto es un texto',
            'patata'
        ]  
    );

    const [requestsTitles, setRequestsTitles] = useState(
        [
            'Título de solicitud.',
            'Ahhhhhhhhhhhhhhhhh',
            'Kapasao',
            'No podés pasar',
            'Último título'
        ]
    );

    const [requestMessages, setRequestMessages] = useState(
        [
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.',
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            'Esto es un texto',
            'Último texto'
        ]
    );

    const chatElements = [chatTitles.length];

    chatTitles.forEach((title, i) => {
        chatElements[i] = <Element title={title} message={chatMessages[i]} photo={<ChatPhoto/>}/>
    });

    const requestElements = [chatTitles.length];

    requestsTitles.forEach((title, i) => {
        requestElements[i] = <Element title={title} message={requestMessages[i]} photo={<RequestPhoto/>}/>
    });

    return (
        <ScrollView>
            <ChatContainer currentState={currentState} state={0}>
                {
                    chatElements.map(element => element)
                }
            </ChatContainer>
            <RequestContainer currentState={currentState} state={1}>
                {
                    requestElements.map(element => element)
                }
            </RequestContainer>
        </ScrollView>
    )
}