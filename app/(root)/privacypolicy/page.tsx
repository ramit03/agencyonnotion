import React from "react";

function page() {
  return (
    <section className="flex flex-col md:mt-6 mt-16  w-full px-20 py-12 lg:gap-8  gap-4">
      <h1 className="justify-center text-center header lg:mt-[100px]  md:mt-[50px] mt-[12px]">
        Agency on Notion Privacy Policy
      </h1>
      <p className="subheader_2 lg:text-[24px]">Last Updated: 19/10/2023</p>
      <p className="subheader_2">
        Welcome to Agency on Notion! This Privacy Policy outlines how we collect,
        use, disclose, and protect the personal information provided to us when
        you register for our webinars.
      </p>
      <p className="subheader_2">
      By providing your personal information, you consent to the practices described in this Privacy Policy.
      </p>
      <h2 className="header_2">Information We Collect</h2>
      <p className="subheader_2">We collect and store the following personal information:</p>
      <ul className="subheader_2 list-disc ml-6">
        <li><span className="font-bold">Name: </span>This is used for identification purposes during the webinar.</li>
        <li><span className="font-bold">Email Address: </span>This is used to send you webinar details and updates.</li>
      </ul>
      <h2 className="header_2">How We Use Your Information</h2>
      <p className="subheader_2">We use the information you provide for the following purposes:</p>
      <ul className="subheader_2 list-disc ml-6">
        <li><span className="font-bold">Webinar Registration: </span>Your name and email address are used to reserve your seat for the webinar.</li>
        <li><span className="font-bold">Communication: </span>We may contact you with updates or important information related to the webinar.</li>
      </ul>
      <h2 className="header_2">Disclosure of Your Information</h2>
      <p className="subheader_2">We will not share, sell, or distribute your personal information to third parties unless required by law.</p>
      
      <h2 className="header_2">Security</h2>
      <p className="subheader_2">We take reasonable steps to protect your personal information from unauthorized access or disclosure. However, please be aware that no method of transmission over the internet is entirely secure.</p>

      <h2 className="header_2">Your Choices</h2>
      <p className="subheader_2">If you wish to modify or remove your registration information, please contact us at <span className="cursor-pointer text-[#2964AA]"> team@redendron.com</span>.</p>

      <h2 className="header_2">Changes to this Policy</h2>
      <p className="subheader_2">We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date of the last update will be modified accordingly.</p>

      <h2 className="header_2">Contact Us</h2>
      <p className="subheader_2 mb-20">If you have any questions or concerns about this Privacy Policy, please contact us at  <span className="cursor-pointer text-[#2964AA]"> team@redendron.com</span>.</p>
    </section>
  );
}

export default page;
