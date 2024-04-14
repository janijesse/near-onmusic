import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import NearLogo from "/public/near.svg";
import styles from "@/styles/app.module.css";
import '@radix-ui/colors/green.css';


const VideoPlayer = dynamic(() => import("@/components/videoPlayer"), {
  ssr: false,
});

export default function Home() {
  const[isSignedIn, setisSignedIn]= useState(false);
  return (
    <>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <Image
              className={styles.logo}
              src={NearLogo}
              alt="NEAR Logo"
              width={110 * 1.5}
              height={28 * 1.5}
              priority
            />
            <div className={styles.onMusicContainer}>
              <p style={{ fontSize: "5.5rem" }} className={styles.logo}>
                OnMusic
              </p>
            </div>
          </div>
        </div>
 <div className={styles.videoContainer}>
          <VideoPlayer />
        </div>

        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
}
