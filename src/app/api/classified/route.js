let condition = false;

export async function POST(request) {
    const data = await request.json()

    condition = data;

    return new Response();
}

export async function GET(request) {

    return new Response(condition);
}