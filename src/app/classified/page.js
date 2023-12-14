"use client";

import { Chart } from "chart.js/auto";
import { useRouter } from "next/navigation";

export default function Classified() {
	(async function () {
		// Check to see if the user has permission to access the page
		// aka check to see if the api is true

		const router = useRouter()

		const restrictedRes = await fetch("https://x.stolav.net/api/classified");
		const restrictedData = await restrictedRes.json();
		console.log(restrictedData);

		if (!restrictedData) {
			router.push("/");
		}

		// Fetch data for the chart
		const res = await fetch("https://x.stolav.net/api/data");
        const data = await res.json()
		console.log(data)
		
		// Create a new chart and plot the data
		new Chart("chartJS", {
			type: "line",
			data: {
				labels: ['60min', '55min', '50min', '45min', '40min', '35min', '30min', '25min', '20min', '15min', '10min', '5min']
				,
				datasets: [
					{
						label: "Temperature (C)",
						data: data[0].map((index) => index),
					},
					{
						label: "Humidity (%)",
						data: data[1].map((index) => index),
					},
				],
			},
			options: {
				devicePixelRatio: 1
			}
		});
	})();

	return (
		<>
			<p>You are currently at the classified section.</p>
			<canvas width={1920} id="chartJS"></canvas>
		</>
	);
}
