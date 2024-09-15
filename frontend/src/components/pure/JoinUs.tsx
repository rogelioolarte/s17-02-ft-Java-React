import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function JoinUs(){
    return (
      <section className="mx-10 flex flex-col md:flex-row py-5 max-w-[90%] self-center">
        <div className="w-full md:w-1/2 p-5">
          <div className="flex justify-center">
            <form className="flex flex-col space-y-3 w-full max-w-md">
              <h2 className="text-2xl font-bold text-center">¡Únete a HeyDoc!</h2>
              <Link to="/register/specialist" className="flex justify-center">
                <Button className="mt-3 py-3 px-9 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600">
                  Crear cuenta como Especialista
                </Button>
              </Link>
              
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-5">
          <div className="flex justify-start">
            <h3 className="text-xl font-bold text-left">
              Más de 10,000 profesionales ya gestionan su consulta digital con HeyDoc!
            </h3>
          </div>
        </div>
      </section>
    );
  };
