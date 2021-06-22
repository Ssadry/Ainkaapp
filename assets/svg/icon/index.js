import React from 'react';
import Svg, { Path, G, Rect, ClipPath, Defs } from 'react-native-svg';
import defaultColors from '../../colors/defaultColors.json';

const DARK_BLUE = defaultColors.AzulOscuro, SIZE = 36;

export const HomeIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg 
            width={size}
            height={size} 
            viewBox="0 0 36 36"
        >
        <Path 
            d="M13.755,29.664V21.258h6.087v8.406a1.612,1.612,0,0,0,1.522,1.681h4.565a1.612,1.612,0,0,0,1.522-1.681V17.9h2.587a.849.849,0,0,0,.5-1.463L17.818,3.774a1.427,1.427,0,0,0-2.039,0L3.058,16.433a.852.852,0,0,0,.5,1.463H6.147V29.664a1.612,1.612,0,0,0,1.522,1.681h4.565A1.612,1.612,0,0,0,13.755,29.664Z" 
            transform="translate(1.198 0.655)"
            fill={color}
        />
        </Svg>
    );
};

export const InboxIcon = ({
    color = DARK_BLUE, 
    size = SIZE
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
    color = DARK_BLUE, 
    size = SIZE
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
    color = DARK_BLUE, 
    size = SIZE
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
    color = DARK_BLUE, 
    size = SIZE
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
    color = DARK_BLUE,
    size = SIZE
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

export const LogoIcon = ({
    size = SIZE
}) => {
    return (
        <Svg 
            height={size}
            width={size}
            viewBox="0 0 82.14 56.89"
        >
            <Path 
                class="cls-1" 
                d="M61.72,48.94a22.3,22.3,0,0,1,12.89-6.35V48.4a16.8,16.8,0,0,1,6,0V42.59A22.38,22.38,0,0,1,99.86,61.83H94a16.8,16.8,0,0,1,0,6h5.82a22.31,22.31,0,0,1-6.37,12.88,22.09,22.09,0,0,1-4.9,3.7L93,88.79A28.44,28.44,0,0,0,97.74,44.7a28.28,28.28,0,0,0-20.13-8.34h0A28.27,28.27,0,0,0,57.48,44.7a29.51,29.51,0,0,0-3.84,4.77L58,53.85A22.32,22.32,0,0,1,61.72,48.94Z" 
                transform="translate(-23.92 -36.36)"
                fill={defaultColors.Lila}
            />
            <Path 
                class="cls-2" 
                d="M77.58,61.83h-3a22.32,22.32,0,0,1,0,6A20.22,20.22,0,0,1,74.17,70L79,74.81a28.7,28.7,0,0,0,1.64-7h6.62a10.23,10.23,0,0,0,0-6H77.58Z" 
                transform="translate(-23.92 -36.36)"
                fill={defaultColors.AzulOscuro}
            />
            <Path 
                class="cls-1" 
                d="M68.26,80.67A22.28,22.28,0,0,1,55.37,87V81.22a16.75,16.75,0,0,1-6,0V87A22.4,22.4,0,0,1,30.12,67.79h5.82a16.8,16.8,0,0,1,0-6H30.12A22.32,22.32,0,0,1,41.4,45.2L37,40.82A28.47,28.47,0,0,0,52.37,93.25h0a28.53,28.53,0,0,0,24-13.1L72,75.76A22.14,22.14,0,0,1,68.26,80.67Z" 
                transform="translate(-23.92 -36.36)"
                fill={defaultColors.Lila}
            />
            <Path 
                class="cls-2" 
                d="M52.4,67.79h3a22.32,22.32,0,0,1,0-6c.1-.73.24-1.45.41-2.17L51,54.81a28.59,28.59,0,0,0-1.64,7H42.75a10.06,10.06,0,0,0,0,6H52.4Z" 
                transform="translate(-23.92 -36.36)"
                fill={defaultColors.AzulOscuro}
            />
        </Svg>
    );
};

export const CheckIcon = ({
    size = SIZE
}) => {
    return (
        <Svg 
            width={size} 
            height={size}
            viewBox="0 0 36 36"
        >
        <Path 
            d="M0,0H36V36H0Z" 
            fill="none"
        />
        <G 
            transform="translate(6 6)"
        >
            <Path 
                d="M24.333,5.667V24.333H5.667V5.667H24.333m0-2.667H5.667A2.675,2.675,0,0,0,3,5.667V24.333A2.675,2.675,0,0,0,5.667,27H24.333A2.675,2.675,0,0,0,27,24.333V5.667A2.675,2.675,0,0,0,24.333,3Z" 
                transform="translate(-3 -3)" 
                fill="#336"
            />
        </G>
        <Path
            d="M24.333,3H5.667A2.666,2.666,0,0,0,3,5.667V24.333A2.666,2.666,0,0,0,5.667,27H24.333A2.666,2.666,0,0,0,27,24.333V5.667A2.666,2.666,0,0,0,24.333,3Zm-12,18.667L5.667,15l1.88-1.88,4.787,4.773,10.12-10.12,1.88,1.893Z" 
            transform="translate(3 3)" 
            fill="#336"
        />
        </Svg>
    );
};

export const UnCheckIcon = ({
    size = SIZE
}) => {
    return (
        <Svg 
            width={size}
            height={size}
            viewBox="0 0 36 36"
        >
            <Path 
                d="M0,0H36V36H0Z" 
                fill="none"
            />
            <Path 
                d="M24.333,5.667V24.333H5.667V5.667H24.333m0-2.667H5.667A2.675,2.675,0,0,0,3,5.667V24.333A2.675,2.675,0,0,0,5.667,27H24.333A2.675,2.675,0,0,0,27,24.333V5.667A2.675,2.675,0,0,0,24.333,3Z" 
                transform="translate(3 3)" 
                fill="#336"
            />
        </Svg>
    );
};

export const ArtIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 44 42.75"
        >
            <Path 
                d="M21,3a18,18,0,1,0,0,36,3,3,0,0,0,2.22-5.02A2.989,2.989,0,0,1,25.46,29H29A10,10,0,0,0,39,19C39,10.16,30.94,3,21,3ZM10,21a3,3,0,1,1,3-3A3,3,0,0,1,10,21Zm6-8a3,3,0,1,1,3-3A3,3,0,0,1,16,13Zm10,0a3,3,0,1,1,3-3A3,3,0,0,1,26,13Zm6,8a3,3,0,1,1,3-3A3,3,0,0,1,32,21Z" 
                transform="translate(1 1)"
                fill={color}
            />
        </Svg>
    );
};

