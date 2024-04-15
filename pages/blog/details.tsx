import { apiClient } from "@/api";
import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import { PageSideSubHeader } from "@/components/Nuggets/PageSideSubHeader";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import { TagContainer } from "@/components/Nuggets/TagsContainer";
import { BlogType } from "@/types";
import { Col, Row } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ubuntu } from "@/utils/fonts";
import moment from "moment";
import LoadingState from "@/components/Nuggets/LoadingState";

const FullBlog = () => {
  const router = useRouter();
  const [urlQuery, setUrlQuery] = useState("");
  const [blog, setBlog] = useState<BlogType>();
  const [mainBlogLoading, setMainBlogLoading] = useState(true);
  const [sideBlogLoading, setSideBlogLoading] = useState(true);
  const [remainingBlogs, setRemainingBlogs] = useState<BlogType[]>([]);
  const getExcludedData = (val_: string) => {
    apiClient("get", `blog/excluded/${val_}`)
      .then((res) => {
        setRemainingBlogs(res?.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setSideBlogLoading(false);
      });
  };

  useEffect(() => {
    let queryVal = new URLSearchParams(window.location.search);
    const newVal = queryVal.get("v") ? queryVal.get("v") : "";
    console.log(newVal, "new vlalue hereeeeee");
    setUrlQuery(newVal ?? "");

    apiClient(
      "get",
      `blog/getBySlug/${encodeURIComponent(newVal ? newVal : "")}`
    )
      .then((res) => {
        setBlog(res?.data);
        if (res?.data._id) {
          getExcludedData(res.data._id);
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setMainBlogLoading(false);
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
      <section
        style={{
          height: "50vh",
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${blog?.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="text-white ml-10 mt-24">
          <TagContainer extra={blog?.tags} />
        </div>
      </section>
      <Row gutter={{ lg: 20 }}>
        <Col xs={16}>
          {mainBlogLoading ? (
            <LoadingState />
          ) : (
            <>
              <PageSideSubHeader
                mainText={blog?.title ? blog?.title : ""}
                subText={blog?.category.name ? blog?.category.name : ""}
              />
              <hr className="mt-4" />
              <Row justify={"center"} className="mt-8 ">
                <Col xs={22} lg={16}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blog?.content ? blog.content : "",
                    }}
                  />
                </Col>
              </Row>
            </>
          )}
        </Col>
        <Col xs={8}>
          <div className="h-screen overflow-scroll">
            <div>
              <PageSideSubHeader
                mainText="Latest Posts"
                subText="view some of the latest post"
              />
            </div>
            <hr className="mt-4" />
            <Row justify={"center"} className="py-8">
              {sideBlogLoading ? (
                <LoadingState />
              ) : remainingBlogs.length ? (
                remainingBlogs.map((item) => {
                  return (
                    <Col xs={16} key={item._id}>
                      <div className="bg-white rounded-xl overflow-hidden my-4 border">
                        <Image
                          src={item.image}
                          alt=""
                          className="w-full h-[150px]"
                          width={400}
                          height={400}
                        />
                        <div className="cursor-pointer">
                          <div
                            className="p-4"
                            onClick={() =>
                              router.push(`/blog/details?v=${item.slug}`)
                            }
                          >
                            <p
                              className={`text-lg text-black ${ubuntu.variable} font-ubuntu  `}
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
              ) : (
                <div className="h-[100px] flex items-center  justify-center">
                  No Posts Available
                </div>
              )}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default FullBlog;
