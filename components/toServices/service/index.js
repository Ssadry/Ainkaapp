import React from 'react';
import {Service, Info, Hours, SeeAndLike, ExtraInfo, Connected, Globe, GlobeText, Heart, Eye, Icons, Offer, Title, Paraph} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faEye, faGlobe } from '@fortawesome/free-solid-svg-icons';

export default () => {
    return (
        <Service>
            <Info>
                <Hours>
                    1 H
                </Hours>
                <ExtraInfo>
                    <SeeAndLike>
                        <Icons>
                            <Eye>
                                <FontAwesomeIcon icon={faEye} size="30px"/>
                            </Eye>
                            <Heart>
                                <FontAwesomeIcon icon={faHeart} size="30px"/>
                            </Heart>
                        </Icons>
                    </SeeAndLike>
                    <Connected>
                        <Globe>
                            <FontAwesomeIcon icon={faGlobe} size="30px"/>
                        </Globe>
                        <GlobeText>
                            DISP. ONLINE
                        </GlobeText>
                    </Connected>
                </ExtraInfo>
            </Info>
            <Offer>
                <Title>
                    Título
                </Title>
                <Paraph>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Paraph>
            </Offer>
        </Service>
    )
}