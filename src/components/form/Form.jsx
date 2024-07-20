import { Field, Form, Formik, validateYupSchema } from "formik";
import * as Yup from 'yup'

export default function FormApp() {
  function showFormData(
   { name,
    personCode,
    codeMelli,
    birthdayDate,
    email,
    phoneNumber,
    address}
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
      } 
      }
    
      validationSchema={Yup.object({
        name: Yup.string()
          .length(3 , "must be at least 3 letter"),
        personCode: Yup.number()
        .integer("Integer number require ------"),
        codeMelli : Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, 'Must be exactly 5 digits')
        .max(10, 'Must be exactly 5 digits'),
        birthdayDate : Yup.string()
        .matches(/(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[1,2])-(19|20)\d{2}/gm,"not valid"),
        email : Yup.string()
        .email("email is not valid"),
        phoneNumber : Yup.string()
        .matches(/((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g, "Invalid phone number format")
        .max(14 ,"Invalid phone number format")
        .min(10 ,"Invalid phone number format"),
        address : Yup.string()
        .min(10 , "address should be more than 10 word")



      })}
      validateOnChange={false}
      validateOnBlur={false}
    >
    {({errors}) => (
      <Form className="my-0 mx-auto max-w-4xl">
      <h1 className="flex justify-center items-center mt-20 mb-10 text-xl">
        اطلاعات فردی
      </h1>
      <div className="container grid grid-cols-3 items-center gap-7 ">
        <div className="flex flex-col gap-2">
        <Field
          className="border border-gray-500 rounded-md p-2 "
          type="number"
          id="personCode"
          name="personCode"
          placeholder="کد پرسنلی"
        />
        <span className="text-red-600">{errors.personCode}</span>
        </div>
        
        <div className="flex flex-col gap-2">
        <Field
          className="border border-gray-500 rounded-md p-2 "
          id="name"
          name="name"
          placeholder="نام و نام خانوادگی"
        />
        <span className="text-red-600">{errors.name}</span>
        </div>
        <div className="flex flex-col gap-2">
        <Field
          className="border border-gray-500 rounded-md p-2 "
          id="codeMelli"
          name="codeMelli"
          placeholder="کد ملی"
        />
        <span className="text-red-600">{errors.codeMelli}</span>
        </div>

        <div className="flex flex-col gap-2">
        <Field
          className="border border-gray-500 rounded-md p-2 "
          id="birthdayDate"
          name="birthdayDate"
          placeholder="تاریخ تولد"
        />
        <span className="text-red-600">{errors.birthdayDate}</span>
        </div>
        <div className="flex flex-col gap-2">
        <Field
          className="border border-gray-500 rounded-md p-2 "
          
          id="email"
          name="email"
          placeholder="ایمیل"
        />
        <span className="text-red-600">{errors.email}</span>
        </div>
        <div className="flex flex-col gap-2">
        <Field
          className="border border-gray-500 rounded-md p-2 "
          id="phoneNumber"
          name="phoneNumber"
          placeholder="شماره تلفن"
        />
        <span className="text-red-600">{errors.phoneNumber}</span>
        </div>

       <div className="flex flex-col gap-2">
       <Field
          className="border border-gray-500 rounded-md p-2  col-start-1 col-end-3"
          as="textarea"
          name="address"
          id="address"
          placeholder="آدرس"
          style={{ width: "100%" }}
        />
        <span className="text-red-600">{errors.address}</span>
       </div>
        <button
          type="submit"
          className="border-gray-500 border p-2 rounded-md col-start-3 col-end-3 max-w-[150px] hover:bg-blue-200 transition"
        >
          ثبت نام
        </button>
      </div>
    </Form>
    )}
      
    </Formik>
  );
}
