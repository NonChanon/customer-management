import { Icon } from "@iconify/react";
import { Button, Input } from "@material-tailwind/react";
import React from "react";

export default function AddProduct() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FAFAFC]">
      <form className="flex flex-col w-[340px] md:w-[500px] -mt-[50px] p-10 rounded-lg shadow-xl bg-white">
        <span className="text-xl font-bold text-indigo-600 text-center">
          ADD PRODUCT
        </span>
        <div className="mt-7 flex flex-col gap-6 w-full">
          <Input color="indigo" size="lg" label="Product Name" />
          <Input color="indigo" size="lg" label="Quantity" />
        </div>

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
