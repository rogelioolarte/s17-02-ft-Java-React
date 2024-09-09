import Aciu from "../../assets/images/Brands/marcaAciu.png";
import CruzRoja from "../../assets/images/Brands/marcaCruzRoja.png";
import Hartmann from "../../assets/images/Brands/marcaHartmann.png";
import Crecimg from "../../assets/images/Brands/marcaCrecimg.png";
import Vithas from "../../assets/images/Brands/marcaVithas.png";

export default function Brands() {
    const brandsData = [
        { img: Crecimg, alt: "Crecimg" },
        { img: Aciu, alt: "Aciu" },
        { img: CruzRoja, alt: "Cruz Roja" },
        { img: Hartmann, alt: "Hartmann" },
        { img: Vithas, alt: "Vithas" },
    ];

  return (
    <div className="mt-10 mb-7">
        <h2 className="text-center text-2xl font-bold">Nuestras marcas</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-5">
          {brandsData.map((brand, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center w-[16%]"
            >
              <img
                src={brand.img}
                className=" h-auto"
                alt={brand.alt}
              />
            </div>
          ))}
        </div>
      </div>
  )
}
