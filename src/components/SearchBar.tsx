import { Input, Space } from 'antd';
import React, { useState } from 'react';
import '../css/SearchBar.css';

const { Search } = Input;

const SearchBar: any = ({ getMovieName }: any): any => {

    const [searchValue, setSearchValue] = useState<string>('Batman')

    const onValueChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    const onSearch = () => {
        console.log(getMovieName);
        getMovieName(searchValue);

    }

    return (
        <Space className='search-container' direction="vertical" >
            <Search
                placeholder="Search a movie..."
                onChange={onValueChange}
                onSearch={onSearch}
                style={{ width: 300 }}
                value={searchValue} />
        </Space >);
}

export default SearchBar;