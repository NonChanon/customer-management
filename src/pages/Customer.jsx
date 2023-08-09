import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";
import { Input, Button, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TABLE_ROWS = [
  {
    name: "John Michael",
    merchain: "Alexa Liras",
  },
  {
    name: "John Michael",
    merchain: "Alexa Liras",
  },
  {
    name: "John Michael",
    merchain: "Alexa Liras",
  },
  {
    name: "John Michael",
    merchain: "Alexa Liras",
  },
  {
    name: "John Michael",
    merchain: "Alexa Liras",
  },
  {
    name: "John Michael",
    merchain: "Alexa Liras",
  },
  {
    name: "John Michael",
    merchain: "Alexa Liras",
  },
  {
    name: "John Michael",
    merchain: "Alexa Liras",
  },
  {
    name: "John Michael",
    merchain: "Alexa Liras",
  },
  {
    name: "John Michael",
    merchain: "Alexa Liras",
  },
];

export function Customer() {
  return (
    <div className="bg-[#FAFAFC] min-h-screen py-5">
      <div className="w-[90%] mx-auto">
        <div className="bg-white w-20 md:w-40 h-10 md:h-12 flex items-center justify-center rounded-ss-md shadow-lg">
          <span className="absolute z-10 flex items-center font-[600] md:text-xl pl-10 pt-2 text-indigo-600">
            <Icon icon="fa6-solid:list-ul" className="mr-2 hidden md:block" />
            Customer
          </span>
          <div className="absolute bg-white skew-x-[30deg] ml-14 rounded-t-lg w-24 md:w-48 h-10 md:h-12" />
        </div>
        <div className="w-full p-5 bg-white rounded-lg rounded-ss-none shadow-lg">
          <div className="flex justify-between items-center mb-10">
            <IconButton
              variant="filled"
              color="indigo"
              className="shadow-none md:hidden"
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            <div className="hidden md:flex gap-2">
              <a href="/addcustomer">
                <Button
                  className="flex items-center gap-3 shadow-none"
                  color="indigo"
                >
                  <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add
                  Customer
                </Button>
              </a>
            </div>
            <div className="md:w-72 bg-white">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
          <div className="overflow-x-auto mt-5">
            <table className="flex-col justify-between w-full text-center border-b border-[#DFDFDF] text-sm ">
              <thead className="text-[#818181] border-b border-[#DFDFDF]">
                <tr>
                  <th className="px-6 pb-4 hidden md:block">No.</th>
                  <th className="px-6 pb-4">Customer Name</th>
                  <th className="px-6 pb-4">Merchaindiser</th>
                  <th className="px-6 pb-4 hidden md:block">Action</th>
                </tr>
              </thead>
              <tbody className="text-[#1C3879]">
                {TABLE_ROWS.map((row, i) => (
                  <tr>
                    <td className="hidden px-6 py-4 md:block">{i + 1}</td>
                    <td className="px-6 py-4">{row.name}</td>
                    <td className="px-6 py-4">{row.merchain}</td>
                    <td className="hidden px-6 py-4 md:flex justify-center items-center">
                      <Link to="/addcustomer">
                        <Icon
                          icon="mdi:clipboard-edit-outline"
                          width="24"
                          className="cursor-pointer"
                        />
                      </Link>
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
