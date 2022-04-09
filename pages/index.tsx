import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import FAQ from "./components/faq";
import Feature from "./components/feature";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Timeline from "./components/timeline";

const Home: NextPage = () => {
  return (
    <>
      
        <Head>
          <link rel="icon" type="image/svg+xml" href="/" />
          <link rel="icon" type="image/png" href="/" />
          <title>LightningOx</title>
          <meta
            name="description"
            content="The place to talk about the validity of projects."
           />
        </Head>

        <Navbar/>

        <Hero/>

        <div className="w-100 bg-offBlack-800">

         

          <div className="max-w-2xl w-100 pt-6 pb-6 pl-8 pr-8 m-auto">
            <Timeline/>
          </div>

          <Feature/>

          <FAQ/>
        </div>


        <Footer/>

      
    </>
  );
};

export default Home;
