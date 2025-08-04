import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Akarsa Dyniq | Digital Marketing Agency</title>
        <meta name="description" content="Akarsa Dyniq - Innovative Digital Marketing Solutions" />
      </Head>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Akarsa Dyniq</h1>
        <p className="text-lg text-center max-w-xl">
          We help your business grow with innovative digital marketing strategies, creative solutions, and measurable results.
        </p>
      </motion.section>
    </>
  );
}
