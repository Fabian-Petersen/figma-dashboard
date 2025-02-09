import SalesChart from "./todaySales/SalesChart";
import VisitorInsights from "./charts/VisitorInsights";
import TotalRevenue from "./charts/TotalRevenue";
import CustomerSatisfaction from "./charts/CustomerSatisfaction";
import TargetvReality from "./charts/TargetvReality";
import TopProducts from "./charts/TopProducts";
import SalesByCountry from "./charts/SalesByCountry";
import VolumevsService from "./charts/VolumevsService";

const Grid = () => {
  // $ Default classes for the graphs
  const defaultClasses =
    "rounded-lg p-4 border border-clr_blueGray_400 shadow-md h-[250px]";
  return (
    <div className="w-full space-y-4 h-auto">
      {/* Top row - Sales and Visitor charts */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(600px,2fr)_minmax(400px,1fr)] gap-4">
        <SalesChart className={`${defaultClasses}`} />
        <VisitorInsights className={`${defaultClasses}`} />
      </div>
      {/* Bottom grid - Various metrics */}
      <div className="grid grid-rows-[1fr_1fr] gap-4">
        <div className="grid grid-cols-[1fr_350px_350px] gap-4 ">
          <TotalRevenue className={`${defaultClasses}`} />
          <CustomerSatisfaction className={`${defaultClasses}`} />
          <TargetvReality className={`${defaultClasses}`} />
        </div>
        <div className="grid grid-cols-[1fr_350px_350px] gap-4">
          <TopProducts className={`${defaultClasses}`} />
          <SalesByCountry className={`${defaultClasses}`} />
          <VolumevsService className={`${defaultClasses}`} />
        </div>
      </div>
    </div>
  );
};

export default Grid;
