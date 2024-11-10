import { z } from 'zod';

// For the phone and website, the comment out part is the one that we will generally do with the Form
// the current validation is to just to make it pass https://jsonplaceholder.typicode.com/users check with api call.
export const BasicUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be 2 or more characters long' }),
  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(4, { message: 'Username must be 4 or more characters long' }),
  email: z.string().email().trim().toLowerCase(),
  phone: z
    .string()
    .min(10, { message: 'Phone numbers are a minimum of 10 digits' }),
  // .regex(/^[0-9]+$/, { message: "Only numbers are allowed" })
  // .length(10, { message: "Ten numbers are required" })
  // .transform(val => `${val.slice(0, 3)}-${val.slice(3, 6)}-${val.slice(6)}`),
  //website: z.string().trim().toLowerCase().url().optional(),
  website: z
    .string()
    .trim()
    .toLowerCase()
    .min(5, { message: 'URLs must be a minimum of 5 characters' })
    .refine((val) => val.indexOf('.') !== -1, { message: 'Invalid URL' })
    .optional(),
  company: z.object({
    name: z
      .string()
      .trim()
      .min(5, { message: 'Company name must be 5 or more characters long' }),
    catchPhrase: z.string().optional(),
  }),
});
