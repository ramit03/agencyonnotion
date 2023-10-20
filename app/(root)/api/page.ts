
import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import type { NextApiRequest } from "next";

mailchimp.setConfig({
  apiKey: process.env.MAIL_CHIMP_KEY,
  server: process.env.MAILCHIMP_API_SERVER
})

export default async function POST(email: string, name: string) { 
  const mail = email;
  const fName = name;
  const listId  = "316514";
  try {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: mail,
      status: "subscribed",
      merge_fields: {
        FNAME: fName,
      }
    });

    console.log(`Successfully added contact as an audience member. The contact's id is ${response}.`);
  }

  catch(error: any) {
    console.error(`Error: ${error}`);
  }
}

