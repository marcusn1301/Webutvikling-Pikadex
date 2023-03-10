import styled from "styled-components";

//Grid for the pokemon cards
export const CardGrid = styled.div`
    position: absolute;
    margin-left: 5%;
    z-index: -1;
    top: 240px;
    width: 90%;
    min-height: 90vh;
    height: fit-content;
    display: grid;
    grid-row-gap: 50px;
    justify-items: center;
    padding-bottom: 80px;

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1fr);
    }
    @media screen and (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (min-width: 1600px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: 1000px) {
        width: 95%;
        margin-left: 2.5%;
    }
`;

export const UpButton = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10px;
    right: 25px;
    width: 50px;
    height: 50px;
    background-color: rgba(120, 0, 0, 0.8);
    border-radius: 50%;
    border: 1px solid #e4b3b3;

    &:hover {
        cursor: pointer;
        background-color: rgba(120, 0, 0, 1);
    }
`;

export const FooterEdge = styled.img`
    position: fixed;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%);
`;

export const PageCounter = styled.div`
    position: absolute;
    top: 205px;
    left: 50%;
    font-size: 16px;
    white-space: nowrap;
    display: flex;
    gap: 15px;
    transform: translate(-50%);
    align-items: center;
    color: rgb(255, 255, 255);
    z-index: -99999999999999999999;

    div {
        font-weight: 600;
        font-size: 20px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            cursor: pointer;
            color: rgb(200, 200, 200);
        }
    }
`;

export const PageCounterBottom = styled.div`
    position: absolute;
    bottom: 0px;
    left: 50%;
    font-size: 16px;
    white-space: nowrap;
    display: flex;
    gap: 15px;
    transform: translate(-50%);
    align-items: center;
    color: rgb(255, 255, 255);
    z-index: -99999999999999999999;
    padding-bottom: 35px;
    div {
        font-weight: 600;
        font-size: 20px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            cursor: pointer;
            color: rgb(200, 200, 200);
        }
    }
`;

export const SadPika = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 10vh;
    left: 50%;
    width: 15vw;
    height: 15vh;
    transform: translate(-50%, 50%);
    justify-content: center;
    align-items: center;
    row-gap: 20px;

    div {
        font-size: 1.2rem;
        white-space: nowrap;
    }
`;
