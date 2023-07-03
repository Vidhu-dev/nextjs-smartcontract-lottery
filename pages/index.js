import Head from "next/head"
import ManualHeader from "../components/ManualHeader.jsx"
import styles from "../styles/Home.module.css"
import Header from "../components/Header.js"
import LotteryEntrance from "../components/LotteryEntrance.js"
const Home = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
            <meta name="description" content="Our smart contract"  ></meta>
            <link rel="icon" href="/favicon.ico"></link>
            </Head>
            {/* <ManualHeader /> */}
            <Header/>
            <LotteryEntrance/>
        </div>
    )
}

export default Home
