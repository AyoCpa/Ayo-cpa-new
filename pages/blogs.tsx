import Navbar from '@/components/Nav/Navbar';
import FixedArrowUp from '@/components/Nuggets/FixedArrowUp';
import Head from 'next/head'
import React from 'react'
import styles from "@/styles/Home.module.css";
import { SideBannerContent } from '@/components/Nuggets/SideBannerContent';
import { PagesSubHeader } from '@/components/Nuggets/PagesSubHeader';
import { Col, Row } from 'antd';
import { ubuntu } from '@/utils/fonts';
import Image from 'next/image';
import blogImage from "@/public/ASSETS/IMAGES/accounting-image.jpg"
import secondBlog from "@/public/ASSETS/IMAGES/contact-image.webp"
import thirdBlog from "@/public/ASSETS/IMAGES/payroll.webp";



const Blogs = () => {
  return (
    <>
      <Head>
        <title>Blog Listing | Ayo & Company</title>
        <meta
          name="description"
          content="Ayo & company is focused on redefining the accounting experience, combining
            personalized advice and state-of-the-art technology to empower our
            clients towards financial success."
        />
        <meta
          name="keywords"
          content="About Ayo & company, ayocpa chartered accountant, accounting companies in canada"
        />
        <meta property="og:title" content="About Us | Ayo & company" />
        <meta
          property="og:description"
          content="Ayo & company is a chartered professional accounting company in Canada. We are focused on redefining the accounting experience, combining personalized adi=vice and state-of-the-art technology to empower our clients towards financial success."
        />
        <meta property="og:image" content="/About_Image.webp" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar currentPage="blog" />
      <FixedArrowUp />
      <section className={styles.aboutBanner}>
        <div className="text-white ml-10 mt-24">
          <SideBannerContent mainText="Blogs from Us" currentPage="Blogs" />
        </div>
      </section>
      <section className="bg-[#efefef] pb-16">
        <PagesSubHeader text="Blogs" />
        <div className="my-10">
          <Row justify={"center"}>
            <Col lg={18}>
              <div>
                <p
                  className={`${ubuntu.variable} font-ubuntu text-[#1E1E1E] text-lg lg:text-2xl font-bold`}
                >
                  Accounting
                </p>
              </div>
              <Row className="my-10" gutter={{ lg:18 }}>
                <Col lg={6}>
                  <div className="bg-white rounded-xl overflow-hidden">
                    <Image
                      src={blogImage}
                      alt=""
                      className="w-full h-[150px]"
                    />
                    <div className="cursor-pointer">
                      <div className="p-4">
                        <p
                          className={`text-lg ${ubuntu.variable} font-ubuntu  `}
                        >
                          Handling your books in the wise way
                        </p>
                      </div>
                      <hr />
                      <div className="p-4 flex justify-between items-center">
                        <p className="py-2 px-4 rounded-full bg-[#efefef]">
                          Business
                        </p>
                        <p className="text-[#bbbbbb]">February 18, 2024 </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="bg-white rounded-xl overflow-hidden">
                    <Image
                      src={secondBlog}
                      alt=""
                      className="w-full h-[150px]"
                    />
                    <div className="cursor-pointer">
                      <div className="p-4">
                        <p
                          className={`text-lg ${ubuntu.variable} font-ubuntu  `}
                        >
                          Do&apos;s of Managing your books
                        </p>
                      </div>
                      <hr />
                      <div className="p-4 flex justify-between items-center">
                        <p className="py-2 px-4 rounded-full bg-[#efefef]">
                          Business
                        </p>
                        <p className="text-[#bbbbbb]">February 18, 2024 </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="bg-white rounded-xl overflow-hidden">
                    <Image
                      src={thirdBlog}
                      alt=""
                      className="w-full h-[150px]"
                    />
                    <div className="cursor-pointer">
                      <div className="p-4">
                        <p
                          className={`text-lg ${ubuntu.variable} font-ubuntu  `}
                        >
                          Handling your books in the wise way
                        </p>
                      </div>
                      <hr />
                      <div className="p-4 flex justify-between items-center">
                        <p className="py-2 px-4 rounded-full bg-[#efefef]">
                          Business
                        </p>
                        <p className="text-[#bbbbbb]">February 18, 2024 </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="bg-white rounded-xl overflow-hidden">
                    <Image
                      src={blogImage}
                      alt=""
                      className="w-full h-[150px]"
                    />
                    <div className="cursor-pointer">
                      <div className="p-4">
                        <p
                          className={`text-lg ${ubuntu.variable} font-ubuntu  `}
                        >
                          Handling your books in the wise way
                        </p>
                      </div>
                      <hr />
                      <div className="p-4 flex justify-between items-center">
                        <p className="py-2 px-4 rounded-full bg-[#efefef]">
                          Business
                        </p>
                        <p className="text-[#bbbbbb]">February 18, 2024 </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default Blogs