import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Chart from "../components/Chart";
import CONFUSChart from "../components/CONFUSChart";
import CPIUSChart from "../components/CPIUSChart";
import DateRangePicker from "../components/DateRangePicker";
import RETAUSChart from "../components/RETAUSChart";
import SliderBar from "../components/SliderBar";
import styles from "../styles/Home.module.css";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const api = "https://www.econdb.com/api/series";

export enum SeriesCode {
  cpius = "CPIUS",
  confus = "CONFUS",
  retaus = "RETAUS",
  sentus = "SENTUS",
  popus = "POPUS",
}

export default function Home() {
  const [startDate, setStartDate] = useState<string>("2015-01-01");
  const [endDate, setEndDate] = useState<string>("2021-01-01");
  const [scaleValue, setScaleValue] = useState(1);

  return (
    <div className={styles.container}>
      <Head>
        <title>PWC Economic Dashboard</title>
        <meta
          name="description"
          content="Charts displayed for pwc economic dashboard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={"header flex flex-row justify-evenly"}>
          <div>
            <p className="text-3xl font-bold">Economic Dashboard </p>
          </div>
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
          <SliderBar scaleValue={scaleValue} setScaleValue={setScaleValue} />
        </div>

        {/* <div className={styles.grid}> */}
        <div className={" grid grid-cols-2 gap-4"}>
          <CPIUSChart
            startDate={startDate}
            endDate={endDate}
            scale={scaleValue}
          />
          <CONFUSChart
            startDate={startDate}
            endDate={endDate}
            scale={scaleValue}
          />
          <RETAUSChart startDate={startDate} endDate={endDate} />

          <div className="label-container border-2 border-black ">
            <div>
              <p>{"Average US Sentiment Index (SENTUS)"}</p>
              <p>{"Number"}</p>
            </div>
            <div>
              <p>{"Population growth during the selected period (POPUS)"}</p>
              <p>{"Number"}</p>
            </div>
          </div>
          {/* <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a> */}
          {/* <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
