import {useEffect, useState} from "react";
import {Student} from "./Student";
import {Link} from "react-router-dom";
import Nav from "./Nav";

export default function HomeStudent() {
    const [students, setStudents] = useState([
        new Student(1, "Sơn", 20, "Male"),
        new Student(2, "Đoàn", 22, "Male"),
        new Student(3, "Lực", 25, "Male"),
    ])

    const [check, setCheck] = useState(true)
    const [demo, setDemo] = useState(1)

    useEffect(() => {
        createStudent()
        setDemo(demo + 1)
    },[check])

    return (
        <>
            <h1>List Student</h1>
            <button onClick={() => {
                setCheck(!check)
                console.log(check)
            }}>Demo</button>
            <h1>{demo}</h1>
            <Link to={"/create"}>Create new student</Link>
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
                                    {/*<button onClick={() => updateStudent(item.id)}>Update</button>*/}
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

    function createStudent() {
        let student = JSON.parse(localStorage.getItem("student"))
        if (student != null) {
            students.push(student)
            setStudents([...students])
        }
    }

    function deleteStudent(index) {
        let student = getStudentById(index)
        let i = students.indexOf(student)
        students.splice(i, 1)
        setStudents([...students])
    }

    // function updateStudent(index) {
    //     let student = getStudentById(index)
    //     setStudent(student)
    //     setCheck(false)
    //     document.getElementById("title").innerHTML = "Form update"
    //     document.getElementById("btn").innerHTML = "Update"
    // }

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
