let condition = false;

export async function POST(request) {
    condition = true

    return new Response()
}

export async function GET(request) {

    if (condition) {
        condition = false;
        return new Response(true)
    } else {
        return new Response(false)
    }
}