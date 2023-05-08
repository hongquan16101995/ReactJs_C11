import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Nav from "../student/Nav";
import {ErrorMessage, Field, Form, Formik} from "formik";

//upload file
import {storage} from '../FirebaseConfig';
import {ref, getDownloadURL, uploadBytesResumable} from "firebase/storage";

export default function Seller() {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [test, setTest] = useState(true)
    const navigate = useNavigate();
    const [check, setCheck] = useState(localStorage.getItem("username"))
    const [create, setCreate] = useState(false)

    //upload file
    const [imgUrl, setImgUrl] = useState('');
    const [progressPercent, setProgressPercent] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:8080/seller").then(response => {
            setProducts(response.data)
        })
    }, [test])

    return (
        <>
            <Nav name={"Login"}/>
            {check && <><h1>List product</h1>
                <button>Create new product</button>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                    {products.map((item) => {
                        return (
                            <>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td><img style={{width: '100px', height: '100px'}}
                                             src={item.imagePath} alt=""/></td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <button onClick={() => updateP(item.id)}>Update</button>
                                    </td>
                                    <td>
                                        <button onClick={() => deleteP(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </table>
                <button onClick={logout}>Logout</button>
            </>
            }

            <>
                <h1>Form create</h1>
                <Formik
                    initialValues={product}
                    onSubmit={(values) => {
                        createP(values)
                    }}
                    enableReinitialize={true}
                    // validationSchema={validation}
                >
                    <Form>
                        <table>
                            <tr>
                                <td><label htmlFor="name">Name</label></td>
                                <td><Field name={'name'}></Field>
                                    <ErrorMessage name={'name'}/>
                                    <br/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="image">Image</label>
                                <br/>
                                    <img style={{width: '100px', height: '100px'}} src={imgUrl} alt=""/></td>
                                <td><input type="file" onChange={(e) => {
                                    uploadFile(e)
                                }}/></td>
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
        </>
    )

    function uploadFile(e) {
        const file = e.target.files[0]

        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed",
            (snapshot) => {
                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgressPercent(progress);
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgUrl(downloadURL)
                });
            }
        );
    }

    function createP(data) {
        data.imagePath = imgUrl
        axios.post(`http://localhost:8080/seller`, data).then(() => {
                setTest(!test)
            }
        )
    }


    function deleteP(index) {
        axios.delete(`http://localhost:8080/seller/${index}`).then(() => {
                setTest(!test)
            }
        )
    }

    function updateP(index) {
        axios.get(`http://localhost:8080/seller/${index}`).then(response => {
                setProduct(response.data)
                setCreate(true)
            }
        )
    }

    function logout() {
        localStorage.clear()
        setTest(!test)
        navigate("/home")
    }
}