export const KitchenIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg 
            width={size}
            height={size}
            viewBox="0 0 44 44"
        >
            <Rect 
                width={size} 
                height={size}
            />
            <Path 
                d="M9.121,11a4.345,4.345,0,0,0-.72,2.484C8.4,14.87,10.2,18.2,10.2,20a4.868,4.868,0,0,1-.72,2.7h-2.7A4.868,4.868,0,0,0,7.5,20c0-1.8-1.8-5.13-1.8-6.516A4.345,4.345,0,0,1,6.421,11Zm9,0a4.345,4.345,0,0,0-.72,2.484c0,1.386,1.8,4.716,1.8,6.516a4.868,4.868,0,0,1-.72,2.7h2.7A4.868,4.868,0,0,0,21.9,20c0-1.8-1.8-5.13-1.8-6.516A4.345,4.345,0,0,1,20.821,11Zm-5.85,0a4.345,4.345,0,0,0-.72,2.484c0,1.386,1.8,4.734,1.8,6.516a4.868,4.868,0,0,1-.72,2.7h2.7a4.868,4.868,0,0,0,.72-2.7c0-1.8-1.8-5.13-1.8-6.516A4.345,4.345,0,0,1,14.971,11Zm23.976-.9s.234-1.908.234-2.7a5.4,5.4,0,0,0-10.764-.63L23.755,25.4H4.819a1.8,1.8,0,0,0-1.8,2.034A12.429,12.429,0,0,0,15.151,38,12.325,12.325,0,0,0,27.229,26.786L29.3,7.22A1.783,1.783,0,0,1,31.081,5.6a1.805,1.805,0,0,1,1.8,1.8c0,.54-.18,2.25-.18,2.25Z" 
                transform="translate(2.26 2)"
                fill={color}
            />
        </Svg>
    );
};

