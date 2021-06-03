import React from 'react';
import {ScrollView} from 'react-native';
import {Container} from './styled';
import Message from './message';

export default Messages = ({messages, scrollViewRef}) => {
    return (    
            <ScrollView
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({animated: true})}
                contentContainerStyle={{justifyContent: 'flex-end', alignItems: 'flex-end', backgroundColor: 'red', borderWidth: 4}}
            >
                    {
                        messages.map((message, i) => 
                            <Message
                                key={i}
                            >
                                {message}
                            </Message>
                        )
                    }
            </ScrollView>
    )
}