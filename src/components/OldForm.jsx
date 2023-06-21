import React from "react";
import { useFormik } from "formik";
// import { Formik, Form } from "formik";
import * as Yup from "yup";

const Form = () => {
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

    const Formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        // validate,
    });

    console.log("formik error", Formik.errors);
    console.log("formik touche", Formik.touched);
    // console.log("formik values", Formik.values);
    // managing form state
    // form validtions and error msg
    // handling form submissions
    return (
        <>
            {/* <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            > */}
            < form onSubmit={Formik.handleSubmit} >
                <label htmlFor="name">name:</label>
                <br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    {...Formik.getFieldProps("name")}
                // onChange={Formik.handleChange}
                // onBlur={Formik.handleBlur}
                // value={Formik.values.name}
                ></input>
                <br />
                {
                    Formik.touched.name && Formik.errors.name ? (
                        <div>{Formik.errors.name}</div>
                    ) : null
                }
                <label htmlFor="email">email:</label>
                <br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    // onChange={Formik.handleChange}
                    // onBlur={Formik.handleBlur}
                    // value={Formik.values.email}
                    {...Formik.getFieldProps("email")}
                ></input>
                <br />
                {
                    Formik.touched.email && Formik.errors.email ? (
                        <div>{Formik.errors.email}</div>
                    ) : null
                }
                <label htmlFor="channel">channel:</label>
                <br />
                <input
                    type="text"
                    id="channel"
                    name="channel"
                    {...Formik.getFieldProps("channel")}
                // onChange={Formik.handleChange}
                // onBlur={Formik.handleBlur}
                // value={Formik.values.channel}
                ></input>
                <br />
                <br />
                {
                    Formik.touched.channel && Formik.errors.channel ? (
                        <div>{Formik.errors.channel}</div>
                    ) : null
                }
                <button type="submit">submit</button>
            </form >
        </>
    );
};

export default Form;