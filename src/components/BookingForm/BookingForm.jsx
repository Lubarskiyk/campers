import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import css from './BookingForm.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import { object, string } from 'yup';

const BookingSchema = object().shape({
  email: string()
    .required('Required')
    .test('is-valid-email', 'Invalid email address', value => {
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
    }),
  username: string()
    .required('Required')
    .min(3, 'Should be 3 chars minimum.')
    .max(30, 'Should be 30 chars maximum.'),
});

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

      <Formik
        initialValues={initialValues}
        onSubmit={handlerSubmit}
        validationSchema={BookingSchema}
      >
        <Form className={css.form}>
          <div className={css.inputwrap}>
            <Field
              type="text"
              name="username"
              className={css.input}
              placeholder="Name*"
            />
            <ErrorMessage
              name="username"
              component="span"
              className={css.error}
            />
          </div>
          <div className={css.inputwrap}>
            <Field
              type="email"
              name="email"
              className={css.input}
              placeholder="Email*"
            />
            <ErrorMessage name="email" component="span" className={css.error} />
          </div>
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
