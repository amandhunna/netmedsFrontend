import React from 'react'
import { InputGroup, FormControl } from "react-bootstrap";

export default function Search(props) {
    const { search, setSearch } = props;
    return (
        <InputGroup className="my-3 mx-5">
            <FormControl
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={e => {
                    e.preventDefault();
                    const { value } = e.target;
                    setSearch(value);
                }}
            />
        </InputGroup>
    )
}
