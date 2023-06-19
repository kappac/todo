import { useCallback, useState, ChangeEventHandler } from "react";

export interface OnAdd {
    (label: string): void,
}

interface UseAddItemParams {
    onAdd?: OnAdd,
}

type SetLabel = ChangeEventHandler<HTMLTextAreaElement>;

interface HandleClick {
    (): void,
}

interface UseAddItemReturn {
    label: string,
    handleClick: HandleClick,
    setLabel: SetLabel,
}

interface UseAddItem {
    (params: UseAddItemParams): UseAddItemReturn,
}

export const useAddItem: UseAddItem = ({ onAdd }) => {
    const [label, _setLabel] = useState('');
    const setLabel = useCallback<SetLabel>(
        ({ target: { value } }) => {
            _setLabel(value);
        },
        [onAdd],
    );
    const handleClick = useCallback(
        () => onAdd?.(label),
        [label],
    );

    return { label, handleClick, setLabel };
};
