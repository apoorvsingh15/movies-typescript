import { Input, Space } from 'antd';
import React from 'react';
import '../css/SearchBar.css';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const SearchBar: React.FC = () => (
    <Space className='search-container' direction="vertical" >
        <Search placeholder="Search a movie..." onSearch={onSearch} style={{ width: 300 }} defaultValue="Batman" />
    </Space>
);

export default SearchBar;