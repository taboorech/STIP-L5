import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { creditCardRegex, registrationValidation } from "../../yup/registration.scheme";

const RegistrationForm = () => {
  const [creditCardAttempts, setCreditCardAttempts] = useState<number>(0);
  const [creditCard, setCreditCard] = useState<string>('');
  const maxAttempts = 3;

  const handleCreditCardInput = (value: string) => {
    if (!creditCardRegex.test(value) && value.length > 0) {
      setCreditCardAttempts((prev) => prev + 1);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-center mb-6">Форма реєстрації</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          organization: "",
          creditCard: "",
          phone: "",
          email: "",
        }}
        validationSchema={registrationValidation}
        onSubmit={(_, { resetForm }) => {
          if (creditCardAttempts >= 3) {
            alert("Перевищено кількість спроб введення номера кредитної картки");
            return;
          }

          alert("Дані успішно надіслані");
          resetForm();
          setCreditCardAttempts(0);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Ім'я</label>
              <Field
                name="firstName"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Прізвище</label>
              <Field
                name="lastName"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Найменування організації</label>
              <Field
                name="organization"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="organization" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="creditCard" className="block text-sm font-medium text-gray-700">
                Номер кредитної картки
              </label>
              <Field
                name="creditCard"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  const value = event.target.value;
                  setFieldValue("creditCard", value);
                  setCreditCard(value);
                }}
              />
              <ErrorMessage name="creditCard" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <p>Залишилося спроб введення номера картки: {creditCardAttempts >= 3 ? 0 : maxAttempts - creditCardAttempts}</p>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Номер телефону</label>
              <Field
                name="phone"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Електронна пошта</label>
              <Field
                name="email"
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="flex items-center flex-col justify-between">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
                onClick={() => handleCreditCardInput(creditCard)}
              >
                Надіслати
              </button>
              <button
                type="reset"
                className="w-full mt-2 bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300"
              >
                Очистити
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;