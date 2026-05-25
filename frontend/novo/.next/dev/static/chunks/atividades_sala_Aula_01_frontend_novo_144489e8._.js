(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/atividades_sala/Aula_01/frontend/novo/app/components/CriarUsuario.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CriarUsuario
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/atividades_sala/Aula_01/frontend/novo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/atividades_sala/Aula_01/frontend/novo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CriarUsuario() {
    _s();
    const [novoUsuario, setNovoUsuario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nome_completo: "",
        email: "",
        senha: ""
    });
    const pegaInfo = (e, where)=>{
        const value = e.target.value;
        if (where === "nome") {
            setNovoUsuario({
                ...novoUsuario,
                nome_completo: value
            });
        } else if (where === "email") {
            setNovoUsuario({
                ...novoUsuario,
                email: value
            });
        } else {
            setNovoUsuario({
                ...novoUsuario,
                senha: value
            });
        }
    };
    const criarUsuario = async ()=>{
        //Promise -> Promessa
        const url = 'http://localhost:8080/novoUsuario';
        try {
            const resposta = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novoUsuario)
            });
            const resposta_json = await resposta.json();
            console.log(resposta_json);
            alert("Usuário Criado com Sucesso!");
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[50vw] flex flex-col gap-4 rounded-xl max-h-fit bg-white text-black p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold",
                children: "Criar Novo Usuário"
            }, void 0, false, {
                fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/CriarUsuario.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Nome Completo",
                value: novoUsuario.nome_completo,
                onChange: (e)=>{
                    pegaInfo(e, "nome");
                },
                className: "p-4 rounded-lg outline-2 outline-red-500 "
            }, void 0, false, {
                fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/CriarUsuario.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "email",
                placeholder: "email@email.com",
                value: novoUsuario.email,
                onChange: (e)=>{
                    pegaInfo(e, "email");
                },
                className: "p-4 rounded-lg outline-2 outline-red-500 "
            }, void 0, false, {
                fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/CriarUsuario.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "password",
                placeholder: "Crie uma senha",
                value: novoUsuario.senha,
                onChange: (e)=>{
                    pegaInfo(e, "senha");
                },
                className: "p-4 rounded-lg outline-2 outline-red-500 "
            }, void 0, false, {
                fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/CriarUsuario.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "submit",
                value: "Enviar",
                onClick: criarUsuario,
                className: "py-2 px-4 text-white rounded-lg hover:bg-red-500 bg-red-400"
            }, void 0, false, {
                fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/CriarUsuario.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/CriarUsuario.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, this);
}
_s(CriarUsuario, "uS/C+UIK9OkeNbHZGnzLhBD4iOI=");
_c = CriarUsuario;
var _c;
__turbopack_context__.k.register(_c, "CriarUsuario");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ListarUsuario
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/atividades_sala/Aula_01/frontend/novo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/atividades_sala/Aula_01/frontend/novo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ListarUsuario() {
    _s();
    //Criar a lógica aqui.
    const [usuarios, setUsuarios] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 0,
            nome_completo: "",
            email: "",
            senha: ""
        }
    ]);
    const [novoUsuario, setNovoUsuario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nome_completo: "",
        email: "",
        senha: ""
    });
    const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0) //Variável Global
    ;
    const pegaInfoBackend = async ()=>{
        //Responsável por fazer um GET no usuários backend.
        const url = "http://localhost:8080/usuarios";
        try {
            //tentando até ter sucesso
            const resposta = await fetch(url);
            const resposta_json = await resposta.json();
            setUsuarios(resposta_json);
        } catch (erro) {
            //pegar o erro (caso exista)
            console.log(erro);
        }
    };
    const deletaUsuario = async (id)=>{
        const url = `http://localhost:8080/usuarios/${id}`;
        const config_request = {
            method: "DELETE"
        };
        try {
            const resposta = await fetch(url, config_request);
            const resposta_json = await resposta.json();
            alert(resposta_json.msg);
        } catch (erro) {
            console.log(erro);
        }
    };
    const [modalAberto, setModalAberto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pegaInfo = (e, where)=>{
        const value = e.target.value;
        if (where === "nome") {
            setNovoUsuario({
                ...novoUsuario,
                nome_completo: value
            });
        } else if (where === "email") {
            setNovoUsuario({
                ...novoUsuario,
                email: value
            });
        } else {
            setNovoUsuario({
                ...novoUsuario,
                senha: value
            });
        }
    };
    const editarUsuario = async (id)=>{
        const url = `http://localhost:8080/usuarios/${id}`;
        const config_request = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoUsuario)
        };
        try {
            const resposta = await fetch(url, config_request);
            const resposta_json = await resposta.json();
            alert(resposta_json.msg);
            setNovoUsuario({
                nome_completo: "",
                email: "",
                senha: ""
            });
        } catch (erro) {
            alert("Erro ao editar o usuário");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ListarUsuario.useEffect": ()=>{
            pegaInfoBackend();
        }
    }["ListarUsuario.useEffect"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[50vw] max-h-[88vh] overflow-y-auto bg-white text-black rounded-xl flex flex-col gap-4 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold",
                children: "Lista de Usuários"
            }, void 0, false, {
                fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                lineNumber: 107,
                columnNumber: 13
            }, this),
            usuarios.map((indice, id)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-300 border-2 border-gray-500 rounded-lg p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold",
                            children: [
                                "Usuário ",
                                indice.id,
                                " "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                            lineNumber: 111,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: indice.nome_completo
                            }, void 0, false, {
                                fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                                lineNumber: 113,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                            lineNumber: 112,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Email: ",
                                        indice.email
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                                    lineNumber: 116,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-black"
                                }, void 0, false, {
                                    fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                                    lineNumber: 117,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                            lineNumber: 115,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Senha: ",
                                        indice.senha
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                                    lineNumber: 120,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-black"
                                }, void 0, false, {
                                    fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                                    lineNumber: 121,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                            lineNumber: 119,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-full justify-end gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "button",
                                    value: "Editar",
                                    onClick: ()=>{
                                        setModalAberto(true);
                                        userId.current = indice.id;
                                    },
                                    className: "rounded-lg px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                                    lineNumber: 124,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "button",
                                    value: "Deletar",
                                    onClick: ()=>{
                                        deletaUsuario(indice.id);
                                    },
                                    className: "rounded-lg px-4 py-2 bg-red-400 hover:bg-red-500 text-white cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                                    lineNumber: 130,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                            lineNumber: 123,
                            columnNumber: 29
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                    lineNumber: 110,
                    columnNumber: 25
                }, this);
            }),
            modalAberto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-screen h-screen inset-0 absolute bg-gray-700/50 flex justify-center items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[50vw] h-fit rounded-2xl shadow-lg bg-white flex flex-col px-6 py-4 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold",
                            children: [
                                "Editar Usuário ",
                                userId.current
                            ]
                        }, void 0, true, {
                            fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                            lineNumber: 143,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Novo Nome",
                                    value: novoUsuario.nome_completo,
                                    onChange: (e)=>{
                                        pegaInfo(e, "nome");
                                    },
                                    className: "p-4 rounded-lg outline-2 outline-red-500 "
                                }, void 0, false, {
                                    fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                                    lineNumber: 145,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "Novo email",
                                    value: novoUsuario.email,
                                    onChange: (e)=>{
                                        pegaInfo(e, "email");
                                    },
                                    className: "p-4 rounded-lg outline-2 outline-red-500 "
                                }, void 0, false, {
                                    fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                                    lineNumber: 152,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    placeholder: "Nova Senha",
                                    value: novoUsuario.senha,
                                    onChange: (e)=>{
                                        pegaInfo(e, "senha");
                                    },
                                    className: "p-4 rounded-lg outline-2 outline-red-500 "
                                }, void 0, false, {
                                    fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                                    lineNumber: 159,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-8 justify-end w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "button",
                                            value: "Confirmar",
                                            onClick: ()=>{
                                                editarUsuario(userId.current);
                                                setModalAberto(false);
                                            },
                                            className: "rounded-lg px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white cursor-pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                                            lineNumber: 168,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "button",
                                            value: "Cancelar",
                                            onClick: ()=>{
                                                setModalAberto(false);
                                            },
                                            className: "rounded-lg px-4 py-2 bg-red-400 hover:bg-red-500 text-white cursor-pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                                            lineNumber: 174,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                                    lineNumber: 167,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                            lineNumber: 144,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                    lineNumber: 142,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
                lineNumber: 141,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/atividades_sala/Aula_01/frontend/novo/app/components/ListarUsuario.tsx",
        lineNumber: 106,
        columnNumber: 9
    }, this);
}
_s(ListarUsuario, "vyywRd7NqMjIsLalzTYImwGqYVU=");
_c = ListarUsuario;
var _c;
__turbopack_context__.k.register(_c, "ListarUsuario");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/atividades_sala/Aula_01/frontend/novo/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/atividades_sala/Aula_01/frontend/novo/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/atividades_sala/Aula_01/frontend/novo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/atividades_sala/Aula_01/frontend/novo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$atividades_sala$2f$Aula_01$2f$frontend$2f$novo$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/atividades_sala/Aula_01/frontend/novo/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/atividades_sala/Aula_01/frontend/novo/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=atividades_sala_Aula_01_frontend_novo_144489e8._.js.map