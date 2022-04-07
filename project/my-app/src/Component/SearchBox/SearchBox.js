import React, { memo, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import SearchStyle from "./SearchBox.module.css";

function SearchBox ({history}) {
    const [keyword, setKeyword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(keyword.trim()) {
            alert(keyword);
        }else{
            alert("Nhap lai");
        }

    }
    return (
        <Form action="/tim-kiem" onSubmit={handleSubmit} className={`${SearchStyle.header_search} ms-3`}>
            <InputGroup>
                <Form.Control
                    type='text'
                    placeholder='Ban tim gi ...'
                    name="search"
                    onChange={(e) => setKeyword(e.target.value)}
                ></Form.Control>
                <Button type='submit' variant='light'><i className='fa fa-search'></i></Button>
            </InputGroup>
            
        </Form>
    );
}

export default memo(SearchBox);
