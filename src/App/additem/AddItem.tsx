import { FC } from 'react';

import { Button } from '../../components';

import { AddItemStyled, TextareaStyled } from './AddItem.styled';
import { useAddItem, OnAdd } from './useAddItem';

interface Props {
    onAdd?: OnAdd,
}

export const AddItem: FC<Props> = ({ onAdd }) => {
    const { label, handleClick, setLabel } = useAddItem({ onAdd });

    return (
        <AddItemStyled>
            <TextareaStyled rows={4} value={label} onChange={setLabel} />
            <Button onClick={handleClick}>Add</Button>
        </AddItemStyled>
    );
};
