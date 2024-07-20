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
    console.log();
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
      <Form>
        <h1 className="flex justify-center items-center m-10">اطلاعات فردی</h1>
        <div className="container flex flex-col justify-center items-center gap-7">
          <div className="flex justify-center items-center gap-4">
            <Field
              className="border border-black rounded-md"
              type="number"
              id="personCode"
              name="personCode"
              placeholder="کد پرسنلی"
            />
            <Field
              className="border border-black rounded-md"
              id="name"
              name="name"
              placeholder="نام و نام خانوادگی"
            />
            <Field
              className="border border-black rounded-md"
              type="number"
              id="codeMelli"
              name="codeMelli"
              placeholder="کد ملی"
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            <Field
              className="border border-black rounded-md"
              type="date"
              id="birthdayDate"
              name="birthdayDate"
              placeholder="تاریخ تولد"
            />
            <Field
              className="border border-black rounded-md"
              type="email"
              id="email"
              name="email"
              placeholder="ایمیل"
            />
            <Field
              className="border border-black rounded-md"
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="شماره تلفن"
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            <Field
              className="border border-black rounded-md"
              as="textarea"
              name="address"
              id="address"
              placeholder="آدرس"
              style={{ width: "50%" }}
            />
            <button
              type="submit"
              className="border-black border p-2 rounded-md"
            >
              ثبت نام
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