export const SportIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg 
            width={size}
            height={size}
            viewBox="0 0 44 44"
        >
            <G>
                <Rect 
                    width={size}
                    height={size}
                />
            </G>
            <G 
                transform="translate(5.504 4)"
            >
                <Path 
                    d="M30.761,3.437C26.933-.392,19.932.377,15.139,5.172a14.2,14.2,0,0,0-4.155,8.935c-.033,2.586.425,6.366-2.208,9L1.84,30.047l2.323,2.324L11.1,25.432c2.634-2.635,6.412-2.177,9-2.209a14.223,14.223,0,0,0,8.931-4.157C33.8,14.271,34.588,7.266,30.761,3.437ZM15.711,18.477c-2.5-2.5-1.718-7.544,1.734-11s8.473-4.239,10.992-1.735c2.5,2.5,1.718,7.544-1.734,11S18.231,20.981,15.711,18.477Z" 
                    transform="translate(-1.84 -1.002)"
                    fill={color}
                />
                <Path 
                    d="M20.6,18.273a3.281,3.281,0,0,1,2.328,5.6,3.313,3.313,0,0,1-2.328.949,3.281,3.281,0,0,1-2.328-5.6,3.313,3.313,0,0,1,2.328-.949M20.6,15a6.63,6.63,0,0,0-4.672,1.915,6.518,6.518,0,0,0,0,9.263,6.657,6.657,0,0,0,9.344,0,6.518,6.518,0,0,0,0-9.263A6.63,6.63,0,0,0,20.6,15Z" 
                    transform="translate(5.786 7.908)"
                    fill={color}
                />
            </G>
        </Svg>
    );
};

export const CraftIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg
            width={size} 
            height={size}
            viewBox="0 0 44 44"
        >
            <Path 
                d="M0,0H44V44H0Z" 
            />
            <Path 
                d="M11.472,23.842a5.676,5.676,0,0,0-5.683,5.683A3.845,3.845,0,0,1,2,33.314,9.8,9.8,0,0,0,9.578,37.1a7.576,7.576,0,0,0,7.578-7.578A5.676,5.676,0,0,0,11.472,23.842ZM37.446,6.09,34.907,3.552a1.887,1.887,0,0,0-2.671,0L15.261,20.526l5.21,5.21L37.446,8.761A1.887,1.887,0,0,0,37.446,6.09Z" 
                transform="translate(2 1.95)"
                fill={color}
            />
        </Svg>
    );
};

export const MusicIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg
            width={size}
            height={size} 
            viewBox="0 0 44 44"
        >
            <Path 
                d="M0,0H44V44H0Z" 
            />
            <Path 
                d="M18,3V24.1A7.982,7.982,0,1,0,22,31V11h8V3Z"
                transform="translate(4 1)"
                fill={color}
            />
        </Svg>
    );
};

export const LeisureIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg 
            width={size}
            height={size}
            viewBox="0 0 44 44"
        >
            <Path
                d="M0,0H44V44H0Z" 
            />
            <Path 
                d="M22.273,6l-6.136,8.182L20.8,20.4l-2.618,1.964c-2.765-3.682-7.364-9.818-7.364-9.818L1,25.636H37Z" 
                transform="translate(3 6.182)"
                fill={color}
            />
        </Svg>
    );
};

