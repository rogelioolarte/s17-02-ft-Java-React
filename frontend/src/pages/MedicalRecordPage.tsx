import DynamicTable from "../components/pure/DynamicTable";

const TABLE_ROW = [
    {
      digitalasset: "BTC",
      detail: "Bitcoin",
      price: "$46,727.30",
      change: "+2.92%",
      volume: "$45.31B",
      marketcap: "$915.61B",
      color: "green",
    },
    {
      digitalasset: "ETH",
      detail: "Ethereum",
      price: "$2,609.30",
      change: "+6.80%",
      volume: "$23.42B",
      marketcap: "$313.58B",
      color: "green",
    },
    {
      digitalasset: "USDT",
      detail: "TetherUS",
      price: "$1.00",
      change: "-0.01%",
      volume: "$94.37B",
      marketcap: "$40,600",
      color: "red",
    },
    {
      digitalasset: "SOL",
      detail: "Solana",
      price: "$1.00",
      change: "+6.35%",
      volume: "$3.48B",
      marketcap: "$43.26B",
      color: "green",
    },
    {
      digitalasset: "XRP",
      detail: "Ripple",
      price: "$100.19",
      change: "-0.95%",
      volume: "$1.81B",
      marketcap: "$32.45B",
      color: "red",
    },
    {
      digitalasset: "SOL",
      detail: "Solana",
      price: "$1.00",
      change: "+6.35%",
      volume: "$3.48B",
      marketcap: "$43.26B",
      color: "green",
    },
    {
      digitalasset: "XRP",
      detail: "Ripple",
      price: "$100.19",
      change: "-0.95%",
      volume: "$1.81B",
      marketcap: "$32.45B",
      color: "red",
    },
    {
      digitalasset: "SOL",
      detail: "Solana",
      price: "$1.00",
      change: "+6.35%",
      volume: "$3.48B",
      marketcap: "$43.26B",
      color: "green",
    },
    {
      digitalasset: "XRP",
      detail: "Ripple",
      price: "$100.19",
      change: "-0.95%",
      volume: "$1.81B",
      marketcap: "$32.45B",
      color: "red",
    },
    {
      digitalasset: "SOL",
      detail: "Solana",
      price: "$1.00",
      change: "+6.35%",
      volume: "$3.48B",
      marketcap: "$43.26B",
      color: "green",
    },
    {
      digitalasset: "XRP",
      detail: "Ripple",
      price: "$100.19",
      change: "-0.95%",
      volume: "$1.81B",
      marketcap: "$32.45B",
      color: "red",
    },
    {
      digitalasset: "SOL",
      detail: "Solana",
      price: "$1.00",
      change: "+6.35%",
      volume: "$3.48B",
      marketcap: "$43.26B",
      color: "green",
    },
    {
      digitalasset: "XRP",
      detail: "Ripple",
      price: "$100.19",
      change: "-0.95%",
      volume: "$1.81B",
      marketcap: "$32.45B",
      color: "red",
    },
    {
      digitalasset: "SOL",
      detail: "Solana",
      price: "$1.00",
      change: "+6.35%",
      volume: "$3.48B",
      marketcap: "$43.26B",
      color: "green",
    },
    {
      digitalasset: "XRP",
      detail: "Ripple",
      price: "$100.19",
      change: "-0.95%",
      volume: "$1.81B",
      marketcap: "$32.45B",
      color: "red",
    },{
      digitalasset: "SOL",
      detail: "Solana",
      price: "$1.00",
      change: "+6.35%",
      volume: "$3.48B",
      marketcap: "$43.26B",
      color: "green",
    },
    {
      digitalasset: "XRP",
      detail: "Ripple",
      price: "$100.19",
      change: "-0.95%",
      volume: "$1.81B",
      marketcap: "$32.45B",
      color: "red",
    },
  
  ];
  
  const TABLE_HEAD = [
    {
      head: "DigitalAsset",
      customeStyle: "!text-left",
    },
    {
      head: "Price",
      customeStyle: "text-right",
    },
    {
      head: "Change",
      customeStyle: "text-right",
    },
    {
      head: "Volume",
      customeStyle: "text-right",
    },
    {
      head: "MarketCap",
      customeStyle: "text-right",
    },
    {
      head: "Actions",
      customeStyle: "text-right",
    },
  ];

export default function MedicalRecordPage() {
  return (
    <div className="flex justify-center min-h-full w-full">
      <DynamicTable tableHead={TABLE_HEAD} tableRow={TABLE_ROW}
      title="Búsqueda de Historiales Clínicos"
      description=""
      />
    </div>
  )
}
