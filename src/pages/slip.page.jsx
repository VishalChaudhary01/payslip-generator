import { useRef } from "react";
import { useSlipDetailsContext } from "../providers/slip.provider";
import { DetailSection } from "../components/DetailsSection";
import { downloadPDF, totalDeductions, totalEarnings } from "../config/utils";
import { ReturnToHome } from "../components/ReturnToHome";

export function SlipPage() {
  const { slipDetails } = useSlipDetailsContext();
  const slipRef = useRef();

  if (!slipDetails) return <ReturnToHome />;

  const earnings = totalEarnings(slipDetails);
  const deductions = totalDeductions(slipDetails);
  const netSalary = earnings - deductions;

  return (
    <div className="p-6 bg-white border border-gray-400 rounded-md shadow-md w-1/2 mx-auto mt-6">
      <div ref={slipRef} className="p-4 bg-gray-50 border rounded-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Salary Slip
        </h2>
        <div className="flex justify-between border-b mb-4">
          <DetailSection
            title="Employee Details"
            data={slipDetails}
            keys={["name", "designation", "employeeNo"]}
          />
          <DetailSection
            title="Bank Details"
            data={slipDetails}
            keys={["bankName", "accountNo"]}
          />
        </div>
        <div className="flex justify-between border-b mb-4">
          <DetailSection
            title="Earnings"
            data={slipDetails}
            keys={["basicSalary", "HRA", "overTimeBonus", "specialAllowance"]}
          />
          <DetailSection
            title="Deductions"
            data={slipDetails}
            keys={["EPF", "professionalTax", "TDS"]}
          />
        </div>
        <div className="flex justify-between font-bold text-lg p-2 border-t">
          <span>Total Earnings: ₹{earnings.toFixed(2)}</span>
          <span>Total Deductions: ₹{deductions.toFixed(2)}</span>
        </div>
        <div className="text-xl font-bold text-right mt-2">
          <span>Net Salary: ₹{netSalary.toFixed(2)}</span>
        </div>
      </div>
      <button
        onClick={() => downloadPDF(slipRef)}
        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md shadow-sm w-full mt-4 text-white"
      >
        Download PDF
      </button>
    </div>
  );
}
