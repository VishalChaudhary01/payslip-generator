import { useRef } from "react";
import { useSlipDetailsContext } from "../providers/slip.provider";
import { DetailSection } from "../components/SetailsSection";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function SlipPage() {
  const { slipDetails } = useSlipDetailsContext();
  const slipRef = useRef();

  if (!slipDetails) return null;

  const downloadPDF = () => {
    html2canvas(slipRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
      pdf.save("Salary_Slip.pdf");
    });
  };

  return (
    <div className="p-6 bg-white border border-gray-400 rounded-md shadow-md w-1/2 mx-auto mt-6">
      <div ref={slipRef} className="p-6 bg-gray-50 border rounded-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Salary Slip
        </h2>
        <div className="flex justify-between">
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
        <div className="flex justify-between">
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
      </div>
      <button
        onClick={downloadPDF}
        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md shadow-sm w-full mt-4 text-white"
      >
        Download PDF
      </button>
    </div>
  );
}
