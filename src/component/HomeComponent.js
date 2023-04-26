import ClassCom from "./ClassCom";
import {useState} from "react";

export default function HomeComponent() {

    //khái niệm Hook: useState(), useEffect()
    //customs Hook
    const [check, setCheck] = useState(true)

    return(
        <>

            {check && <ClassCom/>}
            <button onClick={changeCheck}>Check</button>
        </>
    )

    function changeCheck() {
        setCheck(false)
    }
}
