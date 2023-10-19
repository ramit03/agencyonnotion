import axios from "axios";
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: 'ux21',
});

const listId = '316514'

export default async function handler(req,res){
  console.log(req.body,"name")
  const { name, email } = req.body;

  try {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address : email,
      merge_fields: {
        marge_fields: {
          FNAME: name,
      },
      }
    });
    res.status(200).json({ success: true, message: `Successfully added contact `});
  } catch (error:any) {
    res.status(500).json({ success: false,  error: `Error adding member to list: ${error}`  });
  }
}