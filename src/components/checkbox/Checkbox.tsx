import { FC } from 'react';

import { CheckboxStyled } from './Checkbox.styled';

interface Props {
    checked?: boolean,
    onChange?: () => void,
}

const DEFAULT_HANDLE_CHANGE = () => void 0;

export const Checkbox: FC<Props> = ({ checked, onChange = DEFAULT_HANDLE_CHANGE }) => (
    <CheckboxStyled type="checkbox" checked={checked} onChange={onChange} />
);
