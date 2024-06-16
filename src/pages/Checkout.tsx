import { zodResolver } from "@hookform/resolvers/zod";
import { DropDown, TextInput } from "components";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { useAppStore } from "store";
import { CheckoutSchema, ICheckoutForm } from "zodSchemas";
import { countries } from "data";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export const Checkout = () => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ICheckoutForm>({ resolver: zodResolver(CheckoutSchema) });
  const onSubmit: SubmitHandler<ICheckoutForm> = data => console.log(data);
  const cart = useAppStore(state => state.cart);
  const sum = useAppStore(state => state.getTotal)();
  const country = useWatch({ name: "country", control });
  const state = useWatch({ name: "state", control });
  const states = countries.find(c => c.name === country)?.states || [];
  const cities = states.find(s => s.name === state)?.cities || [];

  const shippingCost = cart.length > 0 ? 50 : 0;
  const tax = sum * 0.2;
  const cashFormat = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  useEffect(() => {
    setValue("state", "");
  }, [country]);

  useEffect(() => {
    setValue("city", "");
  }, [state]);  

  return (
    <main
      className="w-10/12 max-w-screen-global mx-auto py-12 flex flex-col-reverse gap-20 items-center 
    xl:gap-20 xl:py-24 xl:flex-row xl:items-start">
      <Helmet>
        <title>{"Audiophile - Checkout"}</title>
      </Helmet>
      <section className="rounded-lg sm:p-12 w-full max-w-3xl xl:p-0">
        <h1 className="uppercase font-bold text-3xl mb-8">Checkout</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-12">
          <div>
            <p className="uppercase text-sm font-bold tracking-wider mb-4 text-accent">
              billing details
            </p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <TextInput {...register("name")} error={errors.name?.message} />
              <TextInput {...register("email")} error={errors.email?.message} />
              <TextInput
                {...register("phone", { valueAsNumber: true })}
                error={errors.phone?.message}
              />
            </div>
          </div>
          <div>
            <p className="uppercase text-sm font-bold tracking-wider mb-4 text-accent">
              shipping info
            </p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <TextInput
                {...register("address")}
                error={errors.address?.message}
                className="md:col-span-2"
              />
              <TextInput
                {...register("zipcode", { valueAsNumber: true })}
                error={errors.zipcode?.message}
              />
              <DropDown
                {...register("country")}
                array={countries.map(country => country.name)}
                error={errors.country?.message}
              />
              <DropDown
                {...register("state")}
                array={states.map(state => state.name)}
                error={errors.state?.message}
                disabled={!country}
              />
              <DropDown
                {...register("city")}
                array={cities}
                error={errors.city?.message}
                disabled={!state}
              />
            </div>
          </div>
          <button disabled={cart.length < 1} className="btn w-full md:w-32 disabled:bg-gray disabled:border-gray disabled:text-text disabled:cursor-not-allowed">Pay</button>
        </form>
      </section>
      <section className="w-full max-w-3xl sm:p-12 xl:w-6/12 xl:p-0">
        <h2 className="uppercase font-bold text-3xl mb-8">summary</h2>
        <div className="grid gap-4 mb-12">
          {cart.map(item => (
            <div className="flex gap-6" key={item.id}>
              <img
                className="w-16 rounded-lg"
                src={item.image}
                alt={item.name}
              />
              <div className="text-sm sm:text-base">
                <p className="font-bold mb-1">{item.name}</p>
                <p className="text-text font-semibold">
                  {cashFormat(item.price)}
                </p>
              </div>
              <p className="ml-auto text-text font-semibold">
                x{item.quantity}
              </p>
            </div>
          ))}
        </div>
        <div className="uppercase grid gap-2 mb-8">
          <div className="flex justify-between">
            <p className="text-text font-semibold">sum</p>
            <p className="font-bold">{cashFormat(sum)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-text font-semibold">shipping</p>
            <p className="font-bold">{cashFormat(shippingCost)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-text font-semibold">Tax</p>
            <p className="font-bold">{cashFormat(tax)}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-text font-semibold uppercase">total</p>
          <p className="font-bold text-xl text-accent">
            {cashFormat(sum + shippingCost + sum * 0.18)}
          </p>
        </div>
      </section>
    </main>
  );
};
