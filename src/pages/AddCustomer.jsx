import { Icon } from "@iconify/react";
import { Button, Input } from "@material-tailwind/react";
import { React, useState } from "react";
import { useToggle } from "../hooks/useToggle";
import AddProduct from "./AddProduct";

export default function AddCustomer() {
  const { status: isOpen, toggleStatus: setIsOpen } = useToggle();
  const { status: isEditOpen, toggleStatus: setIsEditOpen } = useToggle();
  const [product, setProduct] = useState([]);

  const getData = (data) => {
    console.log(data);
    setProduct([...product, data]);
  };

  const editData = (data, i) => {
    console.log(data);
    product[i] = data;
  };

  const deleteData = (i) => {
    console.log("delete Success");
    const temp = [...product];
    temp.splice(i, 1);
    setProduct(temp);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FAFAFC]">
      <form className="flex flex-col w-[90%] max-w-[400px] -mt-[50px] p-10 rounded-lg shadow-xl bg-white">
        <span className="text-xl font-bold text-indigo-600 text-center">
          ADD CUSTOMER
        </span>
        <div className="mt-7 flex flex-col gap-6 w-full">
          <Input color="indigo" size="lg" label="Customer Name" />
          <Input color="indigo" size="lg" label="E-Mail" />
          <Input color="indigo" size="lg" label="Contact Number" />
        </div>
        {product[0] == null ? (
          <div className="mt-0" />
        ) : (
          <div className="mt-4" />
        )}
        {product.map((prod, i) => (
          <div className="flex justify-between items-center mt-2 text-indigo-600">
            <div className="flex items-center">
              <Icon icon="radix-icons:dot-filled" />
              <div className="text-sm ml-1">{prod.name}</div>
            </div>
            <div className="flex">
              <Icon
                icon="majesticons:send"
                className="mx-[6px] cursor-pointer"
              />
              <Icon
                icon="mdi:edit"
                className="mx-[6px] cursor-pointer"
                onClick={setIsEditOpen}
              />
              <Icon
                icon="mdi:bin"
                className="ml-[6px] cursor-pointer"
                onClick={(e) => {
                  deleteData(i);
                }}
              />
            </div>
            {isEditOpen && (
              <AddProduct
                onClick={setIsEditOpen}
                detail={prod}
                index={i}
                onSubmit={editData}
                name="EDIT PRODUCT"
              />
            )}
          </div>
        ))}

        <Button
          variant="text"
          className="flex items-center gap-1 p-0 mt-5 mb-7 w-fit  hover:bg-white pr-1"
          fullWidth
          color="indigo"
          onClick={setIsOpen}
        >
          <Icon icon="entypo:plus" width="16" />
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
      {isOpen && (
        <AddProduct
          onClick={setIsOpen}
          onSubmit={getData}
          detail=""
          name="ADD PRODUCT"
        />
      )}
    </div>
  );
}
