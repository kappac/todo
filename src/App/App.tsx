import { FC } from 'react';

import { useTodo } from '../contexts';

import { ContentStyled, TitleStyled } from './Content.styled';
import { AddItem } from './additem';
import { List } from './list';

export const App: FC = () => {
    const { add } = useTodo();

    return (
        <ContentStyled>
            <TitleStyled>Awesome Todo List</TitleStyled>
            <AddItem onAdd={add} />
            <List />
        </ContentStyled>
    );
};
