import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  mobile: Yup.string().matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits').required('Mobile number is required'),
  message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        resetForm();
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section className={styles.container}>
      <Formik
        initialValues={{ email: '', firstName: '', lastName: '', mobile: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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

export default ContactForm;
