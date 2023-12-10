let data = [];

export async function POST(request) {
	const recData = await request.json();
	// console.log(recData);
	// for (const key in recData) {
	//     const val = recData[key];
	//     console.log(key ,val);
	// }

	data = recData;

	return new Response();
}

export async function GET(request) {
	return Response.json(data);
}
