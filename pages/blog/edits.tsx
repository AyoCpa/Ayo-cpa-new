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
import { apiClient } from "@/api";
import { LoadingOutlined } from "@ant-design/icons";
import moment from "moment";
import Link from "next/link";
import { BlogType } from "@/types";
import LoadingState from "@/components/Nuggets/LoadingState";
import ConfirmationModal from "@/components/Modals/ConfirmationModal";
import { toast } from "sonner";
import { ActionLoader } from "@/components/Nuggets/ActionLoader";

const Edits = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirmationActive, setConfirmationActive] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const [actionLoader, setActionLoader] = useState(false);

  const getBlogs = () => {
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
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const handleDelete = () => {
    setActionLoader(true);
    apiClient("delete", `blog/${currentId}`)
      .then((res) => {
        toast.success("Deleted Successfully");
        getBlogs();
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setCurrentId("");
        setActionLoader(false);
      });
  };

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
      <ActionLoader loadingState={actionLoader} />
      <ConfirmationModal
        handleModalClose={setConfirmationActive}
        active={confirmationActive}
        triggerFnc={handleDelete}
      />
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
            <Col xs={22} lg={18}>
              <div>
                <p
                  className={`${ubuntu.variable} font-ubuntu text-[#1E1E1E] text-lg lg:text-2xl font-bold`}
                >
                  Accounting
                </p>
              </div>
              <Row className="my-10" justify={"center"} gutter={{ lg: 18 }}>
                {loading ? (
                  <LoadingState />
                ) : !blogs.length ? (
                  "No Blogs Available"
                ) : (
                  blogs.map((item) => {
                    return (
                      <Col key={item._id} lg={6} xs={22}>
                        <div className="bg-white rounded-xl overflow-hidden mb-8">
                          <Image
                            src={item.image}
                            alt=""
                            className="w-full h-[150px]"
                            width={400}
                            height={400}
                          />
                          <div className="cursor-pointer">
                            <Link href={`/blog/details?v=${item.slug}`}>
                              <div className="p-4">
                                <p
                                  className={`text-lg whitespace-nowrap w-full overflow-hidden text-ellipsis text-black ${ubuntu.variable} font-ubuntu  `}
                                >
                                  {item.title}
                                </p>
                              </div>
                            </Link>

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
                          <div className="flex ml-4 gap-2 mb-4">
                            <p
                              onClick={() => {
                                setCurrentId(item._id);
                                setConfirmationActive(true);
                              }}
                              className="cursor-pointer text-[red]"
                            >
                              Delete
                            </p>
                            <Link href={`/blog/editBlog?blogId=${item.slug}`}>
                              <p className="cursor-pointer">Edit</p>
                            </Link>
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

export default Edits;
