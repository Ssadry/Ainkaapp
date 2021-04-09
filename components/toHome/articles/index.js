import React from 'react';
import {StyledContent, StyledHalfContent} from './styled';
import {SafeAreaView, ScrollView} from 'react-native';
import Article from './article/index';

const ARTICLE_PERCENTAJE = 70;

export default ({screenSize}) => {
    const widthHalfContent = screenSize.width * 0.5;
    const widthArticle = widthHalfContent * (ARTICLE_PERCENTAJE / 100);
    return (
        <SafeAreaView>
            <ScrollView>
                <StyledContent width={screenSize.width}>
                    {/*Left content*/}
                    <StyledHalfContent width={widthHalfContent}>
                        <Article width={widthArticle}/>
                        <Article width={widthArticle}/>
                        <Article width={widthArticle}/>
                        <Article width={widthArticle}/>
                        <Article width={widthArticle}/>
                        <Article width={widthArticle}/>
                        <Article width={widthArticle}/>
                        <Article width={widthArticle}/>
                    </StyledHalfContent>

                    {/*Right content*/}
                    <StyledHalfContent width={widthHalfContent}>
                    <Article width={widthArticle}/>
                        <Article width={widthArticle}/>
                        <Article width={widthArticle}/>
                        <Article width={widthArticle}/>
                        <Article width={widthArticle}/>
                        <Article width={widthArticle}/>
                        <Article width={widthArticle}/>
                        <Article width={widthArticle}/>
                    </StyledHalfContent>
                </StyledContent>
            </ScrollView>
        </SafeAreaView>
    )
}