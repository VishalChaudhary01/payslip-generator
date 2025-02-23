
export function LabelledInput({ label, name, value, onChange, type = "text" }) {
  return (
    <div className="grid grid-cols-3 gap-4 items-center w-full">
      <label htmlFor={name} className="col-span-1 text-base font-medium">
        {label}:
      </label>
      <input
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        className="col-span-2 border border-gray-400 px-2 py-1 rounded-md"
      />
    </div>
  );
}
