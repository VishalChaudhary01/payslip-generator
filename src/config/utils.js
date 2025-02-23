import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const totalEarnings = (slipDetails) => {
  return (
    (parseFloat(slipDetails.basicSalary) || 0) +
    (parseFloat(slipDetails.HRA) || 0) +
    (parseFloat(slipDetails.overTimeBonus) || 0) +
    (parseFloat(slipDetails.specialAllowance) || 0)
  );
};

export const totalDeductions = (slipDetails) => {
  return (
    (parseFloat(slipDetails.EPF) || 0) +
    (parseFloat(slipDetails.professionalTax) || 0) +
    (parseFloat(slipDetails.TDS) || 0)
  );
};

export const downloadPDF = (slipRef) => {
  if (!slipRef.current) return;

  html2canvas(slipRef.current).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    pdf.save("Salary_Slip.pdf");
  });
};