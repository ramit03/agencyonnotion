import mailchimp from '@mailchimp/mailchimp_marketing';
mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: 'us21',
  });
  
  const listId = '316514'

  export default async function handler (req: { body: { name: any; email: any; }; }) {
    const { name, email } = req.body;
    try{
    const response = await mailchimp.lists.addListMember(listId, {
        email_address : email,
        merge_fields: {
          marge_fields: {
            FNAME: name,
        },
        }
      });
      console.log(`Successfully added contact`);
   
    } catch (error:any) {
      console.error(`Error adding member to list: ${error.message}`);
    }
  }