export const OtherIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 44 44"
        >
            <G>
                <Rect 
                    width={size}
                    height={size}
                />
            </G>
            <G 
                transform="translate(4 4.857)"
            >
                <G>
                    <Path 
                        d="M10,8V18.286l8.057,4.971L19.429,21.2l-6.857-4.114V8Z" 
                        transform="translate(3.714 2.286)"
                        fill={color}
                    />
                    <Path 
                        d="M29.291,17.714a11.373,11.373,0,0,1,.137,1.714,12,12,0,1,1-12-12,11.843,11.843,0,0,1,3.429.5V4.394A15.015,15.015,0,0,0,17.429,4,15.429,15.429,0,1,0,32.857,19.429a14.164,14.164,0,0,0-.1-1.714Z" 
                        transform="translate(-2 -0.571)"
                        fill={color}
                    />
                    <Path 
                        d="M23.571,7.143V2H20.143V7.143H15v3.429h5.143v5.143h3.429V10.571h5.143V7.143Z" 
                        transform="translate(7.286 -2)"
                        fill={color}
                    />
                </G>
            </G>
        </Svg>
    );
};

export const TechnologyIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 44 44"
        >
            <Path 
                d="M0,0H44V44H0Z" 
            />
            <Path 
                d="M30,25a3,3,0,0,0,2.985-3L33,7a3.009,3.009,0,0,0-3-3H6A3.009,3.009,0,0,0,3,7V22a3.009,3.009,0,0,0,3,3H0v3H36V25ZM6,7H30V22H6Z" 
                transform="translate(4 6)"
                fill={color}
            />
        </Svg>
    );
};

export const TransportIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg
            width={size} 
            height={size} 
            viewBox="0 0 44 44"
        >
            <G>
                <Rect 
                    width={size}
                    height={size} 
                />
            </G>
            <G 
                transform="translate(4 6.667)"
            >
                <Path 
                    d="M34.84,7.02A2.988,2.988,0,0,0,32,5H10A3.007,3.007,0,0,0,7.16,7.02L3,19V35a2.006,2.006,0,0,0,2,2H7a2.006,2.006,0,0,0,2-2V33H33v2a2.006,2.006,0,0,0,2,2h2a2.006,2.006,0,0,0,2-2V19ZM12,27a3,3,0,1,1,3-3A3,3,0,0,1,12,27Zm18,0a3,3,0,1,1,3-3A3,3,0,0,1,30,27ZM8.62,15,10.7,9H31.28l2.08,6Z" 
                    transform="translate(-3 -5)"
                    fill={color}
                />
            </G>
        </Svg>
    );
};

export const IdiomIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg
            width={size} 
            height={size} 
            viewBox="0 0 44 44"
        >
            <Path 
                d="M0,0H44V44H0Z" 
            />
            <Path 
                d="M20.424,23.646l-4.156-4.157.049-.05A29.107,29.107,0,0,0,22.387,8.625h4.795V5.312H15.727V2H12.455V5.312H1v3.3H19.278a26.093,26.093,0,0,1-5.187,8.877,25.924,25.924,0,0,1-3.78-5.548H7.038a29.123,29.123,0,0,0,4.876,7.552L3.585,27.8l2.324,2.352,8.182-8.281,5.089,5.151,1.244-3.379Zm9.213-8.4H26.364L19,35.124h3.273l1.833-4.969h7.773l1.849,4.969H37ZM25.349,26.843,28,19.671l2.651,7.171Z" 
                transform="translate(3 3.438)"
                fill={color}
            />
        </Svg>
    );
};

export const StarIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg
            width={size}
            height={size} 
            viewBox="0 0 36 36"
        >
            <Path
                d="M0,0H36V36H0Z" 
                fill="none"
            />
            <Path
                d="M16,24.5,24.652,30l-2.3-10.36L30,12.669l-10.066-.9L16,2l-3.934,9.771L2,12.669,9.644,19.64,7.348,30Z" 
                transform="translate(2 2)"
                fill={color}
            />
        </Svg>
    );
};

