import agenda from '../../assets/icons/services/agenda.svg'
import historialClinico from '../../assets/icons/services/historialClinico.svg'
import videoLlamadas from '../../assets/icons/services/videoLlamadas.svg'

const ServicesData = [
    {
        id: 1,
        title: 'Historial Clínico',
        descripcion : 'Facilite a los profesionales la gestión de historiales electrónicos de pacientes con una plataforma de registro clínico simplificado.',    
        icon: historialClinico
    },
    {
        id: 2,
        title: 'Agenda',
        descripcion : 'Gestione eficientemente las agendas de los profesionales y permita a los pacientes realizar citas médicas mediante un portal web.',
        icon: agenda
    },
    {
        id: 3,
        title: 'Videoconsulta',
        descripcion : 'El paciente obtiene detalles y un enlace para acceder a la consulta virtual directamente desde cualquier navegador, sin instalar aplicaciones.',
        icon: videoLlamadas
    },
]


export default function Service() {
  return (
    <section className="container mx-10 mt-12 max-w-[90%]">
      <div className="flex justify-center mb-12">
        <h2 className="text-center text-3xl font-bold">Optimiza tu trabajo</h2>
      </div>
      <div className="flex flex-wrap mb-12">
        {ServicesData.map((service) => (
          <div
            key={service.id}
            className="w-full md:w-1/3 flex flex-col items-center p-8 gap-6"
          >
            <img
              className="w-1/4 mx-auto"
              src={service.icon}
              alt={service.title}
            />
            <h2 className="text-center text-2xl font-semibold p-4">
              {service.title}
            </h2>
            <p className="text-center text-lg p-5">{service.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
