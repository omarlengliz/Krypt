import {HiMenuAlt4} from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai"
import logo from "../../src/images/logo.png"
import {useState} from "react"
let NavbarItem=({title,classProps})=>
{
    return (
        <li className= {`mx-4 cursor-pointer ${classProps} ` }>
            {title}
       </li>
    );
}
const Navbar = () => {
  const [toggle,setToggle]=useState(false) 
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
        <div className="md:flex-[0.5] flex-initial justify-center  items-center">
            <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </div>

            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {
                    ["Market","Exchange" , "Tutorials" , "Wallets"].map((item,index)=>
                    

                        <NavbarItem key={item+index} title={item} />
                    
                    )
                
                
                }

                <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer  hover:bg-[#2546bd] ">
                    Login
                </li>

            </ul>
            <div className="flex relative">
                {!toggle ? <HiMenuAlt4 fontSize={28} className="text-white md:hidden " onClick={()=>{setToggle(!toggle)}}/> : <AiOutlineClose fontSize={28} className="text-white md:hidden " onClick={()=>{setToggle(!toggle)}}/> }
                {toggle &&(
                    <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start item-end rounded-md blue-glassmorphism  text-white animate-slide-in    ">
                        <li className="text-xl w-full my-2">
                        <AiOutlineClose fontSize={28} className="text-white md:hidden " onClick={()=>{setToggle(!toggle) } } />
                        </li>
                        {
                    ["Market","Exchange" , "Tutorials" , "Wallets"].map((item,index)=>
                    

                        <NavbarItem key={item+index} title={item}  classProps=" text-lg my-2" />
                    
                    )
                
                
                }
                    </ul>
                   
                
                )
                }
            </div>
    </nav>
  )
}

export default Navbar