export const FreeChangeIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg 
            width={size}
            height={size}
            viewBox="0 0 48 48"
        >
            <Defs>
                <ClipPath>
                <Rect 
                    width={size}
                    height={size}
                />
                </ClipPath>
            </Defs>
            <G
                clip-path="url(#clip-icon_home_4)"
            >
                <Rect 
                    width={size}
                    height={size}
                />
                <G>
                    <Path
                        d="M0,0H48V48H0Z" 
                        // fill={color}
                    />
                    <Path
                        d="M30,24H22V19.44h8c3.419,0,6.2-3.337,6.2-7.44S33.419,4.56,30,4.56H22V0h8c5.514,0,10,5.383,10,12S35.514,24,30,24ZM18,24H10C4.486,24,0,18.617,0,12S4.486,0,10,0h8V4.56H10C6.581,4.56,3.8,7.9,3.8,12s2.781,7.44,6.2,7.44h8V24Z" 
                        transform="translate(4 12)" 
                        fill={color}
                    />
                    <Rect 
                        width={size}
                        height={size}
                    />
                </G>
            </G>
        </Svg>
    );
};

export const UnsaveIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg 
            width={size}
            height={size}
            viewBox="0 0 44 44"
        >
            <G 
                transform="translate(7.825 4)"
            >
                <G 
                    stroke-miterlimit="10"
                >
                    <Path 
                        d="M 26.40009880065918 33.72198486328125 L 14.54270935058594 28.62206077575684 L 13.95004940032959 28.36714935302734 L 13.35738945007324 28.62206077575684 L 1.499999403953552 33.72198486328125 L 1.499999403953552 4 C 1.499999403953552 2.621500015258789 2.615089416503906 1.5 3.985729455947876 1.5 L 23.91436958312988 1.5 C 25.28500938415527 1.5 26.40009880065918 2.621500015258789 26.40009880065918 4 L 26.40009880065918 33.72198486328125 Z" 
                        stroke="none"
                    />
                    <Path 
                        d="M 3.98573112487793 3 C 3.451414108276367 3 3.000001907348633 3.457942962646484 3.000001907348633 4 L 3.000001907348633 31.4439582824707 L 13.95004940032959 26.73428344726562 L 24.90009689331055 31.4439582824707 L 24.90009689331055 4 C 24.90009689331055 3.457942962646484 24.44868469238281 3 23.91436767578125 3 L 3.98573112487793 3 M 3.98573112487793 0 L 23.91436767578125 0 C 26.10651969909668 0 27.90009689331055 1.799999237060547 27.90009689331055 4 L 27.90009689331055 36 L 13.95004940032959 30 L 1.9073486328125e-06 36 L 1.9073486328125e-06 4 C 1.9073486328125e-06 1.799999237060547 1.7935791015625 0 3.98573112487793 0 Z" 
                        stroke="none" 
                        fill={color}
                    />
                </G>
            </G>
            <G 
                transform="translate(7.825 4)" 
                stroke-miterlimit="10"
            >
                <Path 
                    d="M 26.40009880065918 33.72198486328125 L 14.54270935058594 28.62206077575684 L 13.95004940032959 28.36714935302734 L 13.35738945007324 28.62206077575684 L 1.499999403953552 33.72198486328125 L 1.499999403953552 4 C 1.499999403953552 2.621500015258789 2.615089416503906 1.5 3.985729455947876 1.5 L 23.91436958312988 1.5 C 25.28500938415527 1.5 26.40009880065918 2.621500015258789 26.40009880065918 4 L 26.40009880065918 33.72198486328125 Z" 
                    stroke='none'
                />
                <Path 
                    d="M 3.98573112487793 3 C 3.451414108276367 3 3.000001907348633 3.457942962646484 3.000001907348633 4 L 3.000001907348633 31.4439582824707 L 13.95004940032959 26.73428344726562 L 24.90009689331055 31.4439582824707 L 24.90009689331055 4 C 24.90009689331055 3.457942962646484 24.44868469238281 3 23.91436767578125 3 L 3.98573112487793 3 M 3.98573112487793 0 L 23.91436767578125 0 C 26.10651969909668 0 27.90009689331055 1.799999237060547 27.90009689331055 4 L 27.90009689331055 36 L 13.95004940032959 30 L 1.9073486328125e-06 36 L 1.9073486328125e-06 4 C 1.9073486328125e-06 1.799999237060547 1.7935791015625 0 3.98573112487793 0 Z" 
                    stroke="none" 
                    fill={color}
                />
            </G>
        </Svg>
    );
};

