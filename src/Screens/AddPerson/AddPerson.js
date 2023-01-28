import { useState } from "react";

const AddPerson = () => {

    const users = [
        {
            name: "Ilnur",
            lastname: "Umirbayev",
            phoneNumber: "+998910011010"
        },
        {
            name: "Zarnigor",
            lastname: "Ochilova",
            phoneNumber: "+998910017070"
        },
        {
            name: "Asadbek",
            lastname: "Bo'riyev",
            phoneNumber: "+998910015050"
        },
    ]


const [nameValue, setNameValue] = useState("");
const [lastNameValue, setLastNameValue] = useState("");
const [phoneValue, setPhoneValue] = useState("");

const [posts, setPosts] = useState(users);


const nameChange = (evt) => {
    setNameValue(evt.target.value);
}

const lastNameChange = (evt) => {
    setLastNameValue(evt.target.value)
}

const phoneChange = (evt) => {
    setPhoneValue(evt.target.value);
}

const handleFormSubmit = (evt) => {
    evt.preventDefault();

    setPosts(
        [
            ...posts,
            {
                name: nameValue,
                lastname: lastNameValue,
                phoneNumber: phoneValue
            }
        ]
    )
   setNameValue(evt.target.value = "");
   setLastNameValue(evt.target.value = "");
   setPhoneValue(evt.target.value = "");
   
}


    return (
        <div className="container">

            <div>
                <form onSubmit={handleFormSubmit}>
                    <input type="text" name="name" onChange={nameChange} value={nameValue} placeholder="Type your name..." />
                    <input type="text" onChange={lastNameChange} value={lastNameValue} placeholder="Type your lastname..." />
                    <input type="number" onChange={phoneChange} value={phoneValue} placeholder="Phone number" />
                    <button>Add person</button>
                </form>
            </div>

            <ul>
                {
                    posts.map((user, i) => {
                        return (
                            <li key={i}>
                                <h2>{user.name} {user.lastname}</h2>
                                <p>{user.phoneNumber}</p>
                            </li>
                        )
                    })
                }
            </ul>
            
            
        </div>
    )
}

export default AddPerson;