import {
    createContext,
    useCallback,
    useContext,
    useState,
    FC,
    PropsWithChildren,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Item {
    id: string,
    checked: boolean,
    label: string,
}

interface Add {
    (label: string): void,
}

interface UpdateState {
    (id: string, state: boolean): void,
}

interface Remove {
    (id: string): void;
}

interface UseTodoContext {
    items: ReadonlyArray<Item>,
    add: Add,
    remove: Remove,
    updateState: UpdateState,
}

interface UseTodo {
    (): UseTodoContext,
}

const context = createContext<UseTodoContext | null>(null);

export const useTodo: UseTodo = () => {
    const ctx = useContext(context);

    if (!ctx) {
        throw new Error('Could not be used outside of Todo context');
    }

    return ctx;
};

const newItem = (label: string, checked: boolean = false): Item => {
    const id = uuidv4();

    return { id, label, checked };
};
const getDefaultItems = (): Record<string, Item> => {
    const labels = [
        { label: 'Cras justo odio' },
        { label: 'Dapibus ac facilisis in', checked: true },
        { label: 'Morbi leo risus' },
    ];

    return labels.reduce((acc, { label, checked }) => {
        const item = newItem(label, checked);

        return {
            ...acc,
            [item.id]: item,
        }
    }, {});
}

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
    const [map, setMap] = useState<Record<string, Item>>(getDefaultItems());
    const add = useCallback<Add>(
        label => setMap(prev => {
            const nextItem = newItem(label);
            const next = {
                ...prev,
                [nextItem.id]: nextItem,
            };

            return next;
        }),
        [],
    );
    const remove = useCallback<Remove>(
        id => setMap(prev => {
            const next = { ...prev };

            delete next[id];

            return next;
        }),
        [],
    );
    const updateState = useCallback<UpdateState>(
        (id, state) => setMap(prev => {
            const next = { ...prev };

            next[id].checked = state;

            return next;
        }),
        [],
    );

    return (
        <context.Provider value={{
            items: Object.values(map),
            add,
            remove,
            updateState,
        }}>
            {children}
        </context.Provider>
    );
};
