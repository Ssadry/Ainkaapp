import React from 'react';
import {Articles, Column} from './styled';
import {SafeAreaView, ScrollView} from 'react-native';
import Article from './article/index';


export default ({screenSize}) => {
    const columnWidth = screenSize.width * 0.5;

    const totalArticles = 10;
    const halfArticles = totalArticles / 2;
    const amountLeftArticles = Math.round(halfArticles);
    const amountRightArticles = amountLeftArticles > halfArticles ? amountLeftArticles - 1 : amountLeftArticles;

    const leftArticles = [amountLeftArticles];
    const rightArticles = [amountRightArticles];

    const ARTICLE = <Article width={columnWidth}/>

    for (let i = 0; i < amountLeftArticles; i++)
        leftArticles[i] = ARTICLE;

    for (let i = 0; i < amountRightArticles; i++)
        rightArticles[i] = ARTICLE;

    return (
        <SafeAreaView>
            <ScrollView>
                <Articles width={screenSize.width}>
                    <Column width={columnWidth}>
                        {
                            leftArticles.map((article) => article)
                        }
                    </Column>
                    <Column width={columnWidth}>
                        {
                            rightArticles.map((article) => article)
                        }
                    </Column>
                </Articles>
            </ScrollView>
        </SafeAreaView>
    )
}