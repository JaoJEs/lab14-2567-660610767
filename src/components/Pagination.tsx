
import { Pagination, Group } from '@mantine/core';//+


export default function Pagination() {
    return (
        <Group justify="center" mt="sm" >
            <Pagination total={20} color="orange"/>
        </Group>
    );
}