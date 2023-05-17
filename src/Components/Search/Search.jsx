import style from "./style.module.scss"
import { Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Search() {

    return (
        <>
            <Input
                icon={<IconSearch />}
                placeholder="Your email"
            />
        </>
    )
}

export default Search