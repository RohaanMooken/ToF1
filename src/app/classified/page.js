"use client";

import { Chart } from "chart.js/auto";
import { useEffect } from "react";

export default function Classified() {
	(async function () {
		const data = [
			{ x: 0, y: 10 },
			{ x: 1, y: 20 },
			{ x: 2, y: 30 },
			{ x: 3, y: 20 },
			{ x: 4, y: 50 },
			{ x: 5, y: -60 },
			{ x: 6, y: 70 },
			{ x: 7, y: 80 },
		];

		new Chart(document.getElementById("chartJS"), {
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
