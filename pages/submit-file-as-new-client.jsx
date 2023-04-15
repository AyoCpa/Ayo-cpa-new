import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import { PagesSubHeader } from "@/components/Nuggets/PagesSubHeader";
import { PageSideSubHeader } from "@/components/Nuggets/PageSideSubHeader";
import { Row, Col } from "antd";
import { SectionHeader } from "@/components/Nuggets/SectionHeader";
import { inter } from "@/utils/fonts";
import { AuthButton } from "@/components/Buttons/AuthButton";
import { HireFlash } from "@/components/PageFlash/HireFlash";
import { ServiceFlash } from "@/components/PageFlash/ServiceFlash";
import { Footer } from "@/components/Footer/Footer";
import axios from "axios";

function SubmitFileAsClient() {
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [fileDescriptionError, setFileDescriptionError] = useState("");
  const [nameError, setNameError] = useState("");
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");

  const validateData = (data) => {
    let errorFound = 0;
    // if (!data.name) {
    //   errorFound = 1;
    //   setNameError("Name Field is required");
    // } else {
    //   setNameError("");
    // }

    if (!data.fileDescription) {
      errorFound = 1;
      setFileDescriptionError("File Description is required");
    } else {
      setFileDescriptionError("");
    }

    if (!file) {
      errorFound = 1;
      setError("A file should be selected");
    } else {
      setError("");
    }

    if (file) {
      const getFileExtension = file?.name.split(".")[1];
      if (getFileExtension != "zip") {
        errorFound = 1;
        setError("Only a zip file is allowed");
      } else {
        setError("");
      }
    }

    return errorFound ? false : true;
  };

  const upload = async (e) => {
    setClicked(true);
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    console.log(file);
    const isValidated = validateData(data);
    if (!isValidated) {
      setClicked(false);
      console.log("not validated");
      return;
    }

    console.log("i got here");

    data.fileName = file.name;

    const API_ENDPOINT =
      "https://5vb2dagu7j.execute-api.eu-central-1.amazonaws.com/default/getPresignedImageUrl";
    // Get Pre signed Url

    const response = await axios({
      method: "GET",
      url: API_ENDPOINT,
    });

    const result = await fetch(response.data.uploadURL, {
      headers: {
        "Content-Type": "image/*",
      },
      method: "PUT",
      body: file,
    });

    if ((response.status = 200)) {
      console.log("File Uploaded Successfully");
      setSuccess(true);
      // try {
      //   axios
      //     .post("/api/upload/notify", data)
      //     .then(() => {
      //       console.log("I Got Here");
      //     })
      //     .catch((e) => {
      //       console.log(e);
      //     });
      // } catch (error) {}
    } else {
      console.log("File  Not Uploaded Successfully");
    }

    setClicked(false);

    // Make a Put Request

    // const cred = {
    //   accessKeyId: "AKIASKQVRCR33XW52JQ2",
    //   secretAccessKey: "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",
    // };

    // try {
    //   const parallelUploads3 = new Upload({
    //     client: new S3Client({
    //       region: "us-east-1",
    //       credentials: cred,
    //     }),
    //     params: { Bucket: "ayocpabucket", Key: file.name, Body: file },
    //     queueSize: 4,
    //     partSize: 1024 * 1024 * 5000,
    //     leavePartsOnError: false, // optional manually handle dropped parts
    //   });

    //   parallelUploads3.on("httpUploadProgress", (progress) => {
    //     console.log(progress);
    //   });

    //   await parallelUploads3.done();
    //   setClicked(false);
    //   setSuccess(true);
    // } catch (e) {
    //   console.log("Error Found");
    //   console.log(e);
    // }
  };
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <FixedArrowUp />
      </section>
      <section className={styles.submitDocCol}>
        <div className="text-white ml-10 mt-24">
          <SideBannerContent
            mainText="Submit Document"
            currentPage="Submit Document"
          />
        </div>
      </section>

      <div className="bg-[#efefef]">
        <section>
          <PageSideSubHeader
            mainText="Send your documents"
            subText="We will process them for you"
          />
        </section>

        <section>
          <Row justify="center">
            <Col xs={22} lg={16}>
              <Row>
                <Col xs={24}>
                  <section className="mt-20">
                    <SectionHeader text="Upload Files" />
                  </section>
                </Col>
                <Col xs={24}>
                  <Row>
                    <Col xs={24} lg={12}>
                      <form action="" onSubmit={upload}>
                        <div className="w-full border-2 border-[#c4c4c4] flex justify-center items-center h-[150px]">
                          <div className="relative">
                            <input
                              type="file"
                              onChange={(e) => {
                                setFileName(e.target.files[0].name)
                                setFile(e.target.files[0]);
                              }}
                              className="text-center bg-tranparent py-2 absolute opacity-0"
                              placeholder="Add files"
                            />
                            <span
                              className={`text-[#1A1229] ${inter.variable} p-2 font-inter border-2 border-[#1A1229] font-bold`}
                            >
                              {fileName ? fileName : "Add files."}
                            </span>
                          </div>
                        </div>
                        <div className="mt-12">
                          <textarea
                            className="bg-transparent p-2 border-2 w-full border-[#c4c4c4]"
                            name="fileDescription"
                            id=""
                            cols={30}
                            rows={10}
                            placeholder="Brief description"
                          ></textarea>
                        </div>
                        <div>
                          <AuthButton text="Submit" active={true} />
                        </div>
                      </form>
                    </Col>
                    <Col xs={24} lg={12}>
                      {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident similique voluptas magnam adipisci culpa odit corrupti totam mollitia assumenda sed, quia repellendus sequi modi facilis ipsa voluptatibus non exercitationem dolore. */}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
        <section className="mt-20">
          <HireFlash />
        </section>
        <section>
          <ServiceFlash />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default SubmitFileAsClient;
