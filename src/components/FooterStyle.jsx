import styled from 'styled-components';

export const FooterContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:40px 0;
    border-top: 1px solid rgb(25, 25, 25);
    width: 100%;
    position: relative;
    z-index: 100;

    @media (max-width: 769px){
        padding: 20px 20px;
        padding-bottom: 30px;
    }

`;

export const FooterContent = styled.div`

`;

export const FooterLinkContainer = styled.div`
    width: 500px;

    @media (max-width: 768px){
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    color: gray;
    font-size: 17px;
`;

export const FooterLinkContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 35px;

    @media (max-width: 768px){
        margin-top: 26px;
    }
`;

export const FooterLink = styled.a`
    color: gray;
    font-size: 14px;
    width: 110px;
    margin-bottom: 21px;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }

    @media (max-width: 768px){
        margin-bottom: 16px;
    }
`;

export const FooterDescContainer = styled.div`
    margin-top: 30px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

export const FooterDescRights = styled.h2`
    color: white;
    font-size:14px;
    text-align: center;
`