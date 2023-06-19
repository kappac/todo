import styled from 'styled-components';

export const ItemStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    padding: 8px 24px;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(224, 224, 224);
`;

interface LabelStyledProps {
    linethrough?: string,
}

export const LabelStyled = styled.span<LabelStyledProps>`
    flex: 1;
    font-size: 16px;
    text-decoration: ${({ linethrough }) => linethrough === 'true' ? 'line-through' : 'none'};
`;

export const CloseStyled = styled.div`
    color: ${({ theme }) => theme.colors.primary.basic};
    font-weight: 900;
    cursor: pointer;
`;
