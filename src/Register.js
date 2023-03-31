import react, { useState } from 'react'

export const Register = (props) => {
    const [fio, setFio] = useState('');
    const [phone, setPhone] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
    <div className='auth-form-container'>
        <h2>Register</h2>
        <form classname="register-form" onSubmit={handleSubmit}>
            <label> ФИО: </label>
            <input value={fio} type="text" id="fio"/>
            <label> Номер телефона: </label>
            <input value={phone} type="number" id="phone"/>
            <label> Год рождения: </label>
            <input value={year} type="number" id="year"/>
            <button type="button" onClick="register()">Register here</button>
        </form>
        <button classname="link-btn" onClick={() => props.onFormSwitch('register')}>Don`t have an account? Register now</button> 
    </div>
    )      
        
}

