import { useState } from "react";
import { LabelledInput } from "../components/LabelledInput";
import { useSlipDetailsContext } from "../providers/slip.provider";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();
  const { setSlipDetails } = useSlipDetailsContext();
  const [inputData, setInputData] = useState({
    name: "",
    designation: "",
    employeeNo: "",
    paidDays: "",
    bankName: "",
    accountNo: "",
    UANNo: "",
    PFNo: "",
    basicSalary: "",
    HRA: "",
    overTimeBonus: "",
    specialAllowance: "",
    EPF: "",
    professionalTax: "",
    TDS: "",
  });

  const handleChange = (e) => {
    setInputData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSlipDetails(inputData);
    navigate("/slip");
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full min-h-screen">
     <h2 className="text-2xl font-bold text-gray-800">Fill the form to generate the slip</h2>{" "}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-4 border border-gray-400 rounded-md shadow-sm w-1/2"
      >
        {/* Employee Details Section */}
        <div className="flex flex-col gap-2 border-b pb-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Employee Details
          </h2>
          <LabelledInput
            label="Name"
            name="name"
            value={inputData.name}
            onChange={handleChange}
          />
          <LabelledInput
            label="Designation"
            name="designation"
            value={inputData.designation}
            onChange={handleChange}
          />
          <LabelledInput
            label="Employee No."
            name="employeeNo"
            type="number"
            value={inputData.employeeNo}
            onChange={handleChange}
          />
          <LabelledInput
            label="Paid Days"
            name="paidDays"
            type="number"
            value={inputData.paidDays}
            onChange={handleChange}
          />
        </div>

        {/* Bank Details Section */}
        <div className="flex flex-col gap-2 border-b pb-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Bank Details
          </h2>
          <LabelledInput
            label="Bank Name"
            name="bankName"
            value={inputData.bankName}
            onChange={handleChange}
          />
          <LabelledInput
            label="Account No."
            name="accountNo"
            type="number"
            value={inputData.accountNo}
            onChange={handleChange}
          />
          <LabelledInput
            label="UAN No."
            name="UANNo"
            type="number"
            value={inputData.UANNo}
            onChange={handleChange}
          />
          <LabelledInput
            label="PF No."
            name="PFNo"
            type="number"
            value={inputData.PFNo}
            onChange={handleChange}
          />
        </div>

        {/* Earning Details Section */}
        <div className="flex flex-col gap-2 border-b pb-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Earning Details
          </h2>
          <LabelledInput
            label="Basic Salary"
            name="basicSalary"
            type="number"
            value={inputData.basicSalary}
            onChange={handleChange}
          />
          <LabelledInput
            label="HRA"
            name="HRA"
            type="number"
            value={inputData.HRA}
            onChange={handleChange}
          />
          <LabelledInput
            label="Overtime Bonus"
            name="overTimeBonus"
            type="number"
            value={inputData.overTimeBonus}
            onChange={handleChange}
          />
          <LabelledInput
            label="Special Allowance"
            name="specialAllowance"
            type="number"
            value={inputData.specialAllowance}
            onChange={handleChange}
          />
        </div>

        {/* Deductions Section */}
        <div className="flex flex-col gap-2 border-b pb-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Deductions</h2>
          <LabelledInput
            label="EPF"
            name="EPF"
            type="number"
            value={inputData.EPF}
            onChange={handleChange}
          />
          <LabelledInput
            label="Professional Tax"
            name="professionalTax"
            type="number"
            value={inputData.professionalTax}
            onChange={handleChange}
          />
          <LabelledInput
            label="TDS"
            name="TDS"
            type="number"
            value={inputData.TDS}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md shadow-sm w-full my-4 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
