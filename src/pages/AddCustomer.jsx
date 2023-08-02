import { Icon } from "@iconify/react";
import { Button, Input } from "@material-tailwind/react";
import React from "react";

export default function AddCustomer() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FAFAFC]">
      <form className="flex flex-col w-[340px] md:w-96 -mt-[50px] p-10 rounded-lg shadow-xl bg-white">
        <span className="text-xl font-bold text-indigo-600 text-center">
          ADD CUSTOMER
        </span>
        <div className="mt-7 flex flex-col gap-6 w-full">
          <Input color="indigo" size="lg" label="Customer Name" />
          <Input color="indigo" size="lg" label="Job Title" />
          <Input color="indigo" size="lg" label="Responsible Man" />
        </div>
        <Button
          variant="text"
          className="flex items-center gap-1 p-0 mt-5 mb-7 w-fit  hover:bg-white"
          fullWidth
          color="indigo"
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
    </div>
  );
}
