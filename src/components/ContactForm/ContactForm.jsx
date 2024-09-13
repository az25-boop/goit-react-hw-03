import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

export default function ContactForm({ onSubmit }) {
  const nameId = useId();
  const numberId = useId();

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short! 💖")
      .max(50, "Too long! 😍")
      .required("Required ✔"),
    number: Yup.string()
      .min(3, "Too short! 😜")
      .max(50, "Too long! 😎")
      .required("Required ✔"),
  });

  return (
    <div>
      <h1>Contact Us</h1>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={onSubmit}
        validationSchema={formSchema}
      >
        <Form className={s.form}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage className={s.error} name="name" component="span" />
          <label htmlFor={numberId}>Number</label>
          <Field type="tel" name="number" id={numberId} />
          <ErrorMessage className={s.error} name="number" component="span" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
