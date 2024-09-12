import ContactMeForm from "@/components/contact/contact-me.form";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container p-4 md:w-1/2 mx-auto">
        <h1 className="text-2xl font-bold text-center my-2">Contact Me</h1>
        <ContactMeForm></ContactMeForm>
      </div>
    </div>
  );
}
