import SalesChart from "./todaySales/SalesChart";
import VisitorInsights from "./charts/VisitorInsights";
import TotalRevenue from "./charts/TotalRevenue";
import CustomerSatisfaction from "./charts/CustomerSatisfaction";
import TargetvReality from "./charts/TargetvReality";
import TopProducts from "./charts/TopProducts";
import SalesByCountry from "./charts/SalesByCountry";
import VolumevsService from "./charts/VolumevsService";

type GridProps = {
  className?: string;
};

const Grid = ({ className }: GridProps) => {
  // $ Default classes shared by all the graphs
  const defaultClasses =
    "rounded-lg p-4 border border-clr_blueGray_400 shadow-md h-[250px]";
  return (
    <div className={`${className} w-full space-y-4 h-auto overflow-hidden`}>
      {/* // $ Top row - Sales and Visitor charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[minmax(300px,1fr)_minmax(300px,1fr)] gap-4">
        <SalesChart
          className={`${defaultClasses} sm:col-span-2 md:col-span-1`}
        />
        <VisitorInsights
          className={`${defaultClasses} col-span-2 md:col-span-1`}
        />
      </div>

      {/* // $ Bottom grid - Responsive stacking */}
      <div className="grid gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[minmax(250px,1fr)_minmax(0px,1fr)_minmax(250px,1fr)] auto-rows-fr gap-4">
          <TotalRevenue className={`${defaultClasses}`} />
          <CustomerSatisfaction className={`${defaultClasses}`} />
          <TargetvReality className={`${defaultClasses}`} />
          <TopProducts className={`${defaultClasses}`} />
          <SalesByCountry className={`${defaultClasses}`} />
          <VolumevsService className={`${defaultClasses}`} />
        </div>
      </div>
    </div>
  );
};

export default Grid;
