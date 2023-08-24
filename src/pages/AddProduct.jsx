import { Icon } from "@iconify/react";
import { Button, Input } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
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
  const [detail, setDetail] = useState({
    name: "",
    quantity: "",
    estDate1: null,
    actDate1: null,
    estDate2: null,
    actDate2: null,
    estDate3: null,
    actDate3: null,
    estDate4: null,
    actDate4: null,
    estDate5: null,
    actDate5: null,
    estDate6: null,
    actDate6: null,
    estDate7: null,
    actDate7: null,
  });

  useEffect(() => {
    setDetail({ name: props.detail.name, quantity: props.detail.quantity });
  }, []);

  const handleChange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(props.index);
    props.onSubmit(detail, props.index);
    props.onClick();
    e.preventDefault();
  };

  const getDate = (data, i) => {
    console.log(data);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0 z-5 bg-[#FAFAFC]">
      <div
        className="w-screen h-screen bg-black/50 fixed top-0 left-0 z-10"
        onClick={props.onClick}
      />
      <form className="fixed flex flex-col  h-[90vh] max-h-[750px] w-[90%] z-50 max-w-[600px] p-10 rounded-lg shadow-xl bg-white">
        <span className="text-xl font-bold text-indigo-600 text-center">
          {props.name}
        </span>
        <div className="mt-5 flex flex-col gap-4 w-full overflow-auto pt-2">
          <Input
            color="indigo"
            size="lg"
            label="Product Name"
            name="name"
            value={detail.name}
            onChange={handleChange}
          />
          <Input
            color="indigo"
            size="lg"
            label="Quantity"
            name="quantity"
            value={detail.quantity}
            onChange={handleChange}
          />
          <div className="grid grid-cols-5 md:gap-3 items-center text-sm text-center">
            <span className="text-indigo-600 col-start-2 col-span-2 hidden md:block">
              Estimated Date
            </span>
            <span className="text-indigo-600 col-start-4 col-span-2 hidden md:block">
              Actual Date
            </span>
          </div>
          {status.map((step, i) => (
            <div className="md:grid md:grid-cols-5 gap-3 items-center text-sm md:text-end">
              <span className="text-indigo-600 font-semibold md:font-normal">
                {step}
              </span>
              <div className="col-span-2">
                <Date onChange={getDate} date="(Estimated Date)" index={i} />
              </div>
              <div className="col-span-2">
                <Date onChange={getDate} date="(Actual Date)" index={i} />
              </div>
            </div>
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
            onClick={handleSubmit}
          >
            <Icon icon="fluent:save-16-filled" width="16" />
            SAVE
          </Button>
        </div>
      </form>
    </div>
  );
}
