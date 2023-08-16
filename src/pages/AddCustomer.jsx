import { Icon } from "@iconify/react";
import { Button, Input } from "@material-tailwind/react";
import React from "react";
import { useToggle } from "../hooks/useToggle";
import AddProduct from "./AddProduct";

export default function AddCustomer() {
  const { status: isOpen, toggleStatus: setIsOpen } = useToggle();
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FAFAFC]">
      <form className="flex flex-col w-[340px] md:w-96 -mt-[50px] p-10 rounded-lg shadow-xl bg-white">
        <span className="text-xl font-bold text-indigo-600 text-center">
          ADD CUSTOMER
        </span>
        <div className="mt-7 flex flex-col gap-6 w-full">
          <Input color="indigo" size="lg" label="Customer Name" />
          <Input color="indigo" size="lg" label="E-Mail" />
          <Input color="indigo" size="lg" label="Contact Number" />
        </div>
        <Button
          variant="text"
          className="flex items-center gap-1 p-0 mt-5 mb-7 w-fit  hover:bg-white"
          fullWidth
          color="indigo"
          onClick={setIsOpen}
        >
          <Icon icon="entypo:plus" width="18" />
          Product
        </Button>
        <Button
          className="flex items-center justify-center gap-1 h-[44px]"
          fullWidth
          color="indigo"
        >
          <Icon icon="fluent:save-16-filled" width="16" />
          SAVE
        </Button>
      </form>
      {isOpen && <AddProduct onClick={setIsOpen} />}
    </div>
  );
}
