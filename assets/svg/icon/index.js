import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const HomeIcon = ({
    color = '#000000', 
    size = 36
}) => {
    return (
        <Svg 
            width={size}
            height={size} 
            viewBox="0 0 36 36"
        >
            <Path 
                fill={color}
                fillRule='evenodd'
                d="M13.755,26.345V19h6.087v7.346a1.5,1.5,0,0,0,1.522,1.469h4.565a1.5,1.5,0,0,0,1.522-1.469V16.061h2.587a.726.726,0,0,0,.5-1.278L17.818,3.72a1.575,1.575,0,0,0-2.039,0L3.058,14.783a.728.728,0,0,0,.5,1.278H6.147V26.345a1.5,1.5,0,0,0,1.522,1.469h4.565A1.5,1.5,0,0,0,13.755,26.345Z"
                transform="translate(1.198 2.42)"
            />
        </Svg>
    );
};

export const InboxIcon = ({
    color = '#000000', 
    size = 36
}) => {
    return (
        <Svg 
            width={size} 
            height={size}
            viewBox="0 0 36 36"
        >
            <Path 
                d="M27.2,4H4.8A2.8,2.8,0,0,0,2.014,6.8L2,23.6a2.808,2.808,0,0,0,2.8,2.8H27.2A2.808,2.808,0,0,0,30,23.6V6.8A2.808,2.808,0,0,0,27.2,4Zm-.56,5.95-9.9,6.188a1.416,1.416,0,0,1-1.484,0L5.36,9.95A1.189,1.189,0,1,1,6.62,7.934L16,13.8l9.38-5.866A1.189,1.189,0,1,1,26.64,9.95Z" 
                transform="translate(2 2.8)"
                fill={color}
            />
        </Svg>
    );
};

export const PlusIcon = ({
    color = '#000000', 
    size = 36
}) => {
    return (
        <Svg 
            id="icon_cargar" 
            xmlns="http://www.w3.org/2000/svg" 
            width={size}
            height={size}
            viewBox="0 0 36 36"
        >
            <Path 
                id="Trazado_7" 
                data-name="Trazado 7" 
                d="M0,0H36V36H0Z" 
            />
            <Path 
                id="Trazado_16" 
                data-name="Trazado 16" 
                d="M31,21H21V31a2,2,0,0,1-4,0V21H7a2,2,0,0,1,0-4H17V7a2,2,0,0,1,4,0V17H31a2,2,0,0,1,0,4Z" 
                transform="translate(-1 -1)"
                fill={color}
            />
        </Svg>
    );
};

export const ProfileIcon = ({
    color = '#000000', 
    size = 36
}) => {
    return (
        <Svg 
            width={size}
            height={size}
            viewBox="0 0 36 36"
        >
            <Path 
                d="M18,18a7,7,0,1,0-7-7A7,7,0,0,0,18,18Zm0,3.5c-4.672,0-14,2.345-14,7v1.75A1.755,1.755,0,0,0,5.75,32h24.5A1.755,1.755,0,0,0,32,30.25V28.5C32,23.845,22.672,21.5,18,21.5Z"
                fill={color}
            />
        </Svg>
    );
};

export const SavedIcon = ({
    color = '#000000', 
    size = 36
}) => {
    return (
        <Svg 
            width={size}
            height={size}
            viewBox="0 0 36 36"
        >
            <Path 
                d="M23.667,3H8.111A3.12,3.12,0,0,0,5,6.111V31l10.889-4.667L26.778,31V6.111A3.12,3.12,0,0,0,23.667,3Z" 
                transform="translate(2.111 1)"
                fill={color}
            />
        </Svg>
    );
};
export const SearchIcon = ({
    color = '#000000',
    size = 36
}) => {
    return (
        <Svg 
            width={size}
            height={size} 
            viewBox="0 0 36 36"
        >
            <Path 
                d="M23.531,21.063h-1.3l-.46-.443a10.707,10.707,0,1,0-1.15,1.149l.443.46v1.3l6.98,6.979a1.73,1.73,0,0,0,2.447-2.447Zm-9.855,0a7.389,7.389,0,1,1,7.391-7.389A7.38,7.38,0,0,1,13.676,21.063Z" 
                transform="translate(1 0.995)"
                fill={color}
            />
        </Svg>
    );
};