export const LeftArrowIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg 
            width={size}
            height={size}
            viewBox="0 0 44 44"
        >
            <Path 
                d="M0,0H44V44H0Z" 
                fill="none"
            />
            <Path 
                d="M39,16H10.66l7.16-7.18L15,6,3,18,15,30l2.82-2.82L10.66,20H39Z" 
                transform="translate(1 4.176)"
                fill={color}
            />
        </Svg>
    );
};

export const SettingsIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg 
            width={size}
            height={size}
            viewBox="0 0 36 36"
        >
            <Defs>
                <ClipPath>
                    <Rect 
                        width={size}
                        height={size}
                    />
                </ClipPath>
            </Defs>
            <G>
                <Rect 
                    width={size}
                    height={size}
                />
                <G>
                    <Path 
                        d="M3.875,0A4.006,4.006,0,0,0,0,4.1a4.006,4.006,0,0,0,3.875,4.1A4.006,4.006,0,0,0,7.75,4.1,4.006,4.006,0,0,0,3.875,0Z" 
                        transform="translate(22.103 2.5) rotate(90)"
                        fill={color}
                    />
                    <Path 
                        d="M3.875,0A4.006,4.006,0,0,0,0,4.1a4.006,4.006,0,0,0,3.875,4.1A4.006,4.006,0,0,0,7.75,4.1,4.006,4.006,0,0,0,3.875,0Z" 
                        transform="translate(22.103 25.75) rotate(90)"
                        fill={color}
                    />
                    <Path
                        d="M3.875,0A4.006,4.006,0,0,0,0,4.1a4.006,4.006,0,0,0,3.875,4.1A4.006,4.006,0,0,0,7.75,4.1,4.006,4.006,0,0,0,3.875,0Z" 
                        transform="translate(22.103 14.125) rotate(90)"
                        fill={color}
                    />
                    <Rect 
                        width={size}
                        height={size}
                    />
                </G>
            </G>
        </Svg>
    );
};

export const ShareIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg 
            width={size} 
            height={size}
            viewBox="0 0 36 36"
        >
        <Defs>
            <ClipPath>
                <Rect 
                    width={size}
                    height={size}
                />
            </ClipPath>
        </Defs>
        <G
            clip-path="url(#clip-icon_compartir_perfil)"
        >
            <Rect 
                width={size}
                height={size}
            />
            <G>
                <Path
                    d="M23.333,21.2a4.612,4.612,0,0,0-3.049,1.16L9.193,16.114a4.782,4.782,0,0,0,.14-1.054,4.782,4.782,0,0,0-.14-1.054L20.16,7.816a4.73,4.73,0,0,0,3.173,1.22A4.588,4.588,0,0,0,28,4.518a4.669,4.669,0,0,0-9.333,0,4.782,4.782,0,0,0,.14,1.054L7.84,11.762a4.73,4.73,0,0,0-3.173-1.22,4.52,4.52,0,1,0,0,9.036,4.73,4.73,0,0,0,3.173-1.22l11.076,6.265a4.121,4.121,0,0,0-.124.979,4.545,4.545,0,1,0,4.542-4.4Z" 
                    transform="translate(4 3)"
                    fill={color}
                />
                <Rect
                    width={size}
                    height={size}
                    fill="none"
                />
            </G>
        </G>
        </Svg>

    );
};

