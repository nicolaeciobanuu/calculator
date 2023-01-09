import Head from "next/head";
import styles from "styles/Home.module.scss";
import Button from "../components/Button";
import { BsBatteryFull, BsWifi } from "react-icons/bs";
import { TbAntennaBars5 } from "react-icons/tb";

export default function Home() {
  const buttons: {
    value: string;
    bg: string;
    color?: string;
    zero?: boolean;
  }[] = [
    { value: "AC", bg: "hsl(0, 0%, 62%)" },
    { value: "+/-", bg: "hsl(0, 0%, 62%)" },
    { value: "%", bg: "hsl(0, 0%, 62%)" },
    { value: "/", bg: "hsl(37, 95%, 49%)", color: "hsl(0, 0%, 95%)" },
    { value: "7", bg: "hsl(180, 1%, 19%)", color: "hsl(0, 0%, 95%)" },
    { value: "8", bg: "hsl(180, 1%, 19%)", color: "hsl(0, 0%, 95%)" },
    { value: "9", bg: "hsl(180, 1%, 19%)", color: "hsl(0, 0%, 95%)" },
    { value: "x", bg: "hsl(37, 95%, 49%)", color: "hsl(0, 0%, 95%)" },
    { value: "4", bg: "hsl(180, 1%, 19%)", color: "hsl(0, 0%, 95%)" },
    { value: "5", bg: "hsl(180, 1%, 19%)", color: "hsl(0, 0%, 95%)" },
    { value: "6", bg: "hsl(180, 1%, 19%)", color: "hsl(0, 0%, 95%)" },
    { value: "-", bg: "hsl(37, 95%, 49%)", color: "hsl(0, 0%, 95%)" },
    { value: "1", bg: "hsl(180, 1%, 19%)", color: "hsl(0, 0%, 95%)" },
    { value: "2", bg: "hsl(180, 1%, 19%)", color: "hsl(0, 0%, 95%)" },
    { value: "3", bg: "hsl(180, 1%, 19%)", color: "hsl(0, 0%, 95%)" },
    { value: "+", bg: "hsl(37, 95%, 49%)", color: "hsl(0, 0%, 95%)" },
    {
      value: "0",
      bg: "hsl(180, 1%, 19%)",
      color: "hsl(0, 0%, 95%)",
      zero: true,
    },
    { value: ".", bg: "hsl(180, 1%, 19%)", color: "hsl(0, 0%, 95%)" },
    { value: "=", bg: "hsl(37, 95%, 49%)", color: "hsl(0, 0%, 95%)" },
  ];
  const displayButtons = () =>
    buttons.map((item) => (
      // eslint-disable-next-line react/jsx-key
      <Button
        value={item.value}
        background={item.bg}
        color={item.color}
        zero={item.zero}
      />
    ));
  var today = new Date();
  var time: String =
    today.getHours() +
    ":" +
    (today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes());

  return (
    <>
      <Head>
        <title>Nicu trying to learn next</title>
        <meta name="description" content="Description here." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.calculator}>
          <div className={styles.camera}></div>
          <div className={styles.bar}>
            <p>{time}</p>
            <div>
              <TbAntennaBars5 size={"0.8rem"} />
              <BsWifi size={"0.8rem"} style={{ marginLeft: "3px" }} />
              <BsBatteryFull size={"0.8rem"} style={{ marginLeft: "3px" }} />
            </div>
          </div>
          <div className={styles.display}>
            <h1></h1>
          </div>
          <div className={styles.buttons}>{displayButtons()}</div>
          <div className={styles.footer}></div>
        </div>
      </main>
    </>
  );
}
