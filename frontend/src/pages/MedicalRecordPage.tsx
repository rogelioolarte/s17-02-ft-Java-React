import DynamicTable from "../components/pure/DynamicTable";
import { TABLE_HEAD, TABLE_ROW } from "../config/routes_api";



export default function MedicalRecordPage() {
  return (
    <div className="flex justify-center min-h-full w-full">
      <DynamicTable tableHead={TABLE_HEAD} tableRow={TABLE_ROW}
      title="Listado y Búsqueda de Historiales Clínicos"
      description=""
      />
    </div>
  )
}
