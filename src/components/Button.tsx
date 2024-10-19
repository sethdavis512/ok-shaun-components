import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
    color: blue;
    padding: 5px;
    font-size: 20px;
`;

export default function Button({
    children,
    ...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
    return <StyledButton {...rest}>{children}</StyledButton>;
}
