import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.$brandGreen};

    min-height: 100vh;

    display: flex;
    grid-template-rows: min-content 1fr;
    justify-content: center;
    align-items: center;

    img {
        animation: fadeIn 3s ease-in ;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            width: 0%;
        }
        100% {
            opacity: 1;
            width: 100%;
        }
    }
`;
