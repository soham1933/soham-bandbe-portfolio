import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './SignupForm.module.css';

const SignupForm = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
          mobile: '',
          message: ''
        }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
          mobile: Yup.string()
            .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
            .required('Required'),
          message: Yup.string().required('Required')
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await axios.post('http://localhost:5000/api/contact', {
              name: `${values.firstName} ${values.lastName}`,
              email: values.email,
              message: values.message
            });
            alert('Your message has been sent!');
            setSubmitting(false);
            navigate('/');
          } catch (error) {
            console.error('There was an error!', error);
            alert('There was an error submitting your form');
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.formContainer}>
            <h1>Contact Form</h1>
            <div>
              <label htmlFor="email">Email Address</label>
              <Field type="email" name="email" className={styles.input} />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field type="text" name="firstName" className={styles.input} />
              <ErrorMessage name="firstName" component="div" className={styles.error} />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" name="lastName" className={styles.input} />
              <ErrorMessage name="lastName" component="div" className={styles.error} />
            </div>
            <div>
              <label htmlFor="mobile">Mobile Number</label>
              <Field type="text" name="mobile" className={styles.input} />
              <ErrorMessage name="mobile" component="div" className={styles.error} />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <Field as="textarea" name="message" className={styles.textarea} />
              <ErrorMessage name="message" component="div" className={styles.error} />
            </div>
            <button type="submit" disabled={isSubmitting} className={styles.button}>Submit</button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default SignupForm;
