"use client";
import { useState, useEffect } from "react";
import { Trash2 } from 'lucide-react-native';

type Props = {
    open: boolean;
    setOpen: (value: boolean) => void;
    dispositivo: any;
    onSave: (novosSensores: any) => void;
};

export default function ModalSensores({ open, setOpen, dispositivo, onSave }: Props) {
    const [trava, setTrava] = useState(true);

    const [editando, setEditando] = useState(false);

    const [setpoints, setSetpoints] = useState<any>({});

    const [dadosDispositivo, setDadosDispositivo] = useState<any[]>([]);


    const sensor = dadosDispositivo.find(
        sensor => sensor.id === dispositivo?.id
    )


    const listaTodosSensores = async () => {
        let url = `http://localhost:8080/iot/`;

        try {
            const resposta = await fetch(url)
            const resposta_json = await resposta.json()
            setDadosDispositivo(resposta_json)
            console.log(resposta_json)
        }
        catch (erro) {
            console.log(erro)
        }
    }


    useEffect(() => {
        listaTodosSensores()
    });


    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-6 w-[620px] shadow-xl">

                {/* TÍTULO */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">
                        Sensores do Dispositivo
                    </h2>

                    <button
                        onClick={() => setEditando(!editando)}
                        className="hover:text-blue-500"
                    >
                        ✏️ {editando ? "Cancelar" : "Editar"}
                    </button>
                </div>

                {/* SENSORES */}
                <div className="space-y-3">

                    {/* TEMPERATURA --------------------------------------------*/}
                    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                        <span>🌡️ Temperatura</span>

                        {editando ? (
                            <input
                                type="number"
                                value={setpoints?.temperatura || ""}
                                onChange={(e) =>
                                    setSetpoints({ ...setpoints, temperatura: Number(e.target.value) })
                                }
                                className="w-20 p-1 rounded border"
                            />
                        ) : (
                            <span className="font-semibold">
                                {sensor?.temperatura}°C
                            </span>
                        )}
                    </div>

                    {/* PRESSÃO --------------------------------------------*/}
                    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                        <span>🌡️ Pressão</span>
                        {editando ? (
                            <input
                                type="number"
                                value={setpoints?.pressao || ""}
                                onChange={(e) =>
                                    setSetpoints({ ...setpoints, pressao: Number(e.target.value) })
                                }
                                className="w-20 p-1 rounded border"
                            />
                        ) : (
                            <span className="font-semibold">{sensor?.pressao}°C</span>
                        )}
                    </div>

                    {/* UMIDADE --------------------------------------------*/}
                    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                        <span>💧 Umidade</span>
                        {editando ? (
                            <input
                                type="number"
                                value={setpoints.umidade || ""}
                                onChange={(e) =>
                                    setSetpoints({ ...setpoints, umidade: Number(e.target.value) })
                                }
                                className="w-20 p-1 rounded border"
                            />
                        ) : (
                            <span className="font-semibold">{sensor?.umidade}%</span>
                        )}
                    </div>

                    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                        <span>⚡ Presença</span>
                        {editando ? (
                            <select
                                value={setpoints.presenca || ""}
                                onChange={(e) =>
                                    setSetpoints({ ...setpoints, presenca: e.target.value })
                                }
                                className="p-1 rounded border"
                            >
                                <option value="true">Ativo</option>
                                <option value="false">Inativo</option>
                            </select>
                        ) : (
                            <span className="text-green-600 font-semibold">
                               {sensor?.sensor_presenca ? "Ativo" : "Inativo"}
                            </span>
                        )}
                    </div>

                    <div
                        onClick={() => setTrava(!trava)}
                        className="flex justify-between items-center bg-gray-100 p-3 rounded-lg cursor-pointer hover:bg-gray-200"
                    >
                        <span>{sensor?.trava_seguranca ? "🔒" : "🔓"} Trava de segurança</span>

                        <span
                            className={`px-2 py-1 rounded-md text-sm ${trava
                                ? "bg-red-100 text-red-600"
                                : "bg-green-100 text-green-600"
                                }`}
                        >
                            {sensor?.trava_seguranca? "Travada" : "Destravada"}
                        </span>
                    </div>
                </div>

                {/* BOTÃO */}
                {editando && (
                    <button
                        onClick={() => {
                            onSave(setpoints);
                            setEditando(false);
                        }}
                        className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
                    >
                        Salvar setpoints
                    </button>
                )}
                <button
                    onClick={() => setOpen(false)}
                    className="mt-5 w-full bg-red-500 text-white py-2 rounded-lg"
                >
                    Fechar
                </button>

            </div>
        </div>
    );
}