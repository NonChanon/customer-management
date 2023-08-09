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

const title = [
  "ชื่อ",
  "ชื่อสินค้าที่สั่งผลิต",
  "Product Style",
  "สถานะล่าสุด",
  "วันกำหนดส่งงาน",
];
export default function CustomerStatus() {
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <div className="bg-[#FAFAFC] min-h-screen">
      <div className="container mx-auto py-10">
        <Stepper
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
              onClick={() => setActiveStep(i)}
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
        <div className="grid grid-rows-5">
          {title.map((t) => (
            <div>{t}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
