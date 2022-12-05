import React from "react";
import { Formik, Form, Field, FieldArray, useFormik } from "formik";
// import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/formFields.module.css'
function YoutubeForm() {

    const courseDetails = useFormik({
        initialValues: {
            // uniqueId: 'unique_id',
            course_id: 'course_id',
            semester: 'semester',
            section: 'section',
            questions: {
                data:
                    [
                        { question: '', marks: '', co: '' },
                    ]
            },
            submit: 'Submit'
        },
    })
    return (
        <Formik
            initialValues={
                {
                    ...courseDetails.values,
                }}
            onSubmit={values =>
                console.log("Form values", values)
            }>
            <Form >
                <div className={styles.formItem}>
                    <label htmlFor="course_id">course_id : </label>
                    <Field type="text" id="course_id" name="course_id" placeholder="Enter your course_id"
                    />
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="semester">semester : </label>
                    <Field type="text" id="semester" name="semester" placeholder="Enter your semester"
                    />
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="section">section : </label>
                    <Field type="text" id="section" name="section" placeholder="Enter your section"
                    />
                </div>

                <FieldArray name="questions.data" >
                    {
                        (FieldArrayProps) => {
                            // console.log("FieldArrayProps", FieldArrayProps.form.values);
                            const { push, remove, form } = FieldArrayProps;
                            const { values } = form;
                            const { questions } = values;
                            return (
                                <div>
                                    {
                                        questions.data.map((phNumber, index) => (
                                            <div key={index}>
                                                <label htmlFor="Question"> Question : </label>
                                                <Field as="textarea" name={`questions.data[${index}].question`} />

                                                <label htmlFor="marks"> marks : </label>
                                                <Field name={`questions.data[${index}].marks`} />

                                                <label htmlFor="co"> co : </label>
                                                <Field name={`questions.data[${index}].co`} />
                                                {
                                                    index > 0 && <button type="button" onClick={() => remove(index)}>-</button>
                                                }
                                                <button type="button" onClick={() => push('')}>+</button>
                                                {/* <button type="button" onClick={() => remove('')}>-</button> */}
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    }
                </FieldArray>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}
export default YoutubeForm;