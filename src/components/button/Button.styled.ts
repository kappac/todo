import styled from 'styled-components';

export const ButtonStyled = styled.button`
    display: flex;
    flex-direction: row;
    padding: 12px 26px;
    background-color: ${({ theme }) => theme.colors.primary.basic};
    color: ${({ theme }) => theme.colors.primary.on};
    font-size: 14px;
    text-transform: uppercase;
    border: none;
    border-radius: ${({ theme }) => theme.border.radius};;
    box-shadow: ${({ theme }) => `${theme.colors.primary.basic} 0px 4px 9px -4px`};
    cursor: pointer;

    &:hover {
        filter: opacity(.9);
    }
`;
