import { Icon } from "@iconify/react";
import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import Date from "../components/Date";

const status = [
  "รับงาน",
  "ส่งมอบ Prototype",
  "เตรียมเอกสาร",
  "ส่งมอบตัวอย่าง Product",
  "นำเข้าวัตถุดิบ",
  "กระบวนการผลิต",
  "จัดส่งสินค้า",
];

export default function AddProduct(props) {
  return (
    <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0 z-10 bg-[#FAFAFC]">
      <div
        className="w-screen h-screen bg-black/50 fixed top-0 left-0"
        onClick={props.onClick}
      />
      <form className="fixed flex flex-col  h-[90vh] md:h-auto w-[350px] md:w-[600px] p-10 rounded-lg shadow-xl bg-white">
        <span className="text-xl font-bold text-indigo-600 text-center">
          ADD PRODUCT
        </span>
        <div className="mt-7 flex flex-col gap-4 w-full overflow-auto">
          <Input color="indigo" size="lg" label="Product Name" />
          <Input color="indigo" size="lg" label="Quantity" />
          <div className="grid grid-cols-5 md:gap-3 items-center text-sm text-center">
            <span className="text-indigo-600 col-start-2 col-span-2 hidden md:block">
              Estimated Date
            </span>
            <span className="text-indigo-600 col-start-4 col-span-2 hidden md:block">
              Actual Date
            </span>
          </div>
          {status.map((step) => (
            <Date name={step} />
          ))}
        </div>
        <div className="flex justify-end mt-5">
          <Button
            size="sm"
            variant="outlined"
            className="flex items-center justify-center gap-1 h-[44px] mr-2 w-full md:w-28"
            color="indigo"
            onClick={props.onClick}
          >
            <Icon icon="ri:delete-bin-fill" width="16" />
            CANCEL
          </Button>
          <Button
            size="sm"
            className="flex items-center justify-center gap-1 h-[44px] ml-2 w-full md:w-28 shadow-none hover:shadow-none"
            color="indigo"
            onClick={props.onClick}
          >
            <Icon icon="fluent:save-16-filled" width="16" />
            SAVE
          </Button>
        </div>
      </form>
    </div>
  );
}
