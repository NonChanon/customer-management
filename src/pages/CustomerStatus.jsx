import React from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import { Icon } from "@iconify/react";

const stepToppic = [
  { name: "รับงาน", icon: "material-symbols:work-update-rounded" },
  {
    name: "ส่งมอบ Prototype",
    icon: "material-symbols:send-to-mobile",
  },
  { name: "เตรียมเอกสาร", icon: "basil:document-solid" },
  {
    name: "ส่งมอบตัวอย่าง Product",
    icon: "material-symbols:send-time-extension",
  },
  { name: "นำเข้าวัตถุดิบ", icon: "mdi:box-check" },
  { name: "กระบวนการผลิต", icon: "fa6-solid:gears" },
  { name: "จัดส่งสินค้า", icon: "iconamoon:delivery-fast-fill" },
];

const status_detail = [
  { name: "ชื่อ", detail: "นายจ๊าก" },
  { name: "ชื่อสินค้าที่สั่งผลิต", detail: "เสื้อยืด" },
  { name: "Product Style", detail: "ยื้ดยืด" },
  { name: "สถานะล่าสุด", detail: "รับงาน" },
  { name: "วันกำหนดส่งงาน", detail: "02/07/2023" },
];

export default function CustomerStatus() {
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <div className="bg-[#FAFAFC] min-h-screen">
      <div className="container mx-auto py-28 flex flex-col md:flex-row justify-center items-center lg:block lg:mt-0">
        <Stepper
          className="hidden lg:flex"
          activeStep={activeStep}
          activeLineClassName={
            activeStep == 0
              ? "bg-indigo-500 !w-0"
              : activeStep == 1
              ? "bg-indigo-500 !w-[16.6%]"
              : activeStep == 2
              ? "bg-indigo-500 !w-[33.3%]"
              : activeStep == 3
              ? "bg-indigo-500 !w-[49.8%]"
              : activeStep == 4
              ? "bg-indigo-500 !w-[66.4%]"
              : activeStep == 5
              ? "bg-indigo-500 !w-[83%]"
              : "bg-indigo-500 !w-full"
          }
        >
          {stepToppic.map((step, i) => (
            <Step
              activeClassName="ring-indigo-100 !bg-indigo-500 text-white"
              completedClassName="!bg-indigo-500 text-white"
            >
              <Icon icon={step.icon} color="white" width="20" height="20" />
              <div className="absolute -bottom-10 w-max text-center">
                <Typography
                  variant="h6"
                  className={
                    activeStep >= i
                      ? "font-Kanit text-indigo-500 font-semibold"
                      : "font-Kanit text-blue-gray-300 font-light"
                  }
                >
                  {step.name}
                </Typography>
              </div>
            </Step>
          ))}
        </Stepper>
        <ol className="relative text-gray-500 border-l border-gray-200 lg:hidden">
          {stepToppic.map((step, i) => (
            <li
              className={
                i == 6
                  ? "ml-6 flex items-center"
                  : "pb-10 ml-6 flex items-center"
              }
            >
              <span
                className={
                  activeStep >= i
                    ? "absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-indigo-100 bg-indigo-500"
                    : "absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-blue-gray-200"
                }
              >
                <Icon icon={step.icon} color="white" width="20" height="20" />
              </span>
              <h3
                className={
                  activeStep >= i
                    ? "font-medium leading-tight ml-3 text-indigo-500"
                    : "font-medium leading-tight ml-3"
                }
              >
                {step.name}
              </h3>
            </li>
          ))}
        </ol>
        <div className="lg:mt-32 flex justify-center text-indigo-800 md:ml-28 lg:ml-0 mt-12 md:mt-0">
          <div>
            {status_detail.map((status) => (
              <div className="w-64 md:w-80 grid grid-cols-4 mt-5">
                <span className="col-span-2 font-Rubik">{status.name}</span>
                <div className="flex justify-center pr-5">
                  <span>:</span>
                </div>
                <span>{status.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
