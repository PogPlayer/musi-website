import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Commands() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to another page after 3 seconds
    const redirectTimer = setTimeout(() => {
      router.push('https://youtu.be/dQw4w9WgXcQ?si=gXbz8CdF_eFQzN_V');
    }, 0); // Corrected the timeout to 3000 milliseconds

    // Clear the timer if the component is unmounted
    return () => clearTimeout(redirectTimer);
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <meta property="og:title" content="musi.lol/github" />
        <meta property="og:description" content="The best free discord music bot." />
        <meta property="og:image" content="https://media.discordapp.net/attachments/1216083221712736336/1221296058727010475/Musi_logo_7_trans_whiteText.png?ex=66120f96&is=65ff9a96&hm=69d0b5d2ae9a228caf8be8b0b50aaa0dabea7e9583ad5a8517021531a1f90f25&" />
        <meta property="og:url" content="https://musi.lol" />
        <title>Musi.lol - Github</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://media.discordapp.net/attachments/1216083221712736336/1221296058727010475/Musi_logo_7_trans_whiteText.png?ex=66120f96&is=65ff9a96&hm=69d0b5d2ae9a228caf8be8b0b50aaa0dabea7e9583ad5a8517021531a1f90f25&" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              Redirecting...
            </label>
          </header>
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
