import {useState} from "react";
import {Student} from "./Student";
import {Field, Form, Formik} from "formik";
//cách dùng, import và xử lý với Yup
//cách dùng, import và xử lý với Axios

export default function HomeStudent() {
    const [students, setStudents] = useState([
        new Student(1, "Sơn", 20, "Male"),
        new Student(2, "Đoàn", 22, "Male"),
        new Student(3, "Lực", 25, "Male"),
    ])

    const [student, setStudent] = useState({})
    const [check, setCheck] = useState(true)

    return (
        <>
            <h1 id={'title'}>Form create</h1>
            <Formik
                initialValues={student}
                onSubmit={(values) => {
                    if (check) {
                        createStudent(values)
                    } else {
                        update(values)
                    }
                }}
                enableReinitialize={true}>
                <Form>
                    <table>
                        <tr hidden={!check}>
                            <td><label htmlFor="id">Id</label></td>
                            <td><Field  name={'id'} id={'id'}></Field><br/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="name">Name</label></td>
                            <td><Field name={'name'}></Field><br/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="age">Age</label></td>
                            <td><Field name={'age'}></Field><br/></td>
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
            <h1>List Student</h1>
            <table style={{border: 1}}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th colSpan={2}>Action</th>
                </tr>
                {students.map((item) => {
                    return (
                        <>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.gender}</td>
                                <td>
                                    <button onClick={() => updateStudent(item.id)}>Update</button>
                                </td>
                                <td>
                                    <button onClick={() => deleteStudent(item.id)}>Delete</button>
                                </td>
                            </tr>
                        </>
                    )
                })}
            </table>
        </>
    )

    function createStudent(data) {
        students.push(data)
        setStudents([...students])
    }

    function deleteStudent(index) {
        let student = getStudentById(index)
        let i = students.indexOf(student)
        students.splice(i, 1)
        setStudents([...students])
    }

    function updateStudent(index) {
        let student = getStudentById(index)
        setStudent(student)
        setCheck(false)
        document.getElementById("title").innerHTML = "Form update"
        document.getElementById("btn").innerHTML = "Update"
    }

    function update(value) {
        let student = getStudentById(value.id)
        let i = students.indexOf(student)
        students[i] = value
        setStudents([...students])
    }

    function getStudentById(id) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].id === id) {
                return students[i]
            }
        }
    }
}
