import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import { PagesSubHeader } from "@/components/Nuggets/PagesSubHeader";
import { Col, Row, Select } from "antd";
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
import { toast } from "sonner";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/firebase";
import { v4 } from "uuid";

const AddBlog = () => {
  const [model, setModel] = useState("");
  const [buttonLoading, setButtonLoading] = useState(true);
  const [categories, setCategories] = useState<{ name: string; _id: string }[]>(
    []
  );
  const [tags, setTags] = useState<{ name: string; _id: string }[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [imageChosen, setImageChosen] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState("");

  const uploadToFirebase = async () => {
    if (imageChosen) {
      const imageRef = ref(storage, `blogImages/${imageChosen.name + v4()} }`);
      console.log(imageRef);

      const uploadIsh = await uploadBytes(imageRef, imageChosen);
      return await getDownloadURL(uploadIsh.ref);
    }
  };

  useEffect(() => {
    apiClient("get", "category")
      .then((res) => {
        setCategories(res?.data);
      })
      .catch((e) => {
        console.log(e);
      });

    apiClient("get", "tag")
      .then((res) => {
        setTags(res?.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonLoading(false);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (
      !data.author ||
      !data.title ||
      !data.blog_image ||
      !data.category ||
      !data.keywords ||
      !data.description ||
      !selectedTags.length
    ) {
      toast.error("All fields are required");
      setButtonLoading(true);
      return;
    }

    try {
      const verify = await apiClient("get", `blog/${data.title}`);
      if (verify?.data) {
        toast.error(`Blog with the title ${data.title} already Exist`);
        setButtonLoading(true);
        return;
      }
    } catch (e) {
      toast.error("Oops! Some Error Occured, Try Again.");
      setButtonLoading(true);
    }

    const imageUrl_ = await uploadToFirebase();

    // Verify From the backend first to be sure that post isn't already in existent

    // Do the need validation
    apiClient("post", "blog", {
      author: data.author,
      title: data.title,
      category: data.category,
      image: imageUrl_,
      content: model,
      isFeatured: data.isFeatured === "on" ? true : false,
      tags: selectedTags,
      keywords: data.keywords,
      description: data.description,
    })
      .then((res) => {
        toast.success("Blog Created Successfully");
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setButtonLoading(true);
      });
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
          content="Ayo & company is a chartered professional accounting company in Canada. We are focused on redefining the accounting experience, combining personalized adi=vice and state-of-the-art technology to empower our clients towards financial success."
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
            <Col xl={8} lg={12} sm={16} xs={22}>
              <div
                className={`${inter.variable} font-inter bg-white py-10 px-10`}
              >
                <form onSubmit={handleSubmit}>
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
                    <div>
                      <input type="checkbox" name="isFeatured" />
                      <span className={`ml-2 ${inter.variable} font-inter`}>
                        IsFeatured ?.
                      </span>
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
                        onChange={(e) => {
                          if (e.target.files) {
                            setImageChosen(e.target.files[0]);
                          }
                        }}
                        name="blog_image"
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
                      Key words
                    </p>
                    <div>
                      <input
                        style={{
                          border: "2px solid #aaaaaa",
                        }}
                        name="keywords"
                        placeholder="Enter keywords for the article"
                        className="w-full px-4 py-2 rounded-lg text-[#5A5A5A]"
                      />
                    </div>
                  </div>
                  <div className="my-4">
                    <p className={`mb-2 ${inter.variable} font-inter`}>
                      Description
                    </p>
                    <div>
                      <input
                        style={{
                          border: "2px solid #aaaaaa",
                        }}
                        name="description"
                        placeholder="Enter Description for article"
                        className="w-full px-4 py-2 rounded-lg text-[#5A5A5A]"
                      />
                    </div>
                  </div>
                  <div className="my-4">
                    <p className={`mb-2 ${inter.variable} font-inter`}>
                      Category
                    </p>
                    <div>
                      <select
                        className="w-full px-4 py-2 rounded-lg text-[#5A5A5A]"
                        name="category"
                        id=""
                        style={{
                          border: "2px solid #aaaaaa",
                        }}
                      >
                        <option value="">Select category</option>
                        {categories.map((item) => {
                          return (
                            <option key={item._id} value={item._id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                      {/* <input
                        name="category"
                        placeholder="Enter Category"
                        className="w-full px-4 py-2 rounded-lg text-[#5A5A5A]"
                      /> */}
                    </div>
                  </div>
                  <div className="my-4">
                    <p className={`mb-2 ${inter.variable} font-inter`}>Tags</p>
                    <div>
                      <Select
                        mode="multiple"
                        placeholder="Select Tag"
                        style={{ flex: 1, width: "100%" }}
                        className="py-2"
                        onChange={(e) => {
                          setSelectedTags(e);
                        }}
                        options={tags.map((item) => {
                          return { value: item._id, label: item.name };
                        })}
                      />
                    </div>
                  </div>

                  <FroalaEditor
                    tag="textarea"
                    model={model}
                    onModelChange={(e: string) => setModel(e)}
                  />
                  <div>
                    <AuthButton text="Submit" active={buttonLoading} />
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
