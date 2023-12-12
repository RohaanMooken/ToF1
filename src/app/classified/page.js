"use client";

import { Chart } from "chart.js/auto";
import { useEffect } from "react";

export default function Classified() {
	(async function () {
		// let data = [];

		const res = await fetch("https://x.stolav.net/api/data");
        const data = await res.json()
		console.log(data)
		// for (const key in da) {
		// 	data.push({x: key, y: da[key]})
		// }

		new Chart("chartJS", {
			type: "line",
			data: {
				labels: ["5min", "10min", "15min", "20min", "25min", "30min", "35min", "40min", "45min", "50min", "55min", "60min"],
				datasets: [
					{
						label: "Test",
						data: data[0].map((index) => index),
					},
					{
						label: "Test2",
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
