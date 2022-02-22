import React from 'react';
import { Formik, Form, Field } from "formik";
const Demo = () => {


    return (
        <div>
            <h1>Đăng kí thông tin</h1>
            <Formik
                initialValues={{
                    yourName : '',
                    yourPhone : "",
                    yourAddress : ''
                }}

                onSubmit={
                    async (values) => {
                        if(!Number(values.yourPhone)) {
                            alert("So dien thoai phai la so !!!");
                        }else {
                            alert(JSON.stringify(values,null,5));
                        }
                    }
                }
            >
                <Form>
                    <label htmlFor='yourName'>Name : </label>
                    <Field id="yourName" name="yourName" placeholder="nhap ten..." text="text" />
                    <br/>
                    <label htmlFor='yourPhone'>Phone : </label>
                    <Field id="yourPhone" name="yourPhone" placeholder="nhap sdt..." text="text" />
                    <br/>
                    <label htmlFor='yourAddress'>Address : </label>
                    <Field id="yourAddress" name="yourAddress" placeholder="nhap dia chi..." text="text" />
                    <br/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Demo;
