import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import Head from "next/head";
import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import { PagesSubHeader } from "@/components/Nuggets/PagesSubHeader";
import { Col, Row } from "antd";
import { inter } from "@/utils/fonts";
import dynamic from "next/dynamic";
// const FroalaEditor = dynamic(() => import("react-froala-wysiwyg"), {
//   ssr: false,
// });
// dynamic(import("froala-editor/js/plugins/image.min.js"), { ssr: false });
const FroalaEditor = dynamic(
  async () => {
    const values = await Promise.all([
      import("react-froala-wysiwyg"), // must be first import since we are doing values[0] in return
      import("froala-editor/js/plugins.pkgd.min.js"),
    ]);
    return values[0];
  },
  {
    loading: () => <p>LOADING!!!</p>,
    ssr: false,
  }
);
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import { AuthButton } from "@/components/Buttons/AuthButton";
import { apiClient } from "@/api";

const AddBlog = () => {
  const [model, setModel] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    apiClient("post", "/creat-blog", {})
      .then(() => {})
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <Head>
        <title>Add New Blog</title>
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
          content="Ayo & copany is a chartered professional accounting company in Canada. We are focused on redefining the accounting experience, combining personalized adi=vice and state-of-the-art technology to empower our clients towards financial success."
        />
        <meta property="og:image" content="/About_Image.webp" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar currentPage="blog" />
      <FixedArrowUp />
      <section className={styles.aboutBanner}>
        <div className="text-white ml-10 mt-24">
          <SideBannerContent mainText="Create a New Blog" currentPage="Blogs" />
        </div>
      </section>
      <section className="bg-[#efefef] pb-16">
        <PagesSubHeader text="Create New Blog/Article" />
        <div className="my-10">
          <Row justify={"center"}>
            <Col lg={8}>
              <div
                className={`${inter.variable} font-inter bg-white py-10 px-10`}
              >
                <form>
                  <div className="my-4">
                    <p className={`mb-2 ${inter.variable} font-inter`}>Title</p>
                    <div>
                      <input
                        style={{
                          border: "2px solid #aaaaaa",
                        }}
                        name="title"
                        placeholder="Enter Post title"
                        className="w-full px-4 py-2 rounded-lg text-[#5A5A5A]"
                      />
                    </div>
                  </div>
                  <div className="my-4">
                    <p className={`mb-2 ${inter.variable} font-inter`}>
                      Blog Image
                    </p>
                    <div>
                      <input
                        style={{
                          border: "2px solid #aaaaaa",
                        }}
                        name="title"
                        type="file"
                        placeholder="Enter Blog Image"
                        className="w-full px-4 py-2 rounded-lg text-[#5A5A5A]"
                      />
                    </div>
                  </div>
                  <div className="my-4">
                    <p className={`mb-2 ${inter.variable} font-inter`}>
                      Author
                    </p>
                    <div>
                      <input
                        style={{
                          border: "2px solid #aaaaaa",
                        }}
                        name="author"
                        placeholder="Enter author's name"
                        className="w-full px-4 py-2 rounded-lg text-[#5A5A5A]"
                      />
                    </div>
                  </div>
                  <div className="my-4">
                    <p className={`mb-2 ${inter.variable} font-inter`}>
                      Category
                    </p>
                    <div>
                      <input
                        name="category"
                        placeholder="Enter Category"
                        style={{
                          border: "2px solid #aaaaaa",
                        }}
                        className="w-full px-4 py-2 rounded-lg text-[#5A5A5A]"
                      />
                    </div>
                  </div>

                  <FroalaEditor
                    model={model}
                    onModelChange={(e: string) => setModel(e)}
                  />
                  <div>
                    <AuthButton text="Submit" active={true} />
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default AddBlog;
