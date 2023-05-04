import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default function HomeStudent() {
    const [students, setStudents] = useState([])

    const [check, setCheck] = useState(true)
    const [test, setTest] = useState(true)
    const [demo, setDemo] = useState(1)

    useEffect(() => {
        axios.get("http://localhost:8080/students").then(response => {
            setStudents(response.data)
        }).catch((err) => {
            console.log("Bye bye")
            console.log(err.message)
        })
    }, [check, test])

    return (
        <>
            <h1>List Student</h1>
            <button onClick={() => {
                setCheck(!check)
                console.log(check)
            }}>Demo
            </button>
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
        axios.delete(`http://localhost:8080/students/${student.id}`).then(() => {
                setTest(!test)
            }
        )
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
