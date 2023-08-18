import React from 'react';
import { useForm } from 'react-hook-form';

const CheckoutForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Here you can implement the logic to process the checkout
    // For example, sending the form data to a server, etc.
    console.log('Form submitted:', data);
  };

  return (
    <div className="  max-w-[1240px] mx-auto my-10 py-10 px-4 ">
      <h2 className="text-2xl font-semibold mb-4">Checkout Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Full Name"
          name="fullName"
          register={register}
          required
          error={errors.fullName}
        />
        <FormField
          label="Email"
          name="email"
          register={register}
          required
          error={errors.email}
        />
        <FormField
          label="Address"
          name="address"
          register={register}
          required
          error={errors.address}
        />
        <div className="flex">
          <FormField
            label="City"
            name="city"
            register={register}
            required
            error={errors.city}
            className="mr-2"
          />
          <FormField
            label="Postal Code"
            name="postalCode"
            register={register}
            required
            error={errors.postalCode}
            className="ml-2"
          />
        </div>
        <FormField
          label="Credit Card Number"
          name="creditCardNumber"
          register={register}
          required
          error={errors.creditCardNumber}
        />
        <div className="flex">
          <FormField
            label="Expiration Date"
            name="expirationDate"
            register={register}
            required
            error={errors.expirationDate}
            className="mr-2"
          />
          <FormField
            label="CVV"
            name="cvv"
            register={register}
            required
            error={errors.cvv}
            className="ml-2"
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded mt-4"
          type="submit"
        >
          Complete Purchase
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;

const FormField = ({ label, name, register, required, error, className }) => (
  <div className={`mb-4 ${className}`}>
    <label className="block mb-2">{label}</label>
    <input
      className="w-full p-2 border rounded"
      type="text"
      {...register(name, { required })}
    />
    {error && <span className="text-red-500">This field is required</span>}
  </div>
);
