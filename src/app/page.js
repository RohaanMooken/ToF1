"use client"

import Image from "next/image";
import blockIcon from "../../public/stop-blocked-icon.svg";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api");
        const data = await res.json()

        if (data) {
        router.push("/classified");
        }
      } catch (err) {
        console.error(err)
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

	return (
		<>
			<Image src={blockIcon}></Image>
			<p>
				You currently do not have the appropriate permissions to access the
				classified information.
			</p>
		</>
	);
}
