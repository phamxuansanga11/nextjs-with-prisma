import React from "react";

const CardItem = () => {
  return (
    <div className="rounded-md overflow-hidden max-w-[300px] w-full cursor-pointer">
      <div>
        <img
          alt="example"
          src="https://i.ytimg.com/vi/d3pPNAtyYc8/maxresdefault.jpg"
          className="h-[200px] w-full object-cover"
        />
      </div>
      <div className="bg-white dark:bg-secondary p-3">
        <h4 className="font-medium text-[17px] dark:text-text-dark">
          Những lời hứa bỏ quên
        </h4>
        <p className="text-[12px] dark:text-text-dark">
          Những Lời Hứa Bỏ Quên - Vũ. x Dear Jane (Official MV) | Ca khúc đầu
          tiên từ Album phòng thu thứ 3 của Vũ.
        </p>
      </div>
    </div>
  );
};

export default CardItem;