export const EditIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg 
            width={size}
            height={size}
            viewBox="0 0 36 36"
        >
            <Path 
                d="M0,0H36V36H0Z" 
                fill="none"
            />
            <Path 
                d="M3,25.168V31H8.833l17.2-17.2L20.2,7.964ZM30.549,9.286a1.549,1.549,0,0,0,0-2.193l-3.64-3.64a1.549,1.549,0,0,0-2.193,0L21.869,6.3,27.7,12.133l2.847-2.847Z" 
                transform="translate(0.998 1)"
                fill={color}
            />
        </Svg>
    );
};

export const InPersonIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg
            width={size}
            height={size} 
            viewBox="0 0 48 48"
        >
            <Defs>
                <ClipPath>
                    <Rect 
                        width={size} 
                        height={size}
                    />
                </ClipPath>
            </Defs>
            <G
                clip-path="url(#clip-icon_presencial)"
            >
                <Rect 
                    width={size}
                    height={size}
                />
                <G>
                    <Path 
                        d="M0,0H48V48H0Z" 
                        fill="none"
                    />
                    <Path 
                        d="M16,21.5A2.5,2.5,0,1,0,18.5,24,2.5,2.5,0,0,0,16,21.5Zm12,0A2.5,2.5,0,1,0,30.5,24,2.5,2.5,0,0,0,28,21.5ZM22,2A20,20,0,1,0,42,22,20.007,20.007,0,0,0,22,2Zm0,36A16.021,16.021,0,0,1,6,22a16.216,16.216,0,0,1,.1-1.72A20.123,20.123,0,0,0,16.52,9.54,19.948,19.948,0,0,0,32.84,18a19.521,19.521,0,0,0,4.5-.52A15.976,15.976,0,0,1,22,38Z" 
                        transform="translate(2 2)" 
                        fill={color}
                    />
                </G>
            </G>
        </Svg>
    );
};

export const OnlineIcon = ({
    size = SIZE,
    color = DARK_BLUE
}) => {
    return (
        <Svg
            width={size} 
            height={size}
            viewBox="0 0 48 48"
        >
            <Defs>
                <ClipPath>
                    <Rect 
                        width={size}
                        height={size}
                    />
                </ClipPath>
            </Defs>
            <G
                clip-path="url(#clip-icon_home_3)"
            >
                <Rect 
                    width={size}
                    height={size}
                    />
                <G>
                    <Path 
                        d="M0,0H48V48H0Z" 
                        fill="none"
                    />
                    <Path 
                        d="M21.98,2A20,20,0,1,0,42,22,19.99,19.99,0,0,0,21.98,2ZM35.84,14h-5.9a31.3,31.3,0,0,0-2.76-7.12A16.059,16.059,0,0,1,35.84,14ZM22,6.08A28.174,28.174,0,0,1,25.82,14H18.18A28.174,28.174,0,0,1,22,6.08ZM6.52,26a15.645,15.645,0,0,1,0-8h6.76A33.03,33.03,0,0,0,13,22a33.03,33.03,0,0,0,.28,4Zm1.64,4h5.9a31.3,31.3,0,0,0,2.76,7.12A15.974,15.974,0,0,1,8.16,30Zm5.9-16H8.16a15.974,15.974,0,0,1,8.66-7.12A31.3,31.3,0,0,0,14.06,14ZM22,37.92A28.174,28.174,0,0,1,18.18,30h7.64A28.174,28.174,0,0,1,22,37.92ZM26.68,26H17.32A29.425,29.425,0,0,1,17,22a29.169,29.169,0,0,1,.32-4h9.36A29.169,29.169,0,0,1,27,22,29.425,29.425,0,0,1,26.68,26Zm.5,11.12A31.3,31.3,0,0,0,29.94,30h5.9A16.059,16.059,0,0,1,27.18,37.12ZM30.72,26A33.031,33.031,0,0,0,31,22a33.031,33.031,0,0,0-.28-4h6.76a15.645,15.645,0,0,1,0,8Z" 
                        transform="translate(1.989 1.989)" 
                        fill={color}
                    />
                </G>
            </G>
        </Svg>
    );
};