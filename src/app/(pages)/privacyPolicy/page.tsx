import type { Metadata } from "next";
import { privacyPolicy } from "@/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for MLV Web Inc.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function Home() {
  return (
    <section id="hero" className="w-full mt-[130px] px-4">
      <div>


        <h2>Privacy Policy</h2>
        <h5>Last updated May 01, 2024</h5>

        <p className="mt-[100px] text-[24px]">This privacy notice for {privacyPolicy.nameOfCompany} (&apos;we,&apos; &apos;us,&apos; or &apos;our&apos;), describes how and why we might collect, store, use, and/or share (&apos;process&apos;) your information when you use our services (&apos;Services&apos;), such as when you:<br /><br />

          Visit our website at {privacyPolicy.urlToHomePage}, or any website of ours that links to this privacy notice<br /><br />

          Engage with us in other related ways, including any sales, marketing, or events<br /><br />

          Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at {privacyPolicy.email}.<br /><br />
        </p>

        <h3 className="mt-[100px] md:text-[2.5rem] text-[2rem] text-gray">SUMMARY OF KEY POINTS</h3>

        <p className="mt-[10px] text-[24px]">
          This summary provides key points from our privacy notice.<br /><br />

          What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.<br /><br />

          Do we process any sensitive personal information? We do not process sensitive personal information.<br /><br />

          Do we receive any information from third parties? We do not receive any information from third parties.<br /><br />

          How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.<br /><br />

          In what situations and with which types of parties do we share personal information? We may share information in specific situations and with specific categories of third parties.<br /><br />

          How do we keep your information safe? We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.<br /><br />

          What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.<br /><br />

          Want to learn more about what we do with any information we collect? Review the privacy notice in full.<br /><br />
        </p>

        <h3 className="mt-[100px] md:text-[2.5rem] text-[2rem] text-gray">1. WHAT INFORMATION DO WE COLLECT?</h3>
        <p className="mt-[10px] text-[24px]">
          Personal information you disclose to us<br /><br />

          In Short: We collect personal information that you provide to us.<br /><br />

          We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.<br /><br />

          Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:<br /><br />

          names<br /><br />

          phone numbers<br /><br />

          email addresses<br /><br />

          mailing addresses<br /><br />

          contact preferences<br /><br />

          contact or authentication data<br /><br />

          files<br /><br />

          Sensitive Information. We do not process sensitive information.<br /><br />

          All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.<br /><br />

          Information automatically collected<br /><br />

          In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.<br /><br />

          We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.<br /><br />

          The information we collect includes:<br /><br />

          Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called &apos;crash dumps&apos;), and hardware settings).<br /><br />

          Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.<br /><br />

          Location Data. We collect location data such as information about your device&apos;s location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.<br /><br />
        </p>

        <h3 className="mt-[100px] md:text-[2.5rem] text-[2rem] text-gray">2. HOW DO WE PROCESS YOUR INFORMATION?</h3>
        <p className="mt-[10px] text-[24px]">
          In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.<br /><br />

          We process your personal information for a variety of reasons, depending on how you interact with our Services, including:<br /><br />

          To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.<br /><br />

          To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.<br /><br />

          To send you marketing and promotional communications. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see &apos;WHAT ARE YOUR PRIVACY RIGHTS?&apos; below.<br /><br />
        </p>

        <h3 className="mt-[100px] md:text-[2.5rem] text-[2rem] text-gray">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h3>
        <p className="mt-[10px] text-[24px]">
          In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.<br /><br />

          We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.<br /><br />

          In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:<br /><br />

          If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way<br /><br />

          For investigations and fraud detection and prevention<br /><br />

          For business transactions provided certain conditions are met<br /><br />

          If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim<br /><br />

          For identifying injured, ill, or deceased persons and communicating with next of kin<br /><br />

          If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse<br /><br />

          If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province<br /><br />

          If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records<br /><br />

          If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced<br /><br />

          If the collection is solely for journalistic, artistic, or literary purposes<br /><br />

          If the information is publicly available and is specified by the regulations<br /><br />
        </p>

        <h3 className="mt-[100px] md:text-[2.5rem] text-[2rem] text-gray">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h3>
        <p className="mt-[10px] text-[24px]">
          In Short: We may share information in specific situations described in this section and/or with the following categories of third parties.<br /><br />

          Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors, or agents (&apos;third parties&apos;) who perform services for us or on our behalf and require access to such information to do that work. The categories of third parties we may share personal information with are as follows:<br /><br />

          Data Analytics Services<br /><br />

          We also may need to share your personal information in the following situations:<br /><br />

          Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.<br /><br />

          Affiliates. We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.<br /><br />

          Business Partners. We may share your information with our business partners to offer you certain products, services, or promotions.<br /><br />
        </p>

        <h3 className="mt-[100px] md:text-[2.5rem] text-[2rem] text-gray">5. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
        <p className="mt-[10px] text-[24px]">
          In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.<br /><br />

          We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.<br /><br />

          When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.<br /><br />
        </p>

        <h3 className="mt-[100px] md:text-[2.5rem] text-[2rem] text-gray">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
        <p className="mt-[10px] text-[24px]">
          In Short: We aim to protect your personal information through a system of organizational and technical security measures.<br /><br />

          We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.<br /><br />
        </p>

        <h3 className="mt-[100px] md:text-[2.5rem] text-[2rem] text-gray">7. DO WE COLLECT INFORMATION FROM MINORS?</h3>
        <p className="mt-[10px] text-[24px]">
          In Short: We do not knowingly collect data from or market to children under 18 years of age.<br /><br />

          We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent&apos;s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at {privacyPolicy.email}.<br /><br />
        </p>

        <h3 className="mt-[100px] md:text-[2.5rem] text-[2rem] text-gray">8. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
        <p className="mt-[10px] text-[24px]">
          In Short: In some regions, such as Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.<br /><br />

          In some regions (like Canada), you have certain rights under applicable data protection laws. These may include the right to request access and obtain a copy of your personal information, to request rectification or erasure; to restrict the processing of your personal information; if applicable, to data portability; and not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section &apos;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&apos; below.<br /><br />

          We will consider and act upon any request in accordance with applicable data protection laws.<br /><br />

          Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section &apos;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&apos; below.<br /><br />

          However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.<br /><br />

          Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying &apos;STOP&apos; or &apos;UNSUBSCRIBE&apos; to the SMS messages that we send, or by contacting us using the details provided in the section &apos;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&apos; below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.<br /><br />

          Account Information<br /><br />

          If you would at any time like to review or change the information in your account or terminate your account, you can:<br /><br />

          Contact us using the contact information provided.<br /><br />

          Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.<br /><br />

          If you have questions or comments about your privacy rights, you may email us at {privacyPolicy.email}<br /><br />
        </p>

        <h3 className="mt-[100px] md:text-[2.5rem] text-[2rem] text-gray">9. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
        <p className="mt-[10px] text-[24px]">
          Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&apos;DNT&apos;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
        </p>

        <h3 className="mt-[100px] md:text-[2.5rem] text-[2rem] text-gray">10. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
        <p className="mt-[10px] text-[24px]">
          In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.

          We may update this privacy notice from time to time. The updated version will be indicated by an updated &apos;Revised&apos; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
        </p>

        <h3 className="mt-[100px] md:text-[2.5rem] text-[2rem] text-gray">11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
        <p className="mt-[10px] text-[24px]">
          If you have questions or comments about this notice, you may email us at {privacyPolicy.email}.
        </p>

        <h3 className="mt-[100px] md:text-[2.5rem] text-[2rem] text-gray">12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h3>
        <p className="mt-[10px] text-[24px]">
          Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please send an email to {privacyPolicy.email}.
        </p>
      </div>
    </section>
  );
}
