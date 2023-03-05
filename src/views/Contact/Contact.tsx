import { MutableRefObject, useRef } from "react";
import GsapAnimation from "../../components/GsapAnimation/GsapAnimation";
import SectionButton from "../../components/SectionButton/SectionButton";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler } from "react-hook-form/dist/types";
import contact from "../../assets/contact.jpg";
const Contact: React.FC<{
  scrollTo: (section: MutableRefObject<HTMLDivElement>) => void;
  goToSectionDownRef: MutableRefObject<HTMLDivElement | null>;
  goToSectionUpRef: MutableRefObject<HTMLDivElement | null>;
}> = ({ scrollTo, goToSectionDownRef, goToSectionUpRef }) => {
  const FormSchema = z.object({
    name: z
      .string()
      .min(2, { message: "Name is required and must be have at least 2 characters" })
      .max(25, { message: "Max length is 25 characters" }),
    email: z
      .string()
      .email({ message: "Must be a valid email" })
      .min(5, { message: "Email is required" }),
    message: z
      .string()
      .min(15, { message: "Message of at least 15 characters is required" })
      .max(200, { message: "Max length is 25 characters" }),
  });

  type Form = z.infer<typeof FormSchema>;
  const form = useRef<any>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(FormSchema),
  });
  const handleSend: SubmitHandler<Form> = (formValues: Form) => {
    console.log(formValues);

    // emailjs
    //   .sendForm("service_jek510y", "template_s0m2qr5", form.current, "Rt2aDe6LmdduCxAAY")
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  return (
    <div className="w-full h-[calc(100vh-96px)] snap-center bg-[#0D002B] font-oswald">
      <div className="relative h-auto w-[1920px] xl:w-[1440px] my-0 mx-auto px-10 ">
        <SectionButton
          scrollTo={scrollTo}
          goToSectionRef={goToSectionUpRef}
          direction="up"
        />
        <GsapAnimation wrapperElement="div">
          <div className="flex flex-col justify-center items-center gap-20 xl:gap-10 h-[calc(100vh-96px)]">
            <div>
              <h3 className="uppercase text-center text-xl xl:text-base text-mainOrange">
                My skills progress so far
              </h3>
              <h2 className="text-6xl xl:text-4xl text-center pt-3">Contact Me!</h2>
            </div>
            <form
              ref={form}
              onSubmit={handleSubmit(handleSend)}
              className="flex flex-col items-center gap-8 px-10 py-16 shadow-[inset_0_0_0_1000px_rgba(0,0,0,0.6)] text-lg"
              style={{ backgroundImage: `url(${contact})` }}
            >
              <div className="flex flex-col justify-center items-center">
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="w-96 bg-inherit border-b-[1px] focus:border-0"
                />
                <label htmlFor="name" className="self-start pt-4 text-sm">
                  Your name
                </label>
                {errors.name && (
                  <p className="text-sm text-red-200">{errors.name.message}</p>
                )}
              </div>

              <div className="flex flex-col justify-center items-center">
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="w-96 bg-inherit border-b-[1px]"
                />
                <label htmlFor="email" className="self-start pt-4 text-sm">
                  Your email
                </label>
                {errors.email && (
                  <p className="text-sm text-red-200">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col justify-center items-center">
                <textarea
                  id="message"
                  {...register("message")}
                  className="w-96 bg-inherit border-b-[1px]"
                  rows={5}
                ></textarea>
                <label htmlFor="message" className="self-start pt-4 text-sm">
                  Your message
                </label>
                {errors.message && (
                  <p className="text-sm text-red-200">{errors.message.message}</p>
                )}
              </div>

              <button type="submit" className="w-96 bg-mainOrange rounded-2xl py-1">
                Send
              </button>
            </form>
          </div>
        </GsapAnimation>

        <SectionButton
          scrollTo={scrollTo}
          goToSectionRef={goToSectionDownRef}
          direction="down"
        />
      </div>
    </div>
  );
};

export default Contact;
