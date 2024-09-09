export default function JoinUs(){
    return (
      <section className="mx-auto flex flex-col md:flex-row p-5">
        <div className="w-full md:w-1/2 p-5">
          <div className="flex justify-center">
            <form className="flex flex-col space-y-3 w-full max-w-md">
              <h2 className="text-2xl font-bold text-center">¡Únete a HeyDoc!</h2>
              <button className="mt-3 py-3 px-6 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600">
                Crear cuenta
              </button>
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
