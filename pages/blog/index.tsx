import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import { PagesSubHeader } from "@/components/Nuggets/PagesSubHeader";
import { Col, Row, Spin } from "antd";
import { ubuntu } from "@/utils/fonts";
import Image from "next/image";
import blogImage from "@/public/ASSETS/IMAGES/accounting-image.jpg";
import secondBlog from "@/public/ASSETS/IMAGES/contact-image.webp";
import thirdBlog from "@/public/ASSETS/IMAGES/payroll.webp";
import { apiClient } from "@/api";
import { LoadingOutlined } from "@ant-design/icons";
import moment from "moment";

interface NuggetType {
  name: string;
  _id: string;
}

interface BlogType {
  _id: string;
  category: NuggetType;
  title: string;
  tags: NuggetType[];
  isFeatured: boolean;
  content: string;
  slug: string;
  author: string;
  image: string;
  createdAt: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    apiClient("get", "blog")
      .then((res) => {
        setBlogs(res?.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
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
              <Row className="my-10" gutter={{ lg: 18 }}>
                {loading ? (
                  <Spin
                    indicator={
                      <LoadingOutlined style={{ fontSize: 24 }} spin />
                    }
                  />
                ) : !blogs.length ? (
                  "No Blogs Available"
                ) : (
                  blogs.map((item) => {
                    return (
                      <Col lg={6}>
                        <div className="bg-white rounded-xl overflow-hidden">
                          <Image
                            src={item.image}
                            alt=""
                            className="w-full h-[150px]"
                            width={400}
                            height={400}
                          />
                          <div className="cursor-pointer">
                            <div className="p-4">
                              <p
                                className={`text-lg ${ubuntu.variable} font-ubuntu  `}
                              >
                                {item.title}
                              </p>
                            </div>
                            <hr />
                            <div className="p-4 flex justify-between items-center">
                              <p className="py-2 px-4 rounded-full bg-[#efefef]">
                                {item.category.name}
                              </p>
                              <p className="text-[#bbbbbb]">
                                {moment(item.createdAt).format("MMMM DD, YYYY")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })
                )}
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Blogs;
