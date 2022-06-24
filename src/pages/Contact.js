import React, { useState, useEffect } from 'react'

const Contact = () => {
    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        phone: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^(([^<>()[\].,;:\s@]+([^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i;
        const mregex = /^[9][8][0-9]{8}$/;


        if (!values.username) {
            errors.username = "Username is required!";
        } else if (values.username.length < 5) {
            errors.username = "Username need more than 5 letters";
        }
        if (!values.email) {
            errors.email = "email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "Please entered valid email";
        }
        if (!values.phone) {
            errors.phone = "phone is required!";
        } else if (!mregex.test(values.phone)) {
            errors.phone = "Enter valid phone number";
        }
        if (!values.message) {
            errors.message = "Message is required!";
        }
        return errors;
    }
    return (
        <>
            <div>
                <p className='text-6xl pt-[5%]'>CONTACT US</p>
            </div>
            <div className='px-[3%]'>
                <p className='text-lg tracking-widest p-[2%]'>Send us a message and we’ll get back to you as soon as possible. You can also reach  as soon as possible us <br />at info@franciebrooklyn.com  or by calling (718) 218-7572 after 2PM, Tuesday - Saturday. Looking forward <br /> to hearing from you!  We regret we are unable to make  reservations through this portal.  Please <br />use the RESERVATIONS link on our website.</p>
                <p className='italic text-lg'>No soliciting please!</p>
            </div>
            <form className='inline-grid space-y-6 space-x-5 mt-[6%] w-5/6 pb-[7%] ' onSubmit={submitHandler}>
                <div></div>
                <div>
                    <input className='contact' name='username' placeholder='Name...' value={formValues.username} autoComplete='off' onChange={changeHandler} type='text' />
                    <p className='error'>{formErrors.username}</p>
                </div>
                <div>
                    <input className='contact' name='email' placeholder='Email' value={formValues.email} autoComplete='off' onChange={changeHandler} type='text' />
                    <p className='error'>{formErrors.email}</p>
                </div>

                <div>
                    <input className='contact' name='phone' placeholder='Phone Number...' value={formValues.phone} autoComplete='off' onChange={changeHandler} type='number' />
                    <p className='error'>{formErrors.phone}</p>
                </div>

                <div>
                    <textarea className='contact resize' name='message' placeholder='Message...' value={formValues.message} autoComplete='off' onChange={changeHandler}></textarea>
                    <p className='error'>{formErrors.message}</p>
                </div>

                <div className='overflow-hidden'>
                    <button className='button' type='submit'>SEND</button>
                </div>
            </form>
        </>
    )
}

export default Contact