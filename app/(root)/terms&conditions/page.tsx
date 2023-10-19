import React from "react";

function page() {
  return (
    <section className="flex flex-col md:mt-6 mt-16  w-full px-20 py-12 lg:gap-8  gap-4">
      <h1 className="justify-center text-center header lg:mt-[100px]  md:mt-[50px] mt-[12px]">
        Agency on Notion Terms and Conditions
      </h1>
      <p className="subheader_2 ">Last Updated: 19/10/2023</p>
      <ol className="header_2 list-decimal space-y-6 md:ml-16 ml-0 mb-10">
        <li>
          Registration
          <ol className="subheader_2 list-decimal space-y-2 md:ml-6 ml-2">
            <li>
              <span className="font-bold">Eligibility: </span>Webinars are open
              to participants who meet the specified eligibility criteria stated
              on the registration page.
            </li>
            <li>
              <span className="font-bold">Accuracy of Information: </span>You
              agree to provide accurate and complete information during the
              registration process.
            </li>
          </ol>
        </li>
        <li>
          Intellectual Property
          <ol className="subheader_2  space-y-2 list-decimal md:ml-6 ml-2">
            <li>
              <span className="font-bold">Ownership: </span>All content
              presented during the webinar, including but not limited to
              presentations, materials, and recordings, are the intellectual
              property of Agency on Notion.
            </li>
            <li>
              <span className="font-bold">Use of Materials: </span> Participants
              may not reproduce, distribute, or publicly display any materials
              provided during the webinar without prior written consent from
              Agency on Notion.
            </li>
          </ol>
        </li>
        <li>
        Conduct
          <ol className="subheader_2  space-y-2 list-decimal md:ml-6 ml-2">
            <li>
              <span className="font-bold">Professionalism: </span>Participants are expected to engage in respectful and professional behavior throughout the webinar.
            </li>
            <li>
              <span className="font-bold">Prohibited Activities:  </span> Participants may not engage in any activities that may disrupt the webinar or violate any applicable laws or regulations.
            </li>
          </ol>
        </li>
        <li>
        Limitation of Liability
          <ol className="subheader_2  space-y-2 list-decimal md:ml-6 ml-2">
            <li>
              <span className="font-bold">No Guarantees: </span>Agency on Notion does not guarantee the accuracy, completeness, or usefulness of any information presented during the webinar.
            </li>
            <li>
              <span className="font-bold"> Disclaimer: </span> Agency on Notion is not liable for any direct, indirect, incidental, or consequential damages arising out of or in connection with the webinar.
            </li>
          </ol>
        </li>
        <li>
        Privacy
          <ol className="subheader_2 space-y-2 list-decimal md:ml-6 ml-2">
            <li>
              <span className="font-bold">Privacy Policy: </span>By participating in the webinar, you agree to the terms outlined in our Privacy Policy.
            </li>
          </ol>
        </li>
        <li>
        Changes to Terms and Conditions
          <ol className="subheader_2  space-y-2 list-decimal md:ml-6 ml-2">
            <li>
              <span className="font-bold">Modification: </span>Redendron Media reserves the right to update or modify these Terms and Conditions at any time without prior notice.
            </li>
          </ol>
        </li>
        <li>
        Governing Law
          <ol className="subheader_2  space-y-2 list-decimal md:ml-6 ml-2">
            <li>
              <span className="font-bold">Jurisdiction </span>These Terms and Conditions are governed by the laws of the Republic of India, without regard to its conflict of laws principles.
            </li>
          </ol>
        </li>
        <li>
        Contact Us
          <ol className="subheader_2  space-y-2 list-decimal md:ml-6 ml-2">
            <li>
            If you have any questions or concerns about this Privacy Policy, please
        contact us at{" "}
        <span className="cursor-pointer text-[#2964AA]">
          {" "}
          team@redendron.com
        </span>
            </li>
          </ol>
        </li>
      </ol>
     
    </section>
  );
}

export default page;
