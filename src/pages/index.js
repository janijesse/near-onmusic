import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import NearLogo from "/public/near.svg";
import styles from "@/styles/app.module.css";
import '@radix-ui/colors/green.css';
import OnLogo from "/public/logoOn.png";

const VideoPlayer = dynamic(() => import("@/components/videoPlayer"), {
  ssr: false,
});

export default function Home() {
  const [isSignedIn, setisSignedIn] = useState(false);

  return (
    <>
      <main className={styles.main}>
        <div className="grid_cardBody__F0Wii">
          <div className={styles.headerContent}>
            
             
        {isSignedIn ? (
          <div className={styles.videoContainer}>
            <VideoPlayer />
          </div>
        ) : (
          <>
          <Image
            className={styles.logo}
            src={NearLogo}
            alt="NEAR Logo"
            width={55 * 1.5}
            height={14 * 1.5}
            priority
          />
          <div>
            <p style={{ fontSize: "5.5rem" }} className={styles.logo}>
              OnMusic
            </p>
          </div>
          
        </>
        )}
          
           
         
          </div>
        </div>

        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}>
        {/* <div className={styles.menu}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div> */}
      </footer>
    </>
  );
}
