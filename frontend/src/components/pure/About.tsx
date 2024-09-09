import image from '../../assets/images/About/img_about.png'

const About = () => {
  return (
    <div className="mx-auto max-w-screen-lg flex justify-center items-center">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full p-5">
          <h2 className="text-2xl font-bold mt-3">Sobre Nosotros</h2>
          <span className="text-xl mt-3 block font-semibold">
            HeyDoc es una plataforma que te ayuda a mejorar tu salud
          </span>
          <p className="mt-3 text-lg">
            Pasa consulta online por chat y videollamada, emite recetas e informes, envía citas y solicita cobros a tus pacientes. Todo desde una misma plataforma.
          </p>
        </div>
        <div className="md:w-1/2 w-full p-5">
          <div className="flex justify-center">
            <img src={image} alt="Sobre Nosotros" className="w-3/4" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
