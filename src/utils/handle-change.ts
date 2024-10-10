import type { ChangeEvent, Dispatch, SetStateAction } from "react";

export const HandleChange = <T extends Object>(e: ChangeEvent<HTMLInputElement>, setFormData: Dispatch<SetStateAction<T>>, formData: T) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};