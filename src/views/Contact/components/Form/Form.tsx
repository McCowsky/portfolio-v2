import { z } from 'zod';
import { useRef, RefObject } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler } from 'react-hook-form/dist/types';
const Form: React.FC = () => {
  const FormSchema = z.object({
    name: z
      .string()
      .min(2, { message: 'Name is required and must be have at least 2 characters' })
      .max(25, { message: 'Max length is 25 characters' }),
    email: z.string().email({ message: 'Must be a valid email' }).min(5, { message: 'Email is required' }),
    message: z
      .string()
      .min(15, { message: 'Message of at least 15 characters is required' })
      .max(200, { message: 'Max length is 25 characters' }),
  });

  type Form = z.infer<typeof FormSchema>;
  const form: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(FormSchema),
  });
  const handleSend: SubmitHandler<Form> = () => {
    if (null !== form.current)
      emailjs.sendForm('service_jek510y', 'template_s0m2qr5', form.current, 'Rt2aDe6LmdduCxAAY').then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={handleSubmit(handleSend)} className="flex flex-col items-center gap-4 text-lg ">
      <div className="flex gap-6">
        <div className="flex flex-col justify-center items-center">
          <input
            type="text"
            id="name"
            placeholder="Your name"
            {...register('name')}
            className="w-52 sm:w-44 placeholder:text-sm bg-[#14143A] dark:bg-white focus:border-0 rounded-lg h-10 pl-4"
          />
          {errors.name && <p className="text-sm text-red-200">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col justify-center items-center">
          <input
            type="email"
            id="email"
            placeholder="Your email"
            {...register('email')}
            className="w-52 sm:w-44 placeholder:text-sm bg-[#14143A] dark:bg-white rounded-lg h-10 pl-4"
          />
          {errors.email && <p className="text-sm text-red-200">{errors.email.message}</p>}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <textarea
          id="message"
          placeholder="Your message"
          {...register('message')}
          className="w-[440px] sm:w-[380px] placeholder:text-sm bg-[#14143A] dark:bg-white resize-none rounded-lg pl-4 pt-2"
          rows={6}></textarea>
        {errors.message && <p className="text-sm text-red-200">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        className="px-12 self-start bg-mainOrange rounded-2xl py-1 hover:bg-[#130538] dark:text-white">
        Send
      </button>
    </form>
  );
};

export default Form;
