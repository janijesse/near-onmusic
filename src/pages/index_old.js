import Image from "next/image";
import dynamic from "next/dynamic";

import NearLogo from "/public/near.svg";
import styles from "@/styles/app.module.css";

const VideoPlayer = dynamic(() => import("@/components/videoPlayer"), {
  ssr: false,
});

// Import your wallet implementation
import { wallet } from "@path/to/your/wallet"; // Replace with your wallet path

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Use state to manage login status

  // Setup on page load (assuming wallet is available)
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const isSignedIn = await wallet.startUp();
        setIsLoggedIn(isSignedIn);
      } catch (error) {
        console.error("Error checking login status:", error);
        // Handle login check error (optional)
      }
    };

    if (wallet) {
      checkLogin();
    }
  }, []); // Empty dependency array to run only once on mount

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

        {isLoggedIn ? (
          <div className={styles.videoContainer}>
            <VideoPlayer />
          </div>
        ) : (
          <button className={styles.loginButton}>Login</button>
        )}

        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
}

