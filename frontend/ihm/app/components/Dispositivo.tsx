"use client"
import { useEffect, useState } from "react"
import ModalSensores from "./ui/modalSensores"
import ModalAddDispositivo from "./ui/modalDispositivo"
import AddDispositivo from "./ui/addDispositivo"


type NovoDispositivo = {
    nome: string;
    setor: string;
};

type DispositivoType = {
    id: number;
    nome: string;
    setor: string;
    sensores: {
        temperatura: number;
        pressao: number;
        umidade: number;
        presenca: string;
    };
};



export default function Dispositivo() {

    const [open, setOpen] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);

    const [dispositivos, setDispositivos] = useState<DispositivoType[]>([]);

    const deletarDispositivo = async (id: number) => {

        try {

            const response = await fetch(
                `http://localhost:8080/device/${id}`,
                {
                    method: "DELETE"
                }
            )

            if (!response.ok) {
                throw new Error("Erro ao deletar dispositivo")
            }

            await buscaDispositivos()

        }
        catch (erro) {
            console.log(erro)
        }
    }         


    const buscaDispositivos = async () => {
        let url = `http://localhost:8080/devices/`;
        try {
            const resposta = await fetch(url)
            const resposta_json = await resposta.json()

            const dispositivosFormatados = resposta_json.map((item: any) => ({

                id: item.detalhes.id,

                nome: item.detalhes.device_data.equipamento,

                setor: item.detalhes.device_data.setor,

            }))

            setDispositivos(dispositivosFormatados)

        }
        catch (erro) {
            console.log(erro)
        }
    }

    async function handleAddDispositivo(
        dispositivo: NovoDispositivo
    ) {
        try {

            const response = await fetch(
                "http://localhost:8080/novoDispositivo",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        setor: dispositivo.setor,
                        equipamento: dispositivo.nome,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Erro ao cadastrar dispositivo");
            }

            // cria dispositivo completo
            await buscaDispositivos();

            // renderiza card


        } catch (error) {
            console.error(error);
        }
    }




    const atualizarSensores = (novosSensores: any) => {
        setDispositivos(prev =>
            prev.map(d =>
                d.id === dispositivoSelecionado?.id
                    ? { ...d, sensores: novosSensores }
                    : d
            )
        );


        setDispositivoSelecionado(prev =>
            prev ? { ...prev, sensores: novosSensores } : null
        );
    };

    useEffect(() => {
        buscaDispositivos()
    }, []);

    const [dispositivoSelecionado, setDispositivoSelecionado] =
        useState<DispositivoType | null>(null);

    return (
        <>
            <div className="p-6 grid grid-cols-4 gap-6">

                {/* CARD */}
                {dispositivos.map((d) => (
                    <div
                        key={d.id}
                        onClick={() => {
                            setDispositivoSelecionado(d);
                            setOpen(true);
                        }}
                        className=" relative bg-white shadow-md rounded-xl p-6 w-[350px] h-[200px] border border-gray-300 cursor-pointer"
                    >
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            Dispositivo: #{d.id}  {/*ID AQUI*/}
                        </h2>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                deletarDispositivo(d.id);
                            }}
                            className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-xl"
                        >
                            🗑️
                        </button>

                        <div className="space-y-2 text-gray-700">
                            <p><span className="font-medium">Nome:</span> {d.nome}</p>
                            <p><span className="font-medium">Setor:</span> {d.setor}</p>
                        </div>

                        <div className="mt-4 flex items-center justify-between bg-green-100 px-4 py-2 rounded-lg">
                            <span className="text-green-800 font-medium">Status</span>
                            <span className="flex items-center gap-2 text-green-700 font-semibold">
                                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                Ligado
                            </span>
                        </div>
                    </div>
                ))}

            </div>

            {/* MODAIS */}
            <ModalSensores
                open={open}
                setOpen={setOpen}
                dispositivo={dispositivoSelecionado}
                onSave={atualizarSensores}
            />
            <ModalAddDispositivo
                open={openAdd}
                setOpen={setOpenAdd}
                onAdd={handleAddDispositivo}
            />

            {/* BOTÃO FLUTUANTE */}
            <AddDispositivo onClick={() => setOpenAdd(true)} />

        </>
    )
}