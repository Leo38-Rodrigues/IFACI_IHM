"use client";
import { useState } from "react";
import AddDispositivo from "./addDispositivo";

type Props = {
    open: boolean;
    setOpen: (value: boolean) => void;
    onAdd: (dispositivo: { nome: string; setor: string }) => void;
};

export default function ModalAddDispositivo({ open, setOpen, onAdd }: Props) {
    const [nome, setNome] = useState("");
    const [setor, setSetor] = useState("");

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-6 w-[400px] shadow-xl">

                <h2 className="text-xl font-semibold mb-4">
                    Novo Dispositivo
                </h2>

                <div className="space-y-3">
                    <input
                        placeholder="Nome do equipamento"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                    />

                    <input
                        placeholder="Setor"
                        value={setor}
                        onChange={(e) => setSetor(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                    />
                </div>

                <div className="flex gap-2 mt-5">
                    <button
                        onClick={() => {
                            onAdd({ nome, setor });
                            setOpen(false);
                            setNome("");
                            setSetor("");
                        }}
                        className="flex-1 bg-green-500 text-white py-2 rounded-lg"
                    >
                        Salvar
                    </button>

                    <button
                        onClick={() => setOpen(false)}
                        className="flex-1 bg-red-500 text-white py-2 rounded-lg"
                    >
                        Cancelar
                    </button>
                </div>

            </div>
        </div>
    );
}