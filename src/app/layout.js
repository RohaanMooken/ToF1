import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "X",
	description: "ToF1 prosjekt laget av Rohaan Mooken og Daniel Boye",
};
export default function RootLayout({ children }) {

	return (
		<html lang="en">
			<body className={inter.className}>
				<div>
					<header>
						<div className="flex flex-row items-center justify-between">
							<a href="/" className="ml-8 mt-4 font-black text-4xl">
								<h1 className="text-primary">X</h1>
							</a>
						</div>
					</header>
					<main className="flex h-screen flex-col items-center justify-between p-24">
						<div className="bg-secondary p-8 rounded-3xl flex flex-col items-center justify-between h-3/6">
							{children}
						</div>
					</main>
				</div>
			</body>
		</html>
	);
}
