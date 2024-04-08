"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const UploadForm = () => {
  const [file, setFile] = useState<File>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("file to submit:", file);

    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }
    } catch (error) {
      console.error("Error uploading file: ", error);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.files?.[0]) return;
    const file = e.target.files[0];

    setFile(file);
  };

  return (
    <div className="h-screen">
      <div className="pt-5 w-full">
        <form
          onSubmit={handleSubmit}
          className="w-full h-[80vh] m-auto bg-white flex justify-center flex-col items-center"
        >
          <div className="w-full p-2 flex gap-4 flex-col">
            <div className="border-[2px] border-dashed rounded-md h-[160px] border-primary relative flex justify-center items-center">
              <Input
                id="picture"
                type="file"
                className="opacity-0 w-full h-full absolute top-0 left-0 right-0 bottom-0"
                onChange={handleFileChange}
              />
              <div>Nhấp chuột hoặc kéo thả tệp để tải lên</div>
            </div>

            <Input
              type="name"
              placeholder="Movies name..."
              className="text-primary dark:text-white bg-white dark:bg-primary"
            />
            <Textarea
              placeholder="Description..."
              className="text-primary dark:text-white bg-white dark:bg-primary"
            />
          </div>
          <Button
            type="submit"
            variant={"outline"}
            className="ml-auto mt-auto mb-2 mr-2"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
