import MedicoCli from "../../assets/images/specialists/medicoclinico.svg";
import Pediatria from "../../assets/images/specialists/pediatria.svg";
import Psicologia from "../../assets/images/specialists//psychologist.svg";
import Dermatologia from "../../assets/images/specialists/dermatologia.svg";
import Cardiologia from "../../assets/images/specialists/cardiologist.svg";
import { Typography } from "@material-tailwind/react";

const specialists = [
    { name: "Médico Clínico", img: MedicoCli }, 
    { name: "Pediatría", img: Pediatria },
    { name: "Psicología", img: Psicologia },
    { name: "Dermatología", img: Dermatologia },
    { name: "Cardiología", img: Cardiologia }
];

const Hero = () => {
  return (
    <div className="min-h-[40rem] p-8 md:p-16 bg-gradient-to-b from-[#CEF9F4] to-[#34CDC8] min-w-full">
        <Typography variant="h1" className="text-center text-primary-dark 
            font-bold uppercase mx-auto text-[#062a2d] " >
          Conecta inmediatamente con los especialistas
        </Typography>
      <div className="flex flex-wrap justify-center gap-3 mt-10">
        { specialists.map((spec, idx) => (
            <div key={idx} className="flex flex-col justify-center text-center" >
                <img
                    className={`size-40 bg-center bg-no-repeat rounded-lg 
                        border-2 border-[#1ab2af]
                        flex items-end justify-center hover:bg-primary-hover hover:bg-[#34cdc8]
                        hover:border-none transition-all duration-200 ease-in`}
                    src={spec.img}
                />
                <Typography className="text-xl font-bold mb-4 text-[#14595b]">
                    {spec.name}
                </Typography>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
