import {ErrorMessage, Field, Form, Formik} from "formik";
import {useState} from "react";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function FormStudent() {
    const [student, setStudent] = useState({})
    const [check, setCheck] = useState(true)
    const navigate = useNavigate();

    const validation = Yup.object().shape({
        id: Yup.string().matches(/[0-9]/,"Invalid"),
        name: Yup.string().min(6, "Too short"),
        age: Yup.number().min(18, "Too young").max(60, "Too old").required("Required!")
    })
    return (
        <>
            <h1 id={'title'}>Form create</h1>
            <Formik
                initialValues={student}
                onSubmit={(values) => {
                    if (check) {
                        createStudent(values)
                    }
                }}
                enableReinitialize={true}
                // validationSchema={validation}
            >
                <Form>
                    <table>
                        <tr hidden={!check}>
                            <td><label htmlFor="id">Id</label></td>
                            <td><Field  name={'id'} id={'id'}></Field>
                                <ErrorMessage name={'id'}/>
                                <br/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="name">Name</label></td>
                            <td><Field name={'name'}></Field>
                                <ErrorMessage name={'name'}/>
                                <br/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="age">Age</label></td>
                            <td><Field name={'age'}></Field>
                                <ErrorMessage name={'age'}/>
                                <br/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="gender">Gender</label></td>
                            <td><Field name={'gender'}></Field><br/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button id={'btn'} type={'submit'}>Create</button>
                            </td>
                        </tr>
                    </table>
                </Form>
            </Formik>
        </>
    )

    function createStudent(data) {
        axios.post("http://localhost:8080/students", data).then(() => {
            navigate("/")
        })
    }
}
