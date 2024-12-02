import { Button } from '~/components/Button';
// import { Card } from "~/components/Card";
import { Box, Flex } from '~/components/Box';
import { Text } from '~/components/Text';

export default function App() {
  return (
    <>
      <h1>OK Shaun Componentz</h1>
      <Flex>
        {Array(3)
          .fill(null)
          .map(() => (
            <Box key={Math.random()}>
              <Button>Click this!</Button>
            </Box>
          ))}
      </Flex>
      <Text level={24} font="mono">
        beep
      </Text>
    </>
  );
}
