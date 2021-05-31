import React from 'react';
import {Articles, Column} from './styled';
import {SafeAreaView, ScrollView} from 'react-native';

export default ({width, elements, display}) => {
    const columnWidth = width * 0.5;

    const totalArticles = elements.length;
    const halfArticles = totalArticles / 2;
    const amountLeftElements = Math.round(halfArticles);
    const amountRightElements = amountLeftElements > halfArticles ? amountLeftElements - 1 : amountLeftElements;

    const leftElements = [amountLeftElements];
    const rightElements = [amountRightElements];

    for (let i = 0; i < amountLeftElements; i++)
        leftElements[i] = elements[i];

    for (let i = 0; i < amountRightElements; i++)
        rightElements[i] = elements[i + amountLeftElements - 1];

    return (
        <SafeAreaView style={{ display: display}}>
            <ScrollView>
                <Articles>
                    <Column width={columnWidth}>
                    {
                        leftElements.map((element) => element)
                    }
                    </Column>
                    <Column width={columnWidth}>
                    {
                        rightElements.map((element) => element)
                    }
                    </Column>
                </Articles>
            </ScrollView>
        </SafeAreaView>
    )
}