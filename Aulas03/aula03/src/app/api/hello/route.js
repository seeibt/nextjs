export async function GET(request) {
    return new Response("Hello world from the Workers API!");
}
export async function POST(request) {
    const { name } = await request.json();
    return new Response(`Hello ${name} from the Workers API!`);
}
export async function PUT(request) {
    const { name } = await request.json();
    return new Response(`Hello ${name} from the Workers API!`);
}
export async function DELETE(request) {
    const { name } = await request.json();
    return new Response(`Hello ${name} from the Workers API!`);
}