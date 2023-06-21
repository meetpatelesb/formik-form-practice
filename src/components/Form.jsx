import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Forms = () => {
    const initialValues = {
        name: "",
        email: "",
        channel: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required!!!"),
        email: Yup.string().email("Invalid email format").required("Required!!!"),
        channel: Yup.string().required("Required!!!"),
    });

    const onSubmit = (values) => {
        console.log("form datas:", values);
    };
    // let errors = {};

    // const validate = (values) => {

    //     if (!values.name) {
    //         errors.name = "Required!!";
    //     }
    //     if (!values.email) {
    //         errors.email = "Required!!";
    //     }
    //     if (!values.channel) {
    //         errors.channel = "Required!!";
    //     }
    //     return errors;
    // };



    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                < Form  >
                    <label htmlFor="name">name:</label>
                    <br />
                    <Field
                        type="text"
                        id="name"
                        name="name"


                    />
                    <br />
                    <ErrorMessage name="name" />
                    <br />
                    <label htmlFor="email">email:</label>
                    <br />
                    <Field
                        type="email"
                        id="email"
                        name="email"
                    />
                    <br />
                    <ErrorMessage name="email" />
                    <br />
                    <label htmlFor="channel">channel:</label>
                    <br />
                    <Field
                        type="text"
                        id="channel"
                        name="channel"
                    />
                    <br />
                    <ErrorMessage name="channel" />
                    <br />

                    <button type="submit">submit</button>
                </Form >
            </Formik>
        </>
    );
};

export default Forms;
