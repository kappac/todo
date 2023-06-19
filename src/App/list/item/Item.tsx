import { FC } from 'react';

import { Checkbox } from '../../../components';

import { ItemStyled, LabelStyled, CloseStyled } from './Item.styled';

interface Props {
    checked?: boolean,
    label?: string,
    onChange?: () => void,
    onDelete?: () => void,
}

export const Item: FC<Props> = ({ checked, label, onChange, onDelete }) => (
    <ItemStyled>
        <Checkbox checked={checked} onChange={onChange} />
        <LabelStyled linethrough={'' + checked}>{label}</LabelStyled>
        <CloseStyled onClick={onDelete}>x</CloseStyled>
    </ItemStyled>
);
