import { Input } from "@material-tailwind/react";
import PerSpecialist from "../pure/PerSpecialist";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useSpecialistActions } from "../../hooks/useSpecialistActions";
import { useEffect, useState } from "react";
import { getSpecialists } from "../../services/specialistService";
import { toast } from "sonner";
import { isValidSpecialists } from "../../store/specialistSlice";
import { Specialist } from "../../models/type";

export function SearchSpecialist() {
  const { specialists, useInitSpecialists } = useSpecialistActions();
  const [searchValue, setSearchValue] = useState(""); 
  const [filteredSpecialists, setFilteredSpecialists] = useState(specialists);
  const filterProperties: (keyof Specialist)[] = ["specialistName", "specialistLastname", "specialtyName"];

  const obtainSpecialists = async () => {
    const response = await getSpecialists();
    if (isValidSpecialists(response)) {
      useInitSpecialists(response);
    } else {
      toast.error("El servidor API se encuentra iniciandose...", { duration: 2000, closeButton: true });
    }
  };

  // Filtrar especialistas basados en el valor del input
  const handleSearch = (value: string) => {
    const lowercasedValue = value.toLowerCase();
    const filtered = specialists.filter((specialist) =>
      filterProperties.some((prop) =>
        specialist[prop]?.toString().toLowerCase().includes(lowercasedValue)
      )
    );
    setFilteredSpecialists(filtered);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (specialists.length === 0) {
        toast.success("Obteniendo especialistas...", { duration: 2000, closeButton: true });
        obtainSpecialists();
      }
    }, 2000);
    return () => clearInterval(intervalId);
  }, [specialists]);

  useEffect(() => {
    handleSearch(searchValue);
  }, [searchValue, specialists]);

  return (
    <div className="w-full h-full flex flex-col mx-auto">
      <div className="w-full md:w-96 mb-5 self-center">
        <Input
          crossOrigin={undefined}
          label="Buscar especialistas"
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="grid place-items-center p-4 max-h-[100%] max-w-[100%] min-h-[100%] min-w-[100%]">
        {filteredSpecialists.length > 0 ? (
          filteredSpecialists.map(
            (
              {
                specialistCode,
                specialistId,
                specialistLastname,
                specialistName,
                bookingPrice,
                reputation,
                specialtyId,
                specialtyName,
              },
              index
            ) => (
              <PerSpecialist
                key={index}
                specialistCode={specialistCode}
                specialistId={specialistId}
                specialistLastname={specialistLastname}
                specialistName={specialistName}
                bookingPrice={bookingPrice}
                reputation={reputation}
                specialtyId={specialtyId}
                specialtyName={specialtyName}
              />
            )
          )
        ) : (
          <p>No se encontraron especialistas</p>
        )}
      </div>
    </div>
  );
}

export default SearchSpecialist;
