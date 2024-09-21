import * as yup from "yup";

const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
const creditCardRegex = /^\d{16}$/;
const phoneRegex = /^\+?\d{10,15}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const registrationValidation = yup.object().shape({
  firstName: yup
    .string()
    .matches(nameRegex, "Ім'я повинно містити тільки літери")
    .required("Ім'я є обов'язковим"),
  lastName: yup
    .string()
    .matches(nameRegex, "Прізвище повинно містити тільки літери")
    .required("Прізвище є обов'язковим"),
  organization: yup.string().required("Найменування організації є обов'язковим"),
  creditCard: yup
    .string()
    .matches(creditCardRegex, "Номер кредитної картки повинен містити 16 цифр")
    .required("Номер кредитної картки є обов'язковим"),
  phone: yup
    .string()
    .matches(phoneRegex, "Введіть правильний номер телефону")
    .required("Номер телефону є обов'язковим"),
  email: yup
    .string()
    .matches(emailRegex, "Введіть коректну електронну адресу")
    .required("Електронна адреса є обов'язковою"),
});

export { registrationValidation, creditCardRegex };