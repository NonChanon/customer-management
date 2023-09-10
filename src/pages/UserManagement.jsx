import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";
import { Input, Button, IconButton } from "@material-tailwind/react";
import { useToggle } from "../hooks/useToggle";
import AddUser from "./AddUser";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableCell } from "@mui/material";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const { status: isEditOpen, toggleStatus: setIsEditOpen } = useToggle();
  const [indexValue, setIndexValue] = useState(-1);
  if (isEditOpen) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <td>
          <IconButton
            variant="text"
            size="sm"
            color="indigo"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <Icon icon="iconamoon:arrow-up-2" width="20" />
            ) : (
              <Icon icon="iconamoon:arrow-down-2" width="20" />
            )}
          </IconButton>
        </td>
        <td className="px-6 py-4">{props.index + 1}</td>
        <td className="px-6 py-4">{row.name}</td>
        <td className="px-6 py-4">{row.password}</td>
        <td className="px-6 py-4">{row.nickname}</td>
        <td className="px-6 py-4">{row.email}</td>
        <td className="px-6 py-4">{row.phone}</td>
        <td className="px-6 py-4">{row.line}</td>
        <td className="flex px-6 py-4 justify-center h-[75px] items-center">
          <Icon
            icon="mdi:edit"
            width="22"
            className="cursor-pointer"
            onClick={() => {
              setIsEditOpen();
              setIndexValue(props.index);
            }}
          />
          <Icon
            icon="ri:delete-bin-fill"
            width="22"
            className="cursor-pointer mb-[2px] ml-3"
            onClick={() => {}}
          />
        </td>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className="w-full">
              <div className="text-center">ควยจ๊าก</div>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
      {isEditOpen && (
        <AddUser
          onClick={setIsEditOpen}
          detail={TABLE_ROWS[indexValue]}
          name="EDIT USER"
        />
      )}
    </React.Fragment>
  );
}

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

export default function UserManagement() {
  const { status: isOpen, toggleStatus: setIsOpen } = useToggle();
  if (isOpen) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }
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
            <TableContainer component={Paper}>
              <Table
                aria-label="collapsible table"
                className="text-indigo-800 border-b border-[#DFDFDF] text-center text-sm"
              >
                <TableHead className="border-b">
                  <TableRow>
                    <th></th>
                    <th className="px-6 pb-4">No.</th>
                    <th className="px-6 pb-4">Name</th>
                    <th className="px-6 pb-4">Password</th>
                    <th className="px-6 pb-4">Nickname</th>
                    <th className="px-6 pb-4">Email</th>
                    <th className="px-6 pb-4">Phone No.</th>
                    <th className="px-6 pb-4">ID Line</th>
                    <th className="px-6 pb-4">Action</th>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {TABLE_ROWS.map((row, i) => (
                    <Row key={row.name} row={row} index={i} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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

          {isOpen && <AddUser onClick={setIsOpen} detail="" name="ADD USER" />}
        </div>
      </div>
    </div>
  );
}
