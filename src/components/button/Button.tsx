import { FC, PropsWithChildren } from 'react';

import { ButtonStyled } from './Button.styled';

interface Props {
    onClick?: () => void,
}

export const Button: FC<PropsWithChildren<Props>> = ({ children, onClick }) => (
    <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
);
