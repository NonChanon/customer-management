import { Icon } from "@iconify/react";
import { Button, Input } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";

const status = [
  "รับงาน",
  "ส่งมอบ Prototype",
  "เตรียมเอกสาร",
  "ส่งมอบตัวอย่าง Product",
  "นำเข้าวัตถุดิบ",
  "กระบวนการผลิต",
  "จัดส่งสินค้า",
];

export default function AddUser(props) {
  const [detail, setDetail] = useState({
    name: "",
    password: "",
    nickname: "",
    email: "",
    phone: "",
    line: "",
  });

  useEffect(() => {
    setDetail({
      name: props.detail.name,
      password: props.detail.password,
      nickname: props.detail.nickname,
      email: props.detail.email,
      phone: props.detail.phone,
      line: props.detail.line,
    });
  }, []);

  const handleChange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    props.onSubmit(detail);
    props.onClick();
    e.preventDefault();
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0 z-5 bg-[#FAFAFC]">
      <div
        className="w-screen h-screen bg-black/50 fixed top-0 left-0 z-10"
        onClick={props.onClick}
      />
      <form className="fixed flex flex-col max-h-[750px] w-[90%] z-50 max-w-[400px] p-10 rounded-lg shadow-xl bg-white">
        <span className="text-xl font-bold text-indigo-600 text-center">
          {props.name}
        </span>
        <div className="mt-5 flex flex-col gap-4 w-full overflow-auto pt-2">
          <Input
            color="indigo"
            size="lg"
            label="Name"
            name="name"
            value={detail.name}
            onChange={handleChange}
          />
          <Input
            color="indigo"
            size="lg"
            label="Password"
            name="password"
            value={detail.password}
            onChange={handleChange}
          />
          <Input
            color="indigo"
            size="lg"
            label="Nickname"
            name="nickname"
            value={detail.nickname}
            onChange={handleChange}
          />
          <Input
            color="indigo"
            size="lg"
            label="Email"
            name="email"
            value={detail.email}
            onChange={handleChange}
          />
          <Input
            color="indigo"
            size="lg"
            label="Phone No."
            name="phone"
            value={detail.phone}
            onChange={handleChange}
          />
          <Input
            color="indigo"
            size="lg"
            label="ID Line"
            name="line"
            value={detail.line}
            onChange={handleChange}
          />
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
