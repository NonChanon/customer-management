import React from "react";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FAFAFC]">
      <form className="flex flex-col items-center w-80 h-[350px] -mt-[100px] p-10 rounded-lg shadow-xl bg-white">
        <span className="text-xl font-bold text-indigo-600 text-center">
          LOGIN
        </span>
        <div className="my-7 flex flex-col gap-6 w-full">
          <Input
            color="indigo"
            size="lg"
            label="Username"
            icon={<Icon icon="teenyicons:user-circle-outline" />}
          />
          <Input
            type="password"
            color="indigo"
            size="lg"
            label="Password"
            icon={<Icon icon="teenyicons:lock-circle-outline" />}
          />
        </div>
        <Button className="h-[44px]" fullWidth color="indigo">
          LOGIN
        </Button>
      </form>
    </div>
  );
}
