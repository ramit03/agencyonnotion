
import { NextResponse } from "next/server";

export default async function POST(req) {
  const { email,name } = await req.json();
  
  const MailchimpKey = process.env.MAILCHIMP_API_KEY;
  const MailchimpServer = process.env.MAILCHIMP_API_SERVER;
  const MailchimpAudience = process.env.MAILCHIMP_AUDIENCE_ID;

  const customUrl = `https://${MailchimpServer}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members`;

  const response = await fetch(customUrl, {
    method: "POST",
    headers: {
      Authorization: `apikey ${MailchimpKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      marge_fields: {
        FNAME: name,
    },
      status: "subscribed",
    }),
  });
  const received = await response.json();
  return NextResponse.json(received);
}