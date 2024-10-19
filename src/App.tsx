import styled from '@emotion/styled';
import Button from './components/Button';
import Card from './components/Card';

const Flex = styled.div`
    display: flex;
    gap: 1rem;
`;

export default function App() {
    return (
        <>
            <h1>OK Shaun Componentz</h1>
            <Flex>
                {Array(3)
                    .fill(null)
                    .map(() => (
                        <Card>
                            <Button>Click this!</Button>
                        </Card>
                    ))}
            </Flex>
        </>
    );
}
