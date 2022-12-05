import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
// import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/formFields.module.css'
function YoutubeForm() {

    // console.log("Form values", formik.values);
    return (
        <Formik
            initialValues={
                {
                    name: 'name',
                    email: 'mail@mail.com',
                    channel: 'cheannel',
                    address: 'address',
                    social: {
                        facebook: 'facebook',
                        twitter: 'twitter'
                    },
                    phoneNumbers: ['1234567890', '0987654321'],
                    phNumbers: ['']
                }}
            onSubmit={values =>
                console.log("Form values")
            }>
            <Form >
                <div className={styles.formItem}>
                    <label htmlFor="name">Name : </label>
                    <Field type="text" id="name" name="name" placeholder="Enter your name"
                    />
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="email">E-mail : </label>
                    <Field type="email" id="email" name="email" placeholder="Enter your email"
                    />
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="channel">Channel : </label>
                    <Field as="textarea" id="channel" name="channel" placeholder="Enter your channel"
                    />
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="address">address : </label>
                    <Field as="textarea" id="channel" name="address" placeholder="Enter your address">
                        {
                            (props) => {
                                const { field, form, meta } = props;
                                // console.log("Field render props", props);
                                return <input as="textarea" placeholder="Address" id='address' {...field} />
                            }
                        }
                    </Field>
                    <div className={styles.formItem}>
                        <label htmlFor="facebook">facebook : </label>
                        <Field type="text" id="facebook" name="social.facebook" placeholder="facebook"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label htmlFor="twitter">twitter : </label>
                        <Field type="text" id="twitter" name="social.twitter" placeholder="twitter"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label htmlFor="primaryPh">phone 1 : </label>
                        <Field type="text" id="phone1" name="phoneNumbers[0]" placeholder="phone no"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label htmlFor="secondatyPh">phone 2 : </label>
                        <Field type="text" id="phone2" name="phoneNumbers[1]" placeholder="phone no"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label htmlFor="secondatyPh"> Phone list </label>
                        <FieldArray name="phNumbers" >
                            {
                                (FieldArrayProps) => {
                                    console.log("FieldArrayProps", FieldArrayProps);
                                    const { push, remove, form } = FieldArrayProps;
                                    const { values } = form;
                                    const { phNumbers } = values;
                                    return (
                                        <div>
                                            {
                                                phNumbers.map((phNumber, index) => (
                                                    <div key={index}>
                                                        <Field name={`phNumbers[${index}]`} />
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
                    </div>

                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}
export default YoutubeForm;