import React from "react";

function page() {
  return (
    <section className="flex flex-col md:mt-6 mt-16  w-full px-20 py-12 lg:gap-8  gap-4">
      <h1 className="justify-center text-center header lg:mt-[100px]  md:mt-[50px] mt-[12px]">
        Agency on Notion Refund & Cancellation Policy
      </h1>
      <p className="subheader_2 ">Last Updated: 19/10/2023</p>
      <p className="subheader_2">
      Welcome to Agency on Notion! This Refund & Cancellation Policy outlines the terms and conditions regarding refunds and cancellations for our courses.
      </p>
      <p className="subheader_2">
      By registering for our courses, you agree to the terms of this policy.
      </p>
      <h2 className="header">Refunds</h2>

      <h2 className="header_2 my-0">Eligibility</h2>

      <ol className="subheader_2 list-decimal ml-6">
        <li>Refunds will be provided only in cases where the course is canceled by Redendron Media.</li>
        <li>No refunds will be issued for participant-initiated cancellations.</li>
      </ol>

      <h2 className="header_2">Process</h2>
      <ol className="subheader_2 list-decimal ml-6">
        <li>If a course is canceled by Agency on Notion, registered participants will be notified via email, and a full refund will be issued within 7 business days.</li>
        <li>For participant-initiated cancellations, no refunds will be provided.</li>
      </ol>

      <h2 className="header">Cancellations</h2>
      <h2 className="header_2">Participant-Initiated Cancellations</h2>
      <ol className="subheader_2 list-decimal ml-6">
        <li>Participants may cancel their registration at any time by contacting us at <span className="cursor-pointer text-[#2964AA]"> team@redendron.com</span>.</li>
        <li>No refunds will be issued for participant-initiated cancellations.</li>
      </ol>
      
      <h2 className="header_2">Agency on Notion-Initiated Cancellations</h2>
      <ol className="subheader_2 list-decimal ml-6">
        <li>Redendron Media reserves the right to cancel a course at any time due to unforeseen circumstances or insufficient registrations.</li>
        <li>In the event of a Redendron Media-initiated cancellation, registered participants will be notified via email, and a full refund will be issued within 7 business days.</li>
      </ol>

      <h2 className="header_2">Contact Us</h2>
      <p className="subheader_2 mb-20">If you have any questions or concerns about this Privacy Policy, please contact us at  <span className="cursor-pointer text-[#2964AA]"> team@redendron.com</span>.</p>
    </section>
  );
}

export default page;
