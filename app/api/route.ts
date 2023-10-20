import { NextResponse, NextRequest } from 'next/server';
const API_Key = process.env.CONVERTKIT_API_KEY
const FORM_ID = process.env.CONVERTKIT_FORM_ID 
const BASE_URL = 'https://api.convertkit.com/v3';

interface ParsedBody {
  email?: string;
  name?: string;
  [key: string]: any;
}


export async function POST(req: NextRequest) {
  let parsedBody: ParsedBody;
  try {
    parsedBody = await parseRequestBody(req);
  } catch (error) {
    return new NextResponse("Invalid request body", { status: 400 });
  }


  const email = parsedBody.email;
  const name =parsedBody.name;
  if (!email || !name) {
    return new NextResponse("Error 400", { status: 400 });
  }
  try {
    const url = [BASE_URL, `forms`, FORM_ID, 'subscribe'].join('/');
    const data = {
      api_key: API_Key,
      email: email,
      name: name,
    };

    const response = await fetch(url, {
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
    });

    if (response.status === 200) {
      return NextResponse.json({ message: 'Success' });
  } else if (response.status === 400) {
      const data = await response.json();
      return new NextResponse(data.message || "Error", { status: 400 });
  } else {
    return new NextResponse("Error 500", { status: 500 });
  }
  } catch (error) {
    console.log('Error', error);
    return new NextResponse("Error 500 2", { status: 500 });
  }
}

async function parseRequestBody(req: NextRequest): Promise<ParsedBody> {
  const rawBody = await req.text();
  try {
    return JSON.parse(rawBody);
  } catch (e) {
    throw new Error('Failed to parse JSON body');
  }
}