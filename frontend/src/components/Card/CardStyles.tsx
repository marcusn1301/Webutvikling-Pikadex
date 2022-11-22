import styled from "styled-components";

interface TagIconI {
    background: string;
}

interface CardContainerI {
    backgroundColor: string;
}

interface NameTagI {
    backgroundColor: string;
}

interface PokedexI {
    backgroundColor: string;
}

export const CardContainer = styled.div<CardContainerI>`
    width: 80%;
    min-height: 195px;
    height: fit-content;
    border-radius: 8px;
    display: grid;
    grid-template-rows: auto;
    border: 1px solid rgb(${(props: any) => props.backgroundColor});
    transition: 0.1s;
    &:hover {
        cursor: pointer;
    }
`;

export const InformationBg = styled.div<CardContainerI>`
    width: 100%;
    min-height: 135px;
    transition: 0.15s ease-in-out;
    background-color: #ffffff;
    display: grid;
    grid-template-rows: auto;
    &:hover {
        background-color: rgba(${(props: any) => props.backgroundColor}, 0.5);
        transition: 0.15s ease-in-out;
    }
`;
export const InformationContainer = styled.div<CardContainerI>`
    min-height: 103px;
    width: 100%;
    display: grid;
    column-gap: 10px;
    justify-content: center;
    background-color: rgba(${(props: any) => props.backgroundColor}, 0.2);
`;

export const TagIcon = styled.div<TagIconI>`
    width: 40px;
    height: 20px;
    background-color: ${(props) => props.background};
`;

export const NameTagOuter = styled.div`
    width: 100%;
    background-color: #1a1a1a;
    border-radius: 0px 0px 8px 8px;
`;

export const NameTag = styled.div<NameTagI>`
    width: 100%;
    color: #ffffff;
    font-size: 22px;
    font-weight: 400;
    background-color: rgba(${(props: any) => props.backgroundColor}, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 0px 8px 8px;
`;

interface TagI {
    backgroundColor: string;
}

export const Tags = styled.div<CardContainerI>`
    min-height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    gap: 30px;
    position: relative;
    background-color: rgba(${(props: any) => props.backgroundColor}, 0.2);
`;

export const Tag = styled.div<TagI>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    height: 20px;
    background-color: rgba(15, 10, 10, 0.8);
    border: 3px solid ${(props: any) => props.backgroundColor};
    outline: 1px solid #1a1a1a;
    font-size: 14px;
    border-radius: 15px;
    gap: 20px;
    padding: 3px 6px 3px 6px;
    color: white;
    font-weight: 500;
    font-size: 13px;
    transform: translateY(-20%);
`;

export const CardExpandContainer = styled.div<CardContainerI>`
    position: fixed;
    top: 250px;
    height: fit-content;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    box-shadow: 0px 10px 20px 31px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-rows: repeat(auto);
    transition: 0.1s;
    z-index: 999999;
    border: 2px solid rgba(${(props: any) => props.backgroundColor});

    @media (max-width: 600px) {
        width: 85%;
        @keyframes slideInFromLeft {
            0% {
                width: 200px;
            }
        }
    }

    @media (min-width: 600px) {
        width: 400px;
        @keyframes slideInFromLeft {
            0% {
                transform: translateX(-100%);
                width: 200px;
            }
            100% {
                transform: translateX(0);
            }
        }
    }

    @media (max-height: 650px) {
        top: 200px;
    }

    animation: 0.3s ease-out 0s 1 slideInFromLeft;
`;

export const IndexRow = styled.div<PokedexI>`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 8px 8px 0 0;
    align-items: center;
    background-color: rgba(${(props: any) => props.backgroundColor}, 0.35);
`;

export const BackButtonContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 0 0 20px;
    width: 100%;
    color: rgb(120, 0, 0);

    .arrowBack {
        float: left;
        &:hover {
            cursor: pointer;
            color: rgb(140, 0, 0);
        }
    }
`;

export const IndexOuter = styled.div`
    width: 100%;
    background-color: #1a1a1a;
    border-radius: 8px 8px 0 0;
`;

export const IndexOuterBg = styled.div<PokedexI>`
    width: 100%;
    background-color: rgba(${(props: any) => props.backgroundColor}, 0.1);
`;

export const PokeIndex = styled.div<PokedexI>`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 97.5%;
    /* transform: translate(-8px, 0px); */
    font-size: 18px;
    color: #ffffff;
    font-weight: 400;
`;
export const InfoContainerExpanded = styled.div<CardContainerI>`
    width: 100%;
    background-color: rgba(${(props: any) => props.backgroundColor}, 0.2);
    z-index: 50;
`;
export const InfoGrid = styled.div`
    display: grid;
    grid-template-rows: auto;
    width: 100%;
    grid-row-gap: 10px;
    justify-content: center;
    padding-bottom: 8px;
`;

export const StatsContainer = styled.div<CardContainerI>`
    font-size: 1.2rem;
    color: white;
    width: fit-content;
    background-color: #303030;
    display: grid;
    grid-template-rows: 1fr;
    justify-content: center;
    border-radius: 6px;
    padding: 10px;
`;

export const StatsText = styled.div`
    font-size: 1.2rem;
    width: 100%;
`;

export const TagsExpanded = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    bottom: 5px;
`;

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const PokemonImg = styled.img``;

export const NameContainer = styled.div<CardContainerI>`
    width: 100%;
    border-radius: 0 0 8px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: rgba(${(props: any) => props.backgroundColor}, 0.4);
`;

export const NameTagExpanded = styled.div`
    color: black;
    font-size: 22px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 5px 0 5px 0;
`;

export const StarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: rgba(15, 10, 10, 0.8);
    min-width: 55px;
    max-width: 70px;
    height: 35px;
    border-radius: 8px;

    .star {
        &:hover {
            cursor: pointer;
        }
    }
`;

export const Favorited = styled.div`
    color: white;
    font-weight: 500;
`;

export const CardOverlay = styled.div`
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 49;
    background-color: rgba(0, 0, 0, 0.6);
    &:hover {
        cursor: pointer;
    }
`;
