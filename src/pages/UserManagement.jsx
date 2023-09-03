import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";
import { Input, Button, IconButton } from "@material-tailwind/react";
import { useToggle } from "../hooks/useToggle";
import AddUser from "./AddUser";

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
];

export default function UserManagement() {
  const { status: isOpen, toggleStatus: setIsOpen } = useToggle();
  const { status: isEditOpen, toggleStatus: setIsEditOpen } = useToggle();
  const [indexValue, setIndexValue] = useState(-1);

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-20">
      <div className="w-[90%] mx-auto">
        <div className="bg-white w-36 md:w-52 h-10 md:h-12 flex items-center justify-center rounded-ss-md shadow-lg">
          <span className="absolute z-[6] flex items-center font-[600] md:text-xl pl-10 pt-2 text-indigo-600">
            <Icon icon="fa6-solid:list-ul" className="mr-2 hidden md:block" />
            User Management
          </span>
          <div className="absolute bg-white skew-x-[30deg] ml-14 rounded-t-lg w-44 md:w-60 h-10 md:h-12" />
        </div>
        <div className="w-full p-5 bg-white rounded-lg rounded-ss-none shadow-lg">
          <div className="flex justify-between items-center mb-10">
            <IconButton
              variant="filled"
              color="indigo"
              className="shadow-none md:hidden"
              onClick={setIsOpen}
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            <div className="hidden md:flex gap-2">
              <Button
                className="flex items-center gap-3 shadow-none"
                color="indigo"
                onClick={setIsOpen}
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add User
              </Button>
            </div>
            <div className="md:w-72 bg-white">
              <Input
                color="indigo"
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
          <div className="overflow-x-auto mt-5">
            <table className="flex-col justify-between w-full text-center border-b border-[#DFDFDF] text-sm ">
              <thead className="text-[#818181] border-b border-[#DFDFDF]">
                <tr>
                  <th className="px-6 pb-4">No.</th>
                  <th className="px-6 pb-4">Name</th>
                  <th className="px-6 pb-4">Password</th>
                  <th className="px-6 pb-4">Nickname</th>
                  <th className="px-6 pb-4">Email</th>
                  <th className="px-6 pb-4">Phone No.</th>
                  <th className="px-6 pb-4">ID Line</th>
                  <th className="px-6 pb-4">Action</th>
                </tr>
              </thead>
              <tbody className="text-[#1C3879]">
                {TABLE_ROWS.map((row, i) => (
                  <tr>
                    <td className="px-6 py-4">{i + 1}</td>
                    <td className="px-6 py-4">{row.name}</td>
                    <td className="px-6 py-4">{row.password}</td>
                    <td className="px-6 py-4">{row.nickname}</td>
                    <td className="px-6 py-4">{row.email}</td>
                    <td className="px-6 py-4">{row.phone}</td>
                    <td className="px-6 py-4">{row.line}</td>
                    <td className="flex px-6 py-4 justify-center items-center">
                      <Icon
                        icon="mdi:clipboard-edit-outline"
                        width="24"
                        className="cursor-pointer"
                        onClick={() => {
                          setIsEditOpen();
                          setIndexValue(i);
                        }}
                      />
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
        {isEditOpen && (
          <AddUser
            onClick={setIsEditOpen}
            detail={TABLE_ROWS[indexValue]}
            name="EDIT USER"
          />
        )}
        {isOpen && <AddUser onClick={setIsOpen} detail="" name="ADD USER" />}
      </div>
    </div>
  );
}
