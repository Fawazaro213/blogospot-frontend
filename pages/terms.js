import React from "react";
import styles from "@/styles/policy/Terms.module.css";
import { useSelector } from "react-redux";

const Terms = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div
      className={`${styles.container} ${
        theme === "true" ? styles.dark : styles.light
      }`}
    >
      <div className={styles.content}>
        <h2>
          <strong>Terms and Conditions</strong>
        </h2>

        <p>
          Welcome to <span id="M_C1">Blog 'O' Spot</span>!
        </p>

        <p>
          These terms and conditions lay forth the groundwork for using{" "}
          <span id="M_C2">Blog 'O' Spot</span> website, which may be found at{" "}
          <span id="M_Curl">https://blogospot-frontend.vercel.app/</span>
        </p>

        <p>
          We assume that by accessing this website, you agree to these terms and
          conditions. If you do not agree to all of the terms and conditions
          listed on this page, do not use <span id="M_C3">Blog 'O' Spot</span>.
        </p>

        <p>
          These Terms and Conditions, Privacy Statement and Disclaimer Notice,
          and all Agreements are governed by the following terminology:
          "Client," "You," and "Your" refer to you, the person who logs on to
          this website and agrees to the Company's terms and conditions. Our
          Company is referred to as "The Company," "Ourselves," "We," "Ours,"
          and "Us." Both the Client and ourselves are referred to as "Party,"
          "Parties," or "Us."All terms refer to the offer, acceptance, and
          consideration of payment necessary to begin the process of our
          assistance to the Client in the most appropriate manner for the
          express purpose of meeting the Client's needs in respect of the
          Company's specified services, in line with and subject to, applicable
          Dutch legislation. Any use of the above language, as well as other
          words in the singular, plural, capitalization, and/or he/she or they,
          is assumed to mean the same thing.
        </p>

        <h3>
          <strong>Cookies</strong>
        </h3>

        <p>
          Cookies are used on this site. You accepted to use cookies in
          accordance with the <span id="M_C4">Blog 'O' Spot</span> Privacy
          Policy by visiting <span id="M_C5">Blog 'O' Spot</span>{" "}
        </p>

        <p>
          Cookies are used by most interactive websites to allow us to retrieve
          the user's information for each visit. Cookies are used on our website
          to allow specific areas to work and to make things easier for users.
          Certain of our affiliate/advertising partners may also utilize
          cookies.
        </p>

        <h3>
          <strong>License</strong>
        </h3>

        <p>
          Unless otherwise stated, all intellectual property rights in all
          material on <span id="M_C6">Blog 'O' Spot</span> are owned by{" "}
          <span id="M_C7">Blog 'O' Spot</span> and/or its licensors. All rights
          to intellectual property are reserved. You may use this for your own
          personal use from <span id="M_C8">Blog 'O' Spot</span>, subject to the
          restrictions set forth in these terms and conditions.
        </p>

        <p>You must not:</p>
        <ul>
          <li>
            Republish material from <span id="M_C9">Blog 'O' Spot</span>
          </li>
          <li>
            Sell, rent, or sub-license material from{" "}
            <span id="M_C10">Blog 'O' Spot</span>
          </li>
          <li>
            Reproduce, duplicate or copy material from{" "}
            <span id="M_C11">Blog 'O' Spot</span>
          </li>
          <li>
            Redistribute content from <span id="M_C12">Blog 'O' Spot</span>
          </li>
        </ul>

        <p>
          This agreement's term begins on the date hereof. The{" "}
          <a href="https://blogospot-frontend.vercel.app/">
            Terms And Conditions Generator
          </a>{" "}
          and the{" "}
          <a href="https://blogospot-frontend.vercel.app/">
            Privacy Policy Generator
          </a>{" "}
          were used to construct our Terms and Conditions.
        </p>

        <p>
          Parts of this website allow users to post and exchange thoughts and
          information in designated places. Prior to their appearance on the
          Internet, <span id="M_C13">Blog 'O' Spot</span> does not filter, edit,
          publish, or review Comments. The thoughts and opinions expressed in
          the comments do not reflect those of{" "}
          <span id="M_C14">Blog 'O' Spot</span>, its agents, or affiliates. The
          views and opinions expressed in comments reflect the views and
          opinions of the individual who posted them.{" "}
          <span id="M_C15">Blog 'O' Spot</span> shall not be liable for the
          Comments or for any liabilities, damages, or expenses caused and/or
          suffered as a result of the use of and/or posting of and/or appearance
          of the Comments on this website, to the extent permitted by applicable
          laws.
        </p>

        <p>
          <span id="M_C16">Blog 'O' Spot</span> has the right to review all
          Comments and to remove any Comments that are inappropriate, offensive,
          or violate our Terms and Conditions.
        </p>

        <p>You warrant and represent that:</p>

        <ul>
          <li>
            You have the essential rights and consent to post the Comments on
            our website, and you have been given permission to do so.
          </li>
          <li>
            No third-party intellectual property rights, such as copyright,
            patents, or trademarks, are infringed upon by the Comments.
          </li>
          <li>
            In the Comments, there is no defamatory, libelous, offensive,
            indecent, or otherwise unlawful content that constitutes a privacy
            invasion.
          </li>
          <li>
            The Comments will not be used to solicit or promote any type of
            business, custom, or current commercial or illegal activity.
          </li>
        </ul>

        <p>
          You hereby grant <span id="M_C17">Blog 'O' Spot</span> a non-exclusive
          license to use, reproduce, edit, and authorize others to use,
          reproduce, edit, and authorize others to use, reproduce, edit, and
          authorize others to use, reproduce, and edit any of your Comments in
          any form, format, or media.
        </p>

        <h3>
          <strong>Hyperlinking to our Content</strong>
        </h3>

        <p>
          Without prior written permission, the following organizations may link
          to our website:
        </p>

        <ul>
          <li>Government agencies;</li>
          <li>Search engines;</li>
          <li>News organizations;</li>
          <li>
            Distributors of online directories may link to our website in the
            same way that they connect to the websites of other businesses
            included in the directory.; and
          </li>
          <li>
            Except for soliciting non-profit organizations, charity shopping
            malls, and charity fundraising clubs, which are not permitted to
            link to our website.
          </li>
        </ul>

        <p>
          These organizations may link to our home page, publications, or other
          Website content as long as the link complies with the following
          criteria: (a) is not in any way deceptive; (b) does not suggest that
          the connecting party or its products and/or services are sponsored,
          endorsed, or approved in any way; and (c) ties nicely with the theme
          of the linking party's website.
        </p>

        <p>
          Other link requests from the following categories of organizations may
          be considered and approved:
        </p>

        <ul>
          <li>commonly-known consumer and/or business information sources;</li>
          <li>dot.com community sites;</li>
          <li>associations or other groups representing charities;</li>
          <li>online directory distributors;</li>
          <li>internet portals;</li>
          <li>accounting, law, and consulting firms; and</li>
          <li>educational institutions and trade associations.</li>
        </ul>

        <p>
          We will approve link requests from these organizations if we determine
          that: (a) the link will not reflect poorly on us or our accredited
          businesses; (b) the organization has no negative records with us; (c)
          the benefit to us from the visibility of the hyperlink compensates for
          the absence of <span id="M_C18">Blog 'O' Spot</span> and (d) the link
          will be in the context of general resource information.
        </p>

        <p>
          These organizations are welcome to link to our home page as long as
          the link: (a) is not misleading; (b) does not falsely imply
          sponsorship, endorsement, or approval of the linking party or its
          products or services; and (c) is appropriate for the linking party's
          website.
        </p>
        <p>
          Please contact us by email at <span id="M_C19">Blog 'O' Spot</span> if
          you are one of the organizations listed in paragraph 2 above and would
          want to link to our website. Include your name, the name of your
          organization, contact information, and the URL of your website, as
          well as a list of any URLs from which you intend to link to our site
          and a list of the URLs on our site to which you would like to connect.
          Expect a response in two to three weeks.
        </p>

        <p>
          Approved organizations may use the following URL to link to our
          website:
        </p>

        <ul>
          <li>By use of our corporate name; or</li>
          <li>
            The usage of a unified resource locator (URL) that is linked to; or
          </li>
          <li>
            By describing our Website in any other way that makes sense in the
            context and format of the linked party's website's content.
          </li>
        </ul>

        <p>
          There will be no use of <span id="M_C20">Blog 'O' Spot</span> logo or
          any artwork for linking without a trademark license agreement.
        </p>

        <h3>
          <strong>iFrames</strong>
        </h3>

        <p>
          Without prior approval and written agreement, you may not put frames
          around our Webpages that alter the visual presentation or look of our
          Website.
        </p>

        <h3>
          <strong>Content Liability</strong>
        </h3>

        <p>
          We are not responsible for any of the content on your website. You
          agree to defend and indemnify us in the event of any disputes arising
          from your Website. On any Website, there should be no link(s) that
          could be regarded as defamatory, obscene, or illegal, or that
          infringes, otherwise violates, or encourages the infringement or other
          violation of any third-party rights.
        </p>

        <h3>
          <strong>Your Privacy</strong>

          <p>Please read Privacy Policy</p>
        </h3>

        <h3>
          <strong>Reservation of Rights</strong>

          <p>
            We reserve the right to request that you delete any and all
            connections to our Website or particular links to our Website. Upon
            our request, you undertake to immediately disconnect any connections
            to our website. These terms and conditions, as well as the linking
            policy, are subject to change at any time. If you continue to link
            to our Website, you agree to be bound by and comply with these
            linking terms and conditions.
          </p>
        </h3>

        <h3>
          <strong>Removal of links from our website</strong>
        </h3>

        <p>
          If you find any link on our Website that is offensive for any reason,
          you are invited to contact us and notify us at any time. We will
          examine requests to remove links, but we are not obligated to do so or
          to respond to you personally.
        </p>

        <p>
          We offer no assurances that the information on this website is
          correct, complete, or accurate, that the website will be available, or
          that the material on the website will be kept up to date.
        </p>

        <h3>
          <strong>Disclaimer</strong>
        </h3>

        <p>
          To the largest extent permitted by applicable law, we disclaim any and
          all claims, warranties, and conditions relating to this website and
          its use. Nothing in this disclaimer should be construed as:
        </p>

        <ul>
          <li>
            minimize or eliminate our or your responsibility in the case of
            death or personal injury
          </li>
          <li>
            limit or exclude our or your liability for fraud or dishonesty;
          </li>
          <li>
            limit any of our or your liabilities in any way that is not allowed
            by law; or
          </li>
          <li>
            exclude any of our or your liabilities that are not permitted by
            relevant law to be excluded.
          </li>
        </ul>

        <p>
          The liability restrictions and prohibitions set out in this section
          and elsewhere in this disclaimer are as follows: (a) are bound by the
          provisions of the previous paragraph; and (b) All responsibilities
          arising under the disclaimer are regulated by these terms, including
          those originating in contract, tort, or for breach of statutory duty.
        </p>

        <p>
          We will not be liable for any loss or damage of any kind as long as
          the website and the information and services on the website are
          offered free of charge.
        </p>
      </div>
    </div>
  );
};

export default Terms;
