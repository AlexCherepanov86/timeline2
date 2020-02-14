import React, { Component } from 'react';
import { Formik } from 'formik';
import {connect} from "react-redux";

class ModalForm extends Component {


//const modalForm = () => (
    render(){
        const {user} = this.props.user;

        return(
            <Formik
                initialValues={{
                     name: "{user:name}",
                    // name: {name},
                    // surname: {surname},
                    // time: {time},
                    // position: {position},
                }}
                // validate={values => {
                //     const errors = {};
                //     if (!values.email) {
                //         errors.email = 'Required';
                //     } else if (
                //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                //     ) {
                //         errors.email = 'Invalid email address';
                //     }
                //     return errors;
                // }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={user.name}
                            placeholder="Имя"
                        />
                        {errors.email && touched.email && errors.email}
                        <input
                            type="text"
                            name="surname"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={user.surname}
                            placeholder="Фамилия"
                        />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        )
    }

//);

}

function mapStateToProps(state) {
    const {user} = state;
    return {
        user
    }
}

// const mapStateToProps = state => {
//     return {
//         user: state.user
//     }
// }

const connectedModalForm = connect(mapStateToProps)(ModalForm);
export default connectedModalForm;
