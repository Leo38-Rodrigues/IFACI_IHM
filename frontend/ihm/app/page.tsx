import Header from "./components/Header";
import Temperatura from "./components/Dispositivo";
import Dispositivo from "./components/Dispositivo";
import AddDispositivo from "./components/ui/addDispositivo";


export default function Home() {
  return (
    <div>
      <Header />
      <div className=" bg-blue-100 min-h-screen" >

        <div className="flex gap-4 p-4 ">
          <Dispositivo />
        </div>

      </div>
    </div>

  )
}