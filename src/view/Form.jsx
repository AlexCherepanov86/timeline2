import React, { Component } from 'react';
import { Formik } from 'formik';
import {connect} from "react-redux";
import { useFormik } from 'formik';

//class ModalForm extends Component {

    //render() {
        const SignupForm = () => {
            //const {user} = this.props.user;
            //const name = this.props.user.name;
            const formik = useFormik({
                initialValues: {
                    firstName: {},
                    lastName: '',
                    email: '',
                },
                //validate,
                onSubmit: values => {
                    alert(JSON.stringify(values, null, 2));
                },
            });

            return (

                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                    <button type="submit">Submit</button>
                </form>
            )

    }

function mapStateToProps(state) {
    const {user} = state;
    return {
        user
    }
}

const connectedModalForm = connect(mapStateToProps)(SignupForm);
export default connectedModalForm;
//export default SignupForm;
