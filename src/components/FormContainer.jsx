import { useState } from "react"

const FormContainer = ({getName}) => {

    const [name,setName] = useState("");
    
    const sendValue = (e) => {
        e.preventDefault();
        getName(name)
    }

    return (
        <div>
            <form onSubmit={sendValue}>
                <label htmlFor="firstName">
                    <input type="text" id="firstName" onChange={(e)=>setName(e.target.value)} />
                    <button>Submit</button>
                </label>
            </form>
        </div>
    )
}

export default FormContainer
