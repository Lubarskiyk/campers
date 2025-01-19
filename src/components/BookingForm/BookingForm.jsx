import { Field, Form, Formik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import css from './BookingForm.module.css';
import 'react-datepicker/dist/react-datepicker.css';

export default function BookingForm() {
  const initialValues = {
    username: '',
    email: '',
    date: '',
    message: '',
  };

  function handlerSubmit() {
    toast.success('Successfully booked 👋!', {
      position: 'top-right',
    });
  }

  return (
    <div className={css.formcontainer}>
      <p className={css.title}>Book your campervan now</p>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik initialValues={initialValues} onSubmit={handlerSubmit}>
        <Form className={css.form}>
          <Field
            type="text"
            name="username"
            className={css.input}
            placeholder="Name*"
          />
          <Field
            type="email"
            name="email"
            className={css.input}
            placeholder="Email*"
          />

          <Field
            type="date"
            name="date"
            className={css.input}
            placeholder="Booking date*"
          />

          <Field
            as="textarea"
            name="message"
            placeholder="Comment"
            className={css.comment}
          ></Field>
          <button type="submit" className={css.button}>
            Send
          </button>
          <ToastContainer />
        </Form>
      </Formik>
    </div>
  );
}
