import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState ] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    //define handle change to sync the component formstate with user input
    function handleChange(e) {
        //use set form state to update the form state value for the name property
        //use the spread operator to retain the other key value pairs in this object 
        //the state is continuously updated with each keystroke
        //use name property of target to refer to name attribute in the form element
        //the attribute value matches the property names and allows us to use [] to create dynamic property names  
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return(
    <section>
        <h1>Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input type="text" defaultValue={name} onChange={handleChange} name="name" />
            </div>
            <div>
                <label htmlFor='email'>Email address:</label>
                <input type="email" defaultValue={email} onChange={handleChange} name="email"/>
            </div>
            <div>
                <label htmlFor='message'>Message:</label>
                <textarea name='message' defaultValue={message}  onChange={handleChange}rows='5' />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </section>
    );
}

export default ContactForm;
