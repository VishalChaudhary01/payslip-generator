export function DetailSection({ title, data, keys }) {
     return (
       <div className="mb-4 w-full">
         <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
         <div className="border p-3 rounded-md bg-white shadow-sm">
           {keys.map((key) => (
             <p key={key} className="text-gray-800">
               <span className="font-medium">
                 {key.replace(/([A-Z])/g, " $1")}:{" "}
               </span>
               {data[key]}
             </p>
           ))}
         </div>
       </div>
     );
   }