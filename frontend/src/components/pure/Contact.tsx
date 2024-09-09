const Contact = () => {
    return (
      <section className="container mx-auto flex flex-wrap">
        {/* Logo y Descripción */}
        <div className="w-full md:w-1/2 p-5">
          <div className="p-5">
            <p>HeyDoc!</p>
          </div>
          <div className="p-5">
            <p className="text-lg font-semibold">Contáctenos</p>
            <h3 className="text-2xl mt-3 font-bold">Consulta tus dudas</h3>
            <p className="mt-3 text-lg">
              Figma ipsum component variant main layer. Underline comment style
              strikethrough editor effect. Invite ipsum image italic fill comment. Group object variant ellipse
              variant flatten fill. Draft group hand prototype auto community
              italic. Inspect link layer frame image underline. Link layout
              follower object frame.
            </p>
          </div>
        </div>
  
        {/* Formulario de Contacto */}
        <div className="w-full md:w-1/2 p-5">
          <form className="p-5 bg-white rounded shadow-md">
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">Nombre *</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 text-lg"
                id="InputName"
                name="name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">Empresa - Opcional</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 text-lg"
                id="exampleInputEmpresa1"
                name="company"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">Correo Electrónico *</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3 text-lg"
                id="InputCorreoElectronico"
                name="email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">Teléfono *</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 text-lg"
                id="InputTelefono"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">Tu Consulta</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 text-lg"
                id="InputConsulta"
                rows={4}
              ></textarea>
            </div>
  
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg text-lg"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  