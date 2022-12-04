import Head from "next/head";
import { useState } from "react";
import CONFUSChart from "../components/CONFUSChart";
import CPIUSChart from "../components/CPIUSChart";
import DateRangePicker from "../components/DateRangePicker";
import POPUSLabel from "../components/POPUSLabel";
import RETAUSChart from "../components/RETAUSChart";
import SENTUSLabel from "../components/SENTUSLabel";
import SliderBar from "../components/SliderBar";
import styles from "../styles/Home.module.css";

export const EcondbApi = "https://www.econdb.com/api/series";

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
        <title>PwC Economic Dashboard</title>
        <meta
          name="description"
          content="Charts displayed for pwc economic dashboard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div
          className={
            "flex flex-row justify-evenly items-center py-5 border-b-2 border-black"
          }
        >
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

        <div className={" grid grid-cols-1 gap-4 lg:grid-cols-2 pt-5 "}>
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

          <div className="flex flex-col justify-center items-center border-2 border-black ">
            <SENTUSLabel startDate={startDate} endDate={endDate} />
            <POPUSLabel startDate={startDate} endDate={endDate} />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a target="_blank" rel="noopener noreferrer">
          Powered by{" Jate"}
        </a>
      </footer>
    </div>
  );
}
