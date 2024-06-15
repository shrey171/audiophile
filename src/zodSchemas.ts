import { ZodType, z } from "zod";

export interface ICheckoutForm {
  name: string;
  email: string;
  phone: number;
  address: string;
  zipcode: number;
  city: string;
  state: string;
  country: string;
}

export const CheckoutSchema: ZodType<ICheckoutForm> = z.object({
  name: z.string().min(1, 'Name required').max(120, 'Too long'),
  email: z.string().min(1, 'Email required').email().max(320, 'Too long'),
  phone: z.number({ message: 'Invalid phone number' }).min(1000000000, 'Invalid phone number').max(9999999999, 'Too long'),
  address: z.string().min(1, 'Address required').max(500, 'Too long'),
  zipcode: z.number({ message: 'Invalid zipcode' }).min(1, 'Zipcode required').max(9999, 'Too long'),
  city: z.string().min(1, 'City required'),
  state: z.string().min(1, 'State required'),
  country: z.string().min(1, 'Country required'),
})