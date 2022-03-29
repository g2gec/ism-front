import React, {useState} from 'react'

export const RegisterAgeChildren = ({setAgeChildren, handleCountBtns, childrenRegister, setChildrenRegister}) => {

    const [formValues, setFormValues] = useState({
        age: ''
    })
    // const [show, setShow] = useState(false)

    const handleForm = (e) => {
        let data = {
            type: "CH",
            age: formValues.age
        }
        let childrensAge = childrenRegister
        childrensAge.push(data)
        setChildrenRegister(childrensAge)

        console.log('childrenRegister', childrenRegister)
        e.preventDefault()
        setAgeChildren(false)
    }

    const handleCancel = () => {
        handleCountBtns('substrac', 'children')
        setAgeChildren(false)
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value })
    }

    return (
        <div className="registerAgeChildren">
            <form onSubmit={handleForm}>
                <div className="">
                    <input onChange={handleInputChange} value={formValues.age} className="w-25 text-center" name="age" required type="number" placeholder="Ingresa la edad del niño"/>
                </div>
                <div className="registerAgeChildren__btns mt-3">
                    <span onClick={handleCancel} className="mr-4">Cancelar</span>
                    <button className="btn__gold">Registrar</button>
                </div>
            </form>
        </div>
    )
}
