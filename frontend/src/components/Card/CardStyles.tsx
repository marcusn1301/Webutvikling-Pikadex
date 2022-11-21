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
    height: 190px;
    background-color: rgba(${(props: any) => props.backgroundColor}, 0.2);
    border-radius: 8px 8px 0 0;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr 1fr;
    border: 1px solid rgb(${(props: any) => props.backgroundColor});
    transition: 0.1s;

    &:hover {
        background-color: rgba(${(props: any) => props.backgroundColor}, 0.4);
        cursor: pointer;
    }

    /* @media screen and (min-width: 900px) and (max-width: 1199px) {
        &:nth-child(10) {
            grid-column: span 3;
            width: 26.5%;
        }
    } */
`;

export const InformationContainer = styled.div`
    width: 100%;
    display: grid;
    padding: 10px;
    border-radius: 8px 8px 0 0;
    column-gap: 10px;
    justify-content: center;
`;

export const TagIcon = styled.div<TagIconI>`
    width: 40px;
    height: 20px;
    background-color: ${(props) => props.background};
`;

export const NameTag = styled.div<NameTagI>`
    width: 100%;
    color: black;
    font-size: 22px;
    font-weight: 400;
    height: 100%;
    background-color: rgb(${(props: any) => props.backgroundColor});
    display: flex;
    align-items: center;
    border-radius: 0 0 8px 8px;
    border: 1px solid rgb(${(props: any) => props.backgroundColor});
    transform: translateX(-1px);
    justify-content: center;
`;

interface TagI {
    backgroundColor: string;
}

export const Tags = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    gap: 30px;
    position: relative;
    bottom: 7px;
`;

export const Tag = styled.div<TagI>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    height: 20px;
    background-color: ${(props: any) => props.backgroundColor};
    font-size: 14px;
    border-radius: 15px;
    gap: 20px;
    padding: 3px 6px 3px 6px;
    color: black;
    font-weight: 500;
    font-size: 13px;
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
    color: rgb(189, 24, 8);

    .arrowBack {
        float: left;
        &:hover {
            cursor: pointer;
            color: rgb(153, 20, 8);
        }
    }
`;
export const PokeIndex = styled.div<PokedexI>`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    transform: translate(-8px, 3px);
    font-size: 18px;
    color: rgb(${(props: any) => props.backgroundColor});
    font-weight: 400;
`;
export const InfoContainerExpanded = styled.div<CardContainerI>`
    width: 100%;
    background-color: rgba(${(props: any) => props.backgroundColor}, 0.2);
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
    color: #000000;
    width: fit-content;
    background-color: rgb(${(props: any) => props.backgroundColor});
    display: grid;
    grid-template-rows: 1fr;
    justify-content: center;
    border-radius: 6px;
    padding: 10px;
`;

export const StatsText = styled.div`
    font-size: 1.2rem;
    color: #000000;
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
    background-color: rgb(${(props: any) => props.backgroundColor});
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
    gap: 5px;

    .star {
        color: white;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const Favorited = styled.div`
    color: black;
    font-weight: 500;
`;
