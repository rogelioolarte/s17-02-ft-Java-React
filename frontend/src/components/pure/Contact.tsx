import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
      <section className="container mx-10 mt-10 mb-[15%] flex flex-wrap max-w-[90%] justify-center">
      <div className="container mx-auto">
        <div className=" text-center ">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 text-4xl !leading-snug lg:text-[40px]"
          >
            Sobre Nosotros
          </Typography>
          <Typography
            className="mx-auto font-normal text-[18px] lg:max-w-3xl"
          >
            Si deseas contactarnos, visita nuestro repositorio para mas información.
          </Typography>
          <Link to="https://github.com/rogelioolarte/s17-02-ft-Java-React">
              <Typography className="text-[#1ab2af] mt-4 font-bold" >
                {"> Visita Nuestro repositorio en GitHub <"}
              </Typography>
            </Link>
        </div>
      </div>
    </section>
    );
  };
  
  export default Contact;
  