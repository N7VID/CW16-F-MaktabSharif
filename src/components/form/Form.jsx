import { Field, Form, Formik } from "formik";

export default function FormApp() {
  function showFormData(
    name,
    personCode,
    codeMelli,
    birthdayDate,
    email,
    phoneNumber,
    address
  ) {
    const formData = {
      name,
      personCode,
      codeMelli,
      birthdayDate,
      email,
      phoneNumber,
      address,
    };

    console.log(formData);
  }
  return (
    <Formik
      initialValues={{
        name: "",
        personCode: "",
        codeMelli: "",
        birthdayDate: "",
        email: "",
        phoneNumber: "",
        address: "",
      }}
      onSubmit={(values) => {
        showFormData({
          name: values.name,
          personCode: values.personCode,
          codeMelli: values.codeMelli,
          birthdayDate: values.birthdayDate,
          email: values.email,
          phoneNumber: values.phoneNumber,
          address: values.address,
        });
      }}
    >
      <Form className="my-0 mx-auto max-w-4xl">
        <h1 className="flex justify-center items-center mt-20 mb-10 text-xl">
          اطلاعات فردی
        </h1>
        <div className="container grid grid-cols-3 items-center gap-7 ">
          <Field
            className="border border-gray-500 rounded-md p-2 "
            type="number"
            id="personCode"
            name="personCode"
            placeholder="کد پرسنلی"
          />
          <Field
            className="border border-gray-500 rounded-md p-2 "
            id="name"
            name="name"
            placeholder="نام و نام خانوادگی"
          />
          <Field
            className="border border-gray-500 rounded-md p-2 "
            type="number"
            id="codeMelli"
            name="codeMelli"
            placeholder="کد ملی"
          />

          <Field
            className="border border-gray-500 rounded-md p-2 "
            type="date"
            id="birthdayDate"
            name="birthdayDate"
            placeholder="تاریخ تولد"
          />
          <Field
            className="border border-gray-500 rounded-md p-2 "
            type="email"
            id="email"
            name="email"
            placeholder="ایمیل"
          />
          <Field
            className="border border-gray-500 rounded-md p-2 "
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="شماره تلفن"
          />

          <Field
            className="border border-gray-500 rounded-md p-2  col-start-1 col-end-3"
            as="textarea"
            name="address"
            id="address"
            placeholder="آدرس"
            style={{ width: "100%" }}
          />
          <button
            type="submit"
            className="border-gray-500 border p-2 rounded-md col-start-3 col-end-3 max-w-[150px] hover:bg-blue-200 transition"
          >
            ثبت نام
          </button>
        </div>
      </Form>
    </Formik>
  );
}
