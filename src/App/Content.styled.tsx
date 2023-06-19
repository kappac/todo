import styled from 'styled-components';

export const ContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    margin: auto;
    padding: 32px;
    background-color: ${({ theme }) => theme.colors.primary.background};
    border-radius: 16px;
`;

export const TitleStyled = styled.h6`
    margin-bottom: 16px;
`;
