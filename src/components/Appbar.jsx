import logo from "../assets/logo.webp"

export function Appbar() {
     return (
          <div className="grid grid-cols-3 items-center justify-between px-6 py-3 border-b w-full mb-6">
               <div className="flex items-center">
                    <img src={logo} alt="logo" width={140} height={100} />
               </div>
               <div className="flex flex-col items-center">
                    <span>Enoylity Media Creations Private Limited</span>
                    <span>Vrindavan, Uttar Pradesh</span>
               </div>
          </div>
     )
}