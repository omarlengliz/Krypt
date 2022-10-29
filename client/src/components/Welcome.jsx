
import {AiFillPlayCircle} from "react-icons/ai"
import {SiEthereum} from "react-icons/si"
import {BsInfoCircle} from "react-icons/bs"
import Loader from "./Loader"
import React,{useContext} from "react"
import { TransactionContext } from "../context/TransactionsContext"
const commonStyle="min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-white  "
import { shortenAdress } from "../utils/shortenAdress"
const Input=({placeholder,name,type,handleChange,value})=>
(
    <input 
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        name={name}
        onChange={(e)=>handleChange(e,name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism "
    />
);


const Welcome = () => {
  const { connectWallet,currentAccount,formData,setFormData,handleChange,sendTransaction} = useContext(TransactionContext);

  const handleSubmit = (e)=>
{
    const { adressTo,amount, keyword,message} = formData;
    e.preventDefault() ; 
    if(!adressTo||!amount || !keyword || !message) return 
    sendTransaction() 
}

  return (
    <div className="flex w-full justify-center items-center ">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4  ">
            <div className="flex flex-1 justify-start flex-col mf:mr-10 ">
                <h1 className="text-3xl text-white sm:text-5xl text-gradient py-1 ">Send Crypto <br/>across the world  </h1>
                <p className="text-left mt-5 mt-5 text-white font-light md:w-9/12 w-11/12 text-base">Explore the crypto world . Buy and sell cryptocurrencies eaisly on Krypto .</p>
                {
                    !currentAccount &&(<button className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]" type="button" onClick={connectWallet}>
                    <p className="text-white text-base font-semibold  ">Connect Wallet</p>
                </button>)
                }
                <div className="grid sm:grid-cols-3 grid-2 w-full mt-10 " >
                    <div className={`rounded-tl-2xl ${commonStyle}`} >
                        Reliability
                    </div>
                    <div className={commonStyle} >
                        Security
                    </div>
                    <div className={`rounded-tr-2xl ${commonStyle}`} >
                         Ethereum
                    </div>
                    <div className={`rounded-bl-2xl ${commonStyle}`} >
                        WEB 3.0
                    </div>
                    <div className={commonStyle} >
                        Low fees
                    </div>
                    <div className={`rounded-br-2xl ${commonStyle}`} >
                         Blockchain
                    </div>
                </div>
            </div>

            <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 ">
                <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism ">
                    <div className="flex justify-between flex-col w-full h-full ">
                        <div className="flex justify-between items-start ">
                            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center ">
                                <SiEthereum fontSize={21} color="#fff"/>
                            </div>
                            <BsInfoCircle fontSize={17} color="#fff"/>
                        </div>
                        <div>
                            <p className="text-white font-light text-sm ">
                                {shortenAdress(currentAccount)}
                            </p>
                            <p className="text-white font-semibold text-lg mt-1">
                            Ethereum
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                    <Input placeholder="Adress To " name="adressTo" type="text" handleChange={handleChange} />
                    <Input placeholder="Amount (ETH) " name="amount" type="number" handleChange={handleChange} />
                    <Input placeholder="Keyword (Gif) " name="keyword" type="text" handleChange={handleChange} />
                    <Input placeholder="Enter Message " name="message" type="text" handleChange={handleChange} />
                    <div className="h-[1px] w-full bg-gray-400 my-2  "></div>
                        {
                            false?(
                                <Loader/>
                            ):
                            <button type="button"  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer" onClick={handleSubmit}>
                                Send Now
                            </button>
                        }
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome