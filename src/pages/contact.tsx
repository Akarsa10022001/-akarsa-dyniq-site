import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Akarsa Dyniq</title>
      </Head>
      <div className="container mx-auto py-20">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p>
          Ready to take your business to the next level? Get in touch with our team!
        </p>
        <form className="mt-8 max-w-lg">
          <input className="border w-full p-2 mb-3" type="text" placeholder="Your Name" required />
          <input className="border w-full p-2 mb-3" type="email" placeholder="Your Email" required />
          <textarea className="border w-full p-2 mb-3" rows={4} placeholder="How can we help?" required />
          <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
