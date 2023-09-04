import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react";
import {
  Input,
  Button,
  IconButton,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useToggle } from "../hooks/useToggle";

const TABLE_ROWS = [
  {
    name: "Chanon Kitbunnadaech",
    password: "",
    nickname: "Non",
    email: "cha@mail.com",
    phone: "0900000000",
    line: "nonnon",
  },
  {
    name: "Chanon Kitbunnadaech",
    password: "",
    nickname: "Non",
    email: "cha@mail.com",
    phone: "0900000000",
    line: "nonnon",
  },
  {
    name: "Chanon Kitbunnadaech",
    password: "",
    nickname: "Non",
    email: "cha@mail.com",
    phone: "0900000000",
    line: "nonnon",
  },
  {
    name: "Chanon Kitbunnadaech",
    password: "",
    nickname: "Non",
    email: "cha@mail.com",
    phone: "0900000000",
    line: "nonnon",
  },
  {
    name: "Chanon Kitbuadaech",
    password: "",
    nickname: "Non",
    email: "cha@mail.com",
    phone: "0900000000",
    line: "nonnon",
  },
  {
    name: "Chanon",
    password: "",
    nickname: "Non",
    email: "cha@mail.com",
    phone: "0900000000",
    line: "nonnon",
  },
];

function Icons({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-4 w-4 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function Employee() {
  const [open, setOpen] = React.useState(-1);
  const handleOpen = (value) => setOpen(open === value ? -1 : value);
  return (
    <div className="bg-[#FAFAFC] min-h-screen py-20">
      <div className="w-[90%] mx-auto">
        <div className="bg-white w-20 md:w-40 h-10 md:h-12 flex items-center justify-center rounded-ss-md shadow-lg">
          <span className="absolute z-[6] flex items-center font-[600] md:text-xl pl-10 pt-2 text-indigo-600">
            <Icon icon="fa6-solid:list-ul" className="mr-2 hidden md:block" />
            Employee
          </span>
          <div className="absolute bg-white skew-x-[30deg] ml-14 rounded-t-lg w-24 md:w-48 h-10 md:h-12" />
        </div>
        <div className="w-full p-5 bg-white rounded-lg rounded-ss-none shadow-lg">
          <div className="flex justify-between items-center mb-10">
            <div className="md:w-72 bg-white">
              <Input
                color="indigo"
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
          <div className="overflow-x-auto mt-5">
            <table className="flex-col justify-between w-full border-b border-[#DFDFDF] text-sm ">
              <thead className="text-indigo-800 border-b border-[#DFDFDF]">
                <tr>
                  <th className="px-6 pb-4">No.</th>
                  <th className="px-6 pb-4">Name</th>
                </tr>
              </thead>
              <tbody className="text-indigo-800">
                {TABLE_ROWS.map((row, i) => (
                  <tr className="h-[64px]">
                    <td className="px-6 border-b text-center">{i + 1}</td>
                    <td className="px-6 border-b">
                      <Accordion
                        open={open === i}
                        icon={<Icons id={i} open={open} />}
                      >
                        <AccordionHeader
                          onClick={() => handleOpen(i)}
                          className="text-sm font-Rubik border-b-0 text-indigo-800 hover:text-indigo-800 font-normal"
                        >
                          {row.name}
                        </AccordionHeader>
                        <AccordionBody>
                          <div className="text-center gap-3">
                            <table className="w-full text-indigo-800">
                              <thead>
                                <tr>
                                  <th className="px-6 pb-4 border-b font-normal">
                                    Product
                                  </th>
                                  <th className="px-6 pb-4 border-b font-normal">
                                    Estimated Date (จัดส่งสินค้า)
                                  </th>
                                  <th className="px-6 pb-4 border-b font-normal">
                                    Actual Date (จัดส่งสินค้า)
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="">
                                <tr className="h-[75px]">
                                  <td className="px-6 ">{row.name}</td>
                                  <td className="px-6 ">{row.password}</td>
                                  <td className="px-6 ">{row.email}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </AccordionBody>
                      </Accordion>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-5">
            <IconButton
              className=" text-xl"
              color="indigo"
              variant="text"
              size="sm"
            >
              <Icon icon="iconamoon:arrow-left-2-duotone" />
            </IconButton>
            <div className="flex items-center gap-2">
              <IconButton variant="outlined" color="indigo" size="sm">
                1
              </IconButton>
              <IconButton variant="text" color="indigo" size="sm">
                2
              </IconButton>
              <IconButton variant="text" color="indigo" size="sm">
                3
              </IconButton>
              <IconButton variant="text" color="indigo" size="sm">
                ...
              </IconButton>
              <IconButton variant="text" color="indigo" size="sm">
                8
              </IconButton>
              <IconButton variant="text" color="indigo" size="sm">
                9
              </IconButton>
              <IconButton variant="text" color="indigo" size="sm">
                10
              </IconButton>
            </div>
            <IconButton
              className="text-xl"
              variant="text"
              color="indigo"
              size="sm"
            >
              <Icon icon="iconamoon:arrow-right-2-duotone" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
