import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";

const loadPost = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials`);
  const data = await response.json();
  return data
}

// export const getStaticProps = async () => {
  export const getServerSideProps:GetServerSideProps = async () => {
  const data = await loadPost()
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { socials: data },
  }
};

const Home = ({ socials }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Next.js Application" />
    <Socials socials={socials} />
  </div>
);

export default Home;
