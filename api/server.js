const express = require('express')
const cors = require('cors')
const api = express()

//Middlewares
api.use(express.json())
api.use(cors())

const dados = []
const iot_data = []
const devices = []


function criaSensor(device_id) {
     const newData = {
            id: device_id,
            device_id: device_id,
            temperatura: 0,
            pressao: 0,
            umidade: 0,
            sensor_presenca: false,
            trava_seguranca: false,
        }
        iot_data.push(newData)
}


//Rotas
api.get('/usuarios', (req, res)=>{
    let users = dados;

    res.status(200).send(users)
})

//Rota de IOT
api.get('/iot', (req, res)=>{
    let outputData = iot_data
    res.status(200).send(outputData)
})
//Rota por sensor
api.get('/sensor/:id', (req, res)=>{
    let sensor_data = iot_data[req.params.id]

    res.status(201).send(sensor_data)
})

api.get('/devices', (req, res) => {

    const output = devices.map(device => {

        const sensoresDoDispositivo = iot_data.filter(sensor =>
            sensor.device_id === device.id
        )

        return {
            detalhes: device,
            sensores: sensoresDoDispositivo
        }
    })

    res.status(200).send(output)
})
api.post('/novoDispositivo', (req, res) => {

    const { setor, equipamento } = req.body

    if (!req.body) {
        return res.status(400).send("Erro ao cadastrar dispositivo")
    }

    // pega menor ID disponível
    let novoId = 1

    while (devices.some(device => device.id === novoId)) {
        novoId++
    }

    const novoDevice = {
        id: novoId,
        device_data: req.body
    }

    devices.push(novoDevice)

    criaSensor(novoId)

    return res.status(201).send("Dispositivo cadastrado com sucesso!")
})

api.post('/newData', (req, res)=>{
        const { 
            temperatura,
            pressao,
            umidade,
            sensor_presenca,
            trava_seguranca, } = req.body

            id = id+1;

        if(req.body === null){
            return res.status(400).send("Dados não encontrados")
        }
        else{
            const newData = {
            id: id,
            temperatura,
            pressao,
            umidade,
            sensor_presenca,
            trava_seguranca,
        }
        iot_data.push(newData)
        return res.status(201).send({ message: 'Dados recebidos com sucesso!' })
        }
    })

api.put('/sensor/:id', (req,res)=>{
    const id = req.params.id
    const newBody = req.body
    
    const index = iot_data.findIndex(p => p.id=== parseInt(id))
    
    if(index != -1){
        iot_data[index] = {id: parseInt(id), ...newBody}
        console.log(dados[index])
        return res.status(200).send({
            "msg":"Dados do sensor atualizados!"
        })
    }
    else{
        return res.status(500).send({
            "msg":"Erro ao atualizar o sensor!"
        })
    }
})

api.delete('/device/:id', (req, res) => {

    const deviceId = parseInt(req.params.id)

    const deviceIndex = devices.findIndex(
        d => d.id === deviceId
    )

    if (deviceIndex === -1) {
        return res.status(404).send({
            message: "Dispositivo não encontrado"
        })
    }

    devices.splice(deviceIndex, 1)

    const sensorIndex = iot_data.findIndex(
        s => s.device_id === deviceId
    )

    if (sensorIndex !== -1) {
        iot_data.splice(sensorIndex, 1)
    }

    return res.status(200).send({
        message: "Dispositivo removido"
    })
})

const porta = 8080;
api.listen(porta, ()=>{
    console.log(`API rodando na porta ${porta}`)
})