"use client";

import { Chart } from "chart.js/auto";
import { useEffect } from "react";

export default function Classified() {
	(async function () {
		let data = [];

		const res = await fetch("https://x.stolav.net/api/data");
        const da = await res.json()
		for (const key in da) {
			data.push({x: key, y: da[key]})
		}

		new Chart("chartJS", {
			type: "line",
			data: {
				labels: data.map((row) => row.x),
				datasets: [
					{
						label: "Test",
						data: data.map((row) => row.y),
					},
					{
						label: "Test2",
						data: data.map((row) => row.y + -12),
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
