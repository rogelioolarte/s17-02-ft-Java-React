import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Input,
  CardFooter,
  ButtonGroup,
} from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DocumentMagnifyingGlassIcon,
  FlagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

interface TableHead {
  head: string;
  customeStyle: string;
}

interface DynamicTableProps {
  tableHead: TableHead[];
  tableRow: Record<string, string>[]; // Asegúrate de que esto se ajuste a tus datos
  title?: string;
  description?: string;
}

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  tableHead,
  tableRow,
  title = "",
  description = "",
}: DynamicTableProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(6); // Default value
  const rowHeightRem = 4.063; // Height of each row in rem

  useEffect(() => {
    // Calculate rows per page based on screen height
    const calculateRowsPerPage = () => {
      const screenHeightRem = window.innerHeight / 16; // Convert px to rem
      const availableHeightRem = screenHeightRem - 12; // Subtract margins/padding
      const calculatedRowsPerPage = Math.floor(availableHeightRem / rowHeightRem);
      setRowsPerPage(calculatedRowsPerPage > 0 ? calculatedRowsPerPage : 1);
    };

    calculateRowsPerPage();

    window.addEventListener("resize", calculateRowsPerPage);
    return () => window.removeEventListener("resize", calculateRowsPerPage);
  }, [rowHeightRem]);

  const totalPages = Math.ceil(tableRow.length / rowsPerPage);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredRows = tableRow.filter((row) =>
    tableHead.some(({ head }) => {
      if (head.toLowerCase() === "actions") return false;
      const value = row[head.toLowerCase()];
      return value.toLowerCase().includes(searchTerm.toLowerCase());
    })
  );

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, filteredRows.length);
  const displayedRows = filteredRows.slice(startIndex, endIndex);

  const Pagination = ({ page, setPage, totalPages }: PaginationProps) => {
    const next = () => {
      if (page < totalPages) setPage(page + 1);
    };

    const prev = () => {
      if (page > 1) setPage(page - 1);
    };

    return (
      <div className="flex items-center justify-between sm:justify-center gap-4">
        <Typography variant="small" color="blue-gray" className="font-normal hidden sm:block">
          Page {page} of {totalPages}
        </Typography>
        <ButtonGroup variant="outlined" className="bg-[#eaedf7] rounded-lg">
          <IconButton
            className="bg-transparent text-gray-900 hover:opacity-100 hover:bg-[#F8F9FC] focus:ring-0"
            onClick={prev}
            disabled={page === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
          {Array.from({ length: totalPages }, (_, index) => (
            <IconButton
              key={index + 1}
              className={`bg-transparent text-gray-900 hover:opacity-100 hover:bg-[#F8F9FC] focus:ring-0 ${page === index + 1 ? 'font-bold bg-[#cef9f4]' : ''}`}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </IconButton>
          ))}
          <IconButton
            className="bg-transparent text-gray-900 hover:opacity-100 hover:bg-[#F8F9FC] focus:ring-0"
            onClick={next}
            disabled={page === totalPages}
          >
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
        </ButtonGroup>
      </div>
    );
  };

  return (
    <div className="pt-2 px-2 h-full min-w-full">
      <Card className="min-h-full min-w-full pb-0 mb-0">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none flex flex-wrap gap-4 justify-between mb-4"
        >
          <div>
            <Typography variant="h6" color="blue-gray">
              {title}
            </Typography>
            <Typography
              variant="small"
              className="text-gray-600 font-normal mt-1"
            >
              {description}
            </Typography>
          </div>
          <div className="flex items-center w-full shrink-0 gap-4 md:w-max">
            <div className="w-full md:w-72">
              <Input
                crossOrigin=""
                size="lg"
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll !px-0 py-2 min-h-full">
          <table className="w-full min-w-max table-auto">
            <thead>
              <tr>
                {tableHead.map(({ head, customeStyle }) => (
                  <th
                    key={head}
                    className={`border-b border-gray-300 !p-4 pb-8 ${customeStyle}`}
                  >
                    <Typography
                      color="blue-gray"
                      variant="small"
                      className="!font-bold"
                    >
                      {head.replace(/([a-z])([A-Z])/g, "$1 $2")}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayedRows.length > 0 ? (
                displayedRows.map((row, index) => {
                  const isLast = index === displayedRows.length - 1;
                  const classes = isLast
                    ? "!p-4"
                    : "!p-4 border-b border-gray-300";

                  return (
                    <tr key={index}>
                      {tableHead.map(({ head }, idx) => (
                        <td key={idx} className={classes}>
                          {head.toLowerCase() === "actions" ? (
                            <div className="flex justify-end gap-4">
                              <IconButton variant="text" size="sm">
                                <DocumentMagnifyingGlassIcon className="h-5 w-5 text-gray-900" />
                              </IconButton>
                              <IconButton variant="text" size="sm">
                                <FlagIcon className="h-5 w-5 text-gray-900" />
                              </IconButton>
                            </div>
                          ) : (
                            <Typography
                              variant="small"
                              className={`${
                                idx === 0 ? "!text-left" : "!text-right"
                              } !font-normal text-gray-600`}
                            >
                              {row[head.toLowerCase()] || '-'}
                            </Typography>
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={tableHead.length} className="text-center py-4">
                    <Typography variant="small" className="text-gray-600">
                      No results found.
                    </Typography>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-center bg-[#F1F3F9] rounded-b-lg px-4 py-2">
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default DynamicTable;
