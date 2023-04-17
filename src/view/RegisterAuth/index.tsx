"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    clientName: "",
    clientEmail: "",
  });

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const result = await response.json();
      localStorage.setItem("authToken", result.accessToken);
      router.back();
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmitOrder = async (e: any) => {
    e.preventDefault();
    const authToken = localStorage.getItem("authToken");
    try {
      const response = await fetch(`/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          bookId: 1,
          customerName: "John",
        }),
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const result = await response.json();
      console.log(result);
      router.back();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className='mx-auto p-40 w-full md:max-w-3xl'>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label className='block text-sm font-medium text-gray-900'>
            Client Name
          </label>
          <input
            type='text'
            name='clientName'
            placeholder='Enter Client Name'
            value={form.clientName}
            required
            onChange={handleChange}
            className='flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900'
          />
          <label className='block text-sm font-medium text-gray-900'>
            Client Email
          </label>
          <input
            type='email'
            name='clientEmail'
            placeholder='Enter Client Name'
            value={form.clientEmail}
            required
            onChange={handleChange}
          />
          <button
            type='submit'
            className='mt-3 inline bg-blue-400 font-medium rounded-md text-sm text-white p-2 '
          >
            Submit
          </button>
          <button
            onClick={handleSubmitOrder}
            className='mt-3 inline  bg-blue-400 font-medium rounded-md text-sm text-white p-2 '
          >
            Submit Order
          </button>
        </form>
      </div>
    </>
  );
};
export default Register;
