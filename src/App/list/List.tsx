import { FC } from 'react';

import { useTodo } from '../../contexts';

import { Item } from './item';
import { ListStyled } from './List.styled';

export const List: FC = () => {
    const { items, remove, updateState } = useTodo();

    return (
        <ListStyled>
            {items.map(({ id, ...item }) => (
                <Item
                    key={id}
                    {...item}
                    onChange={() => updateState(id, !item.checked)}
                    onDelete={() => remove(id)}
                />
            ))}
        </ListStyled>
    );
};
