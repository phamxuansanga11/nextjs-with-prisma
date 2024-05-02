import { Tag } from "antd";
import React from "react";

const Category = () => {
  return (
    <div className="">
      <Tag className="cursor-pointer" color="#f90">
        Tình cảm
      </Tag>
      <Tag className="cursor-pointer" color="#389e0d">
        Cổ điển
      </Tag>
      <Tag className="cursor-pointer" color="#1677ff">
        Phim ngắn
      </Tag>
      <Tag className="cursor-pointer" color="#ff4d4f">
        Kinh dị
      </Tag>
      <Tag className="cursor-pointer" color="#531dab">
        Hành động
      </Tag>
    </div>
  );
};

export default Category;
