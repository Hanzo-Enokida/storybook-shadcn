"use client";

import { CiCalendar } from "react-icons/ci";
import { Input } from "../../ui/input";

export const InputIcon = () => {
  return <Input type="search" icon={CiCalendar} placeholder="Search..." />;
};

export default InputIcon;
