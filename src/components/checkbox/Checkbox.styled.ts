import styled from 'styled-components';

export const CheckboxStyled = styled.input`
    position: relative;
    appearance: none;
    box-sizing: border-box;
    height: 18px;
    width: 18px;
    margin: 0;
    border: 2px solid rgba(0, 0, 0, .25);
    border-radius: ${({ theme }) => theme.border.radius};

    &:checked {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: '';
        background-color: ${({ theme }) => theme.colors.primary.basic};
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3 6-6'/%3E%3C/svg%3E");
        border-color: ${({ theme }) => theme.colors.primary.basic};
    }
`;
