import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import Head from "next/head";
import React, { useEffect, useState } from "react";
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

import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import { AuthButton } from "@/components/Buttons/AuthButton";
import { apiClient } from "@/api";
import { toast } from "sonner";

const AddCategory = () => {
  const [model, setModel] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [categories, setCategories] = useState<{ name: string; _id: string }[]>(
    []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (!data.author || !data.title || !data.blog_image || !data.category) {
      toast.error("All fields are required");
      setButtonLoading(false);
      return;
    }
    // Do the need validation
    console.log(data, "Data hereee");
    apiClient("post", "blog", {
      author: data.author,
      title: data.title,
      category: data.category,
      image: "TEst image",
      content: model,
      isFeatured: data.isFeatured === "on" ? true : false,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setButtonLoading(false);
      });
  };
  return (
    <div>
      <Head>
        <title>Add New Category</title>
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
          <SideBannerContent
            mainText="Create a New Blog Category"
            currentPage="Blog-Category"
          />
        </div>
      </section>
      <section className="bg-[#efefef] pb-16">
        <PagesSubHeader text="Create Category For Articles/Blog " />
        <div className="my-10">
          <Row justify={"center"}>
            <Col lg={8}>
              <div
                className={`${inter.variable} font-inter bg-white py-10 px-10`}
              >
                <form onSubmit={handleSubmit}>
                  <div className="my-4">
                    <p className={`mb-2 ${inter.variable} font-inter`}>Name </p>
                    <div>
                      <input
                        style={{
                          border: "2px solid #aaaaaa",
                        }}
                        name="name"
                        placeholder="Enter Name of category"
                        className="w-full px-4 py-2 rounded-lg text-[#5A5A5A]"
                      />
                    </div>
                  </div>
                  
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

export default AddCategory;
