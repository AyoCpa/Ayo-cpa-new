import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import React from "react";
import styles from "../styles/Home.module.css";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import { inter } from "@/utils/fonts";
import { Row, Col } from "antd";
import { HireFlash } from "@/components/PageFlash/HireFlash";
import { ServiceFlash } from "@/components/PageFlash/ServiceFlash";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";

function TermsOfUser() {
  return (
    <>
      <Head>
        <title>Terms of Use | Ayo & Company</title>
        <meta name="description" content="The terms of use for Ayo & company and related products and services." />
        <meta property="og:title" content="Terms of Use | Ayo & company" />
        <meta property="og:description" content="The terms of use for Ayo & company and related products and services." />
        <meta property="og:image" content="/terms-of-us.webp" />
        <meta property="og:type" content="website" />
      </Head>
    
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <FixedArrowUp />
      </section>

      <section className={styles.termsOfService}>
        <div className="text-white ml-10 mt-24">
          <SideBannerContent
            mainText="Terms of Use"
            currentPage="Terms of Use"
            
          />
        </div>
      </section>

      <section className={`${inter.variable} bg-[#e5e5e5] font-inter py-20`}>
        <Row justify={"center"}>
          <Col xs={22} lg={18}>
            <div className="text-[#1E1E1E]">
              <p className="py-4">
                Ayo & Company Professional Corporation makes available to you
                this website located at www.ayocpa.ca (the{" "}
                <span className="font-bold">“Website”</span> ) subject to your
                acceptance of and compliance with these website terms of use
                (the <span className="font-bold">“Terms of Use”</span> ). BY
                ACCESSING, BROWSING, AND/OR USING THIS WEBSITE YOU ARE
                ACKNOWLEDGING THAT YOU HAVE READ AND UNDERSTOOD THESE TERMS OF
                USE AND OUR PRIVACY POLICY AND THAT YOU AGREE TO BE BOUND BY ITS
                TERMS AND CONDITIONS. IF YOU CANNOT OR DO NOT AGREE WITH THESE
                TERMS OF USE OR OUR PRIVACY TERMS OF USE THEN DO NOT ACCESS OR
                USE THIS WEBSITE.
              </p>
              <p className="py-4">
                Ayo & Company Professional Corporation reserves the right, in
                its sole discretion, to update, revise, supplement, and modify
                these Terms of Use as well as to impose new or additional terms
                and conditions to these Terms of Use at any time. We will notify
                you of any changes to these Terms of Use by posting any revised
                draft on our Website. Your continued access or use of the
                Website after such modifications have been posted shall indicate
                your acceptance of and agreement to be bound by these Terms of
                Use as modified. It is your responsibility to review regularly
                these Terms of Use.
              </p>
              <p className="py-4">
                Ayo & Company Professional Corporation does not intentionally
                market its services to minors. If you are under 18, you will
                need to obtain your parent or guardian’s permission before you
                send any personal information to Ayo & Company Professional
                Corporation over the Internet. Parent or guardian participation,
                understanding of their children’s online usage, and awareness of
                the activities in which they are participating, are strongly
                encouraged.
              </p>
              <p className="font-bold py-4 text-xl">CONDITIONS OF USE</p>
              <p className="py-4">
                Except as may be expressly authorized by Ayo & Company
                Professional Corporation, any reproduction, modification or
                distribution of the Website materials or content, in whole or in
                part, is strictly prohibited. Notwithstanding the foregoing Ayo
                & Company Professional Corporation hereby grants to you a
                limited, non-transferrable license to view, download, and retain
                copies of this Website and materials published by Ayo & Company
                Professional Corporation on this Website for your personal,
                non-commercial use only, provided you do not remove or alter any
                copyright or other proprietary notices. You also agree that you
                will not use any part of this Website in such a way that
                suggests any type of relationship between Ayo & Company
                Professional Corporation and you or any entity related to you,
                unless you have received prior consent from Ayo & Company
                Professional Corporation
              </p>
              <p className="py-4">
                Ayo & Company Professional Corporation reserves the right to
                modify, change, discontinue or suspend the Website (and any
                services offered through the Website) in whole or in part, at
                any time, without prior notice to you. Ayo & Company
                Professional Corporation or any of its respective employees,
                agents, officers, directors or third-party service providers
                (collectively, “Ayo & Company Professional Corporation and Ayo &
                Company Professional Corporation Service Providers”) shall not
                be liable to you or any third party should Ayo & Company
                Professional Corporation exercise this right.
              </p>
              <p className="py-4">
                You represent and warrant that any information or materials you
                provide to Ayo & Company Professional Corporation or post on its
                Website is accurate, truthful, not misleading, not confidential
                property of third parties, does not violate third party rights,
                and is offered in good faith. This includes, but is not limited
                to, information provided as part of any registration, to gain
                access to, or for use of any service offered on the Website. In
                addition you agree not to use the Website in connection with any
                of the following activities: a) sending and relaying spam,
                impersonating another person or entity, falsely misrepresenting
                your identity or your affiliations; b) for illegal or fraudulent
                purposes; c) for transmitting or distributing any objectionable
                material that is illegal, harassing, defamatory, tortuous,
                sexually explicit, obscene, hateful, or racist; or d) for
                transmitting material that contain computer programs including
                but not limited to viruses, Trojan horses, worms, time bombs,
                and cancel bots, which are designed to disrupt, destroy, harm,
                or damage the operation of the Website or computer. Ayo &
                Company Professional Corporation reserves the right at any time,
                in its discretion, to remove any content or material provided or
                posted by you including, but not limited to, materials Ayo &
                Company Professional Corporation deems to be in violation of
                these Terms of Use.
              </p>
              <p className="font-bold py-4 text-xl">MONITORING INFORMATION</p>
              <p className="py-4">
                Ayo & Company Professional Corporation makes reasonable efforts
                to ensure that the information provided through the Website is
                current and accurate. Ayo & Company Professional Corporation
                makes no representations or warranties as to the accuracy,
                reliability, completeness or timeliness of such information.
              </p>
              <p className="font-bold py-4 text-xl">
                OWNERSHIP OF INTELLECTUAL PROPERTY
              </p>
              <p className="py-4">
                Ayo & Company Professional Corporation and its licensors own all
                rights, title and interest in the Website and you acquire no
                interest therein. The materials provided on the Website
                including, without limitation, all content, site design, text,
                graphics and the selection and arrangement thereof are protected
                by copyright. All rights are reserved. Any unauthorized use or
                any reproduction, modification or distribution of the materials
                is strictly prohibited. Nothing in these Terms of Use shall
                grant you any rights in or to the intellectual property or
                proprietary rights of Ayo & Company Professional Corporation or
                any third party. By providing or posting this material onto Ayo
                & Company Professional Corporation’s website you hereby grant to
                Ayo & Company Professional Corporation a nonexclusive, royalty
                free, perpetual, and irrevocable license which allows Ayo &
                Company Professional Corporation the right to use, edit, modify,
                adapt, reproduce, publish, distribute and display such material.
                You also hereby waive all moral rights you may have in such
                material. You represent and warrant that you own all rights to
                the material you post on our Website and therefore have the
                authority to grant such a license. Nothing on the Website shall
                be construed as granting, either expressly, by implication, by
                estoppel or otherwise, a licence or other right to you to use
                any trade-marks or trade-names of Ayo & Company Professional
                Corporation. The names of other companies, products or services
                referred to on the Website may be trade-marks or trade-names of
                their respective owners. Any unauthorized use of the trade-marks
                or trade-names of Ayo & Company Professional Corporation or of
                third parties is strictly prohibited.
              </p>
              <p className="py-4 font-bold text-xl">LINKS</p>
              <p className="py-4">
                Certain links on this Website lead to other websites (“Linked
                Sites”), which are owned and operated by independent parties
                over whom Ayo & Company Professional Corporation has no control.
                Use of any Linked Site is entirely at your own risk. Ayo &
                Company Professional Corporation makes no representations or
                warranties as to the accuracy or any other aspect of the
                information contained on the Linked Sites, including the goods
                or services sold or made available. Ayo & Company Professional
                Corporation therefore disclaims all liability and responsibility
                for the availability of information, content, accuracy,
                products, or services found on Linked Sites. The existence of a
                link from the Website to any third-party site does not
                constitute an endorsement by Ayo & Company Professional
                Corporation of the Linked Site or any goods, services or
                information provided through such Linked Sites. While Ayo &
                Company Professional Corporation encourages links to the
                Website, we do not wish to be linked to or from any third-party
                website which may be damaging or detrimental to the activities,
                operations, credibility or integrity of Ayo & Company
                Professional Corporation. Ayo & Company Professional Corporation
                reserves the right to prohibit or refuse to accept any link to
                the Website which contains or makes available any content or
                information that includes, without limitation, unlawful,
                threatening, abusive, racist, libellous, defamatory, obscene,
                vulgar, violent, pornographic, profane or indecent information
                of any kind. You agree to remove any link you may have to the
                Website upon the request of Ayo & Company Professional
                Corporation You may not use the Website in any manner which
                could damage, disable, overburden, or impair the Website or
                interfere with any other party’s use or enjoyment of the
                Website.
              </p>
              <p className="text-xl font-bold py-4">COMPLIANCE WITH LAWS</p>
              <p className="py-4">
                In addition to complying with these Terms of Use, you agree to
                use the Website and services available on or through the Website
                for lawful purposes only and in a manner consistent with local,
                national or international laws and regulations.
              </p>
              <p className="text-xl font-bold py-4">
                DISCLAIMERS, LIMITATIONS OF LIABILITY AND INDEMNIFICATION YOU
                UNDERSTAND AND AGREE THAT:
              </p>
              <p className="py-4">
                USE OF THE WEBSITE IS AT YOUR SOLE RISK. THE WEBSITE IS PROVIDED
                ON AN “AS IS”, “AS AVAILABLE” BASIS. AYO & COMPANY PROFESSIONAL
                CORPORATION DOES NOT PROVIDE ANY WARRANTIES, EXPRESS OR IMPLIED,
                INCLUDING BUT NOT LIMITED TO WARRANTIES REGARDING
                MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. AYO &
                COMPANY PROFESSIONAL CORPORATION DOES NOT WARRANT THAT USE OF
                THE WEBSITE WILL BE UNINTERRUPTED OR ERROR FREE; NOR DO WE MAKE
                ANY WARRANTY AS TO THE RESULTS THAT MAY BE OBTAINED FROM THE USE
                OF THE WEBSITE OR AS TO THE ACCURACY, RELIABILITY OR CONTENT OF
                ANY INFORMATION AVAILABLE ON OR THROUGH THE WEBSITE. THE
                DOWNLOADING OF MATERIAL FROM THE WEBSITE IS DONE AT YOUR OWN
                RISK. AYO & COMPANY PROFESSIONAL CORPORATION DOES NOT GUARANTEE
                OR WARRANT THAT SUCH MATERIALS ARE FREE OF VIRUSES, WORMS,
                TROJAN HORSES OR OTHER DESTRUCTIVE CODE. YOU ARE RESPONSIBLE FOR
                IMPLEMENTING SAFEGUARDS TO PROTECT YOUR COMPUTER SYSTEM AND DATA
                AND YOU ARE RESPONSIBLE FOR THE ENTIRE COST OF ANY SERVICE,
                REPAIRS OR CORRECTIONS NECESSARY AS A RESULT OF THE USE OF THE
                WEBSITE. YOU SHOULD NOT RELY ON ANY OPINION OR OTHER INFORMATION
                SET OUT IN THE WEBSITE WHEN MAKING BUSINESS, FINANCIAL, PERSONAL
                OR OTHER DECISIONS. AYO & COMPANY PROFESSIONAL CORPORATION AND
                AYO & COMPANY PROFESSIONAL CORPORATION SERVICE PROVIDERS DO NOT
                ENDORSE THE OPINIONS OF ANY THIRD PARTY EXPRESSED ON THE WEBSITE
                OR ANY SITE ACCESSIBLE THROUGH THE WEBSITE.
              </p>
              <span className="py-4 font-bold ">
                Limitations of Liability.{" "}
              </span>
              TO THE EXTENT PERMITTED BY LAW, IN NO EVENT SHALL AYO & COMPANY
              PROFESSIONAL CORPORATION, ITS SERVICE PROVIDERS, SUBSIDIARIES,
              AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, ATTORNEYS, AND AGENTS
              BE LIABLE FOR ANY: (i) INDIRECT, CONSEQUENTIAL, INCIDENTAL,
              SPECIAL, COMPENSATORY OR PUNITIVE DAMAGES; (ii) DAMAGES FOR LOSS
              OF INCOME, LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS
              OF DATA OR BUSINESS INFORMATION, LOSS OF OR DAMAGE TO PROPERTY;
              (iii) CLAIMS OF THIRD PARTIES; OR (iv) OTHER PECUNIARY LOSS,
              ARISING OUT OF OR RELATED TO THIS POLICY, THE WEBSITE OR ANY
              LINKED SITE. IN NO EVENT WILL THE CUMULATIVE LIABILITY OF AYO &
              COMPANY PROFESSIONAL CORPORATION, ITS SERVICE PROVIDERS,
              SUBSIDIARIES, AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES,
              ATTORNEYS, AND AGENTS ARISING OUT OF OR RELATED TO THIS POLICY
              EXCEED CDN $100. TO THE EXTENT THAT SOME JURISDICTIONS DO NOT
              ALLOW EXCLUSIONS OR LIMITATIONS ON SOME CATEGORIES OF DAMAGES,
              THESE EXCLUSIONS OR LIMITATIONS MAY NOT APPLY TO YOU.
              <br />
              <br />
              <span className="font-bold py-4">
                Scope of Limitations and Disclaimers.
              </span>
              THE DISCLAIMER OF WARRANTIES AND LIMITATIONS OF LIABILITY SET OUT
              IN THESE TERMS OF USE SHALL APPLY REGARDLESS OF THE CAUSES,
              CIRCUMSTANCES OR FORM OF ACTION GIVING RISE TO THE LOSS, DAMAGE,
              CLAIM OR LIABILITY, EVEN IF SUCH LOSS, DAMAGE, CLAIM OR LIABILITY
              IS BASED UPON BREACH OF CONTRACT (INCLUDING, WITHOUT LIMITATION, A
              CLAIM OF FUNDAMENTAL BREACH OR BREACH OF A FUNDAMENTAL TERM), TORT
              (INCLUDING, WITHOUT LIMITATION, NEGLIGENCE), STRICT LIABILITY OR
              ANY OTHER LEGAL OR EQUITABLE THEORY, AND EVEN IF AYO & COMPANY
              PROFESSIONAL CORPORATION, ITS SERVICE PROVIDERS, SUBSIDIARIES,
              AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, ATTORNEYS, AND AGENTS
              ARE ADVISED OF THE POSSIBILITY OF THE LOSS, DAMAGE, CLAIM OR
              LIABILITY.
              <br />
              <br />
              <span className="font-bold py-4">Indemnity.</span> YOU AGREE TO
              INDEMNIFY AND HOLD HARMLESS AYO & COMPANY PROFESSIONAL CORPORATION
              AND ITS SERVICE PROVIDERS, SUBSIDIARIES, AFFILIATES, OFFICERS,
              DIRECTORS, EMPLOYEES, ATTORNEYS, AND AGENTS FROM AND AGAINST ANY
              AND ALL CLAIMS, LIABILITIES, DAMAGES, DEMANDS, LOSSES OR EXPENSES
              (INCLUDING ALL LEGAL FEES) BROUGHT BY YOU OR ANY THIRD PARTY
              ARISING OUT OF YOUR USE OF THIS SITE IN BREACH OF THIS OR ANY OF
              AYO & COMPANY PROFESSIONAL CORPORATION POLICIES OR THE
              INFRINGEMENT BY YOU OF ANY INTELLECTUAL PROPERTY RIGHTS OF ANY
              PERSON OR ENTITY.
              <p className="text-xl font-bold py-4">SEVERABILITY</p>
              <p className="py-4">
                If in any jurisdiction any part of these Terms of Use is held,
                by a court of competent jurisdiction, to be invalid or
                unenforceable, such part of these Terms of Use shall be
                restricted or eliminated to the minimum extent necessary with
                respect to that jurisdiction, and the remaining Terms of Use
                shall otherwise remain in full force and effect. If such invalid
                or unenforceable provision may be modified to become valid and
                enforceable, such provision will be deemed to be modified so as
                to be valid and enforceable to the greatest extent allowed by
                law.
              </p>
              <p className="text-xl font-bold py-4">GENERAL</p>
              <p className="py-4">
                These Terms of Use, together with the Ayo & Company Professional
                Corporation Privacy Policy and all other notices, policies and
                disclaimers contained on the Website (as the same may be amended
                by Ayo & Company Professional Corporation from time to time)
                constitute the entire agreement between Ayo & Company
                Professional Corporation and you in relation to the subject
                thereof. These Terms of Use, together with the Ayo & Company
                Professional Corporation Privacy Policy supersede anything in
                the Website inconsistent with them. No delay or failure to
                exercise any right or any non-compliance by you, the user, with
                respect to the terms of these Terms of Use shall be construed as
                a waiver by Ayo & Company Professional Corporation. No waiver of
                any of these Terms of Use shall be deemed a further or
                continuing waiver of such term or condition or any other term or
                condition.
              </p>
              <p className="text-xl py-4 font-bold">JURISDICTION</p>
              <p className="py-4">
                The laws of the Province of Alberta and any applicable federal
                laws of Canada shall govern your use of the Website. The courts
                of the Province of Alberta shall have exclusive jurisdiction
                over any dispute arising out of your use of this Website.
              </p>
            </div>
          </Col>
        </Row>
      </section>

      <HireFlash />
      <ServiceFlash />
      <Footer />
    </div>
    </>
  );
}

export default TermsOfUser;
