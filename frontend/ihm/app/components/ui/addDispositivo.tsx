"use client";
import { useState } from "react";
import ModalAddDispositivo from "./modalDispositivo";



type Props = {
  onClick: () => void;
};

export default function AddDispositivo({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg text-2xl flex items-center justify-center"
    >
      +
    </button>
  );
}