import {Field, Form, Formik} from "formik";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [account, setAccount] = useState({})
    const navigate = useNavigate();

    return (
        <>
            <h1>Form login</h1>
            <Formik
                initialValues={account}
                onSubmit={(values) => {
                    login(values)
                }}
            >
                <Form>
                    <table>
                        <tr>
                            <td><label htmlFor="acc">Account</label></td>
                            <td><Field name={'acc'} id={'acc'}></Field></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="pass">Password</label></td>
                            <td><Field name={'pass'} id={'pass'}></Field></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type={'submit'}>Login</button>
                            </td>
                        </tr>
                    </table>
                </Form>
            </Formik>
        </>
    )

    function login(data) {
        axios.post("http://localhost:8080/auth", data).then(response => {
                localStorage.setItem("username", response.data.name)
                navigate("/home")
            }
        )
    }
}
