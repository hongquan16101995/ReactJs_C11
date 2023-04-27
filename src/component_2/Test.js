import React, {useState} from "react";

export default function Test() {
    const [name, setName] = useState("C1122H1");
    const [student, setStudent] = useState({id:1, name: "Sơn", age: 20});

    return (
        <>
            <h1>{name}</h1>
            <h1>{student.id}</h1>
            <h1>{student.name}</h1>
            <h1>{student.age}</h1>
            <button onClick={change}>Change</button>
            <button onClick={change1}>Change1</button>
            <button onClick={change1}>Change1</button>
        </>
    )

    function change() {
        setName("CodeGym")
    }

    function change1(){
        student.name = "Lực"
        setStudent({...student})
        console.log(student)
    }
}
