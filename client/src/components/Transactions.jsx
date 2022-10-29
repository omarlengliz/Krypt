import React , {useContext} from "react"
import { shortenAdress } from "../utils/shortenAdress"
import {TransactionContext } from "../context/TransactionsContext"
import DummyData from "../utils/DummyData"

import useFetch from "../hooks/useFetch"
const TransactionCard=({addressTo, addressFrom ,keyword, timestamp,amount,message })=>
{
  const gifUrl=useFetch({keyword})
  return (
    <div className="bg-[#181918] m-4 flex flex-1 
      2xl:min-w-[450]
      2xl:max-w-[500]
      sm:min-w-[270]
      2xl:max-w-[300]
      flex-col p-3 rounded-md hover:shadow-2xl 

">
  <div className="flex flex-col items-center w-full mt-3">
      <div className=" justify-start w-full mb-6 p-2"> 
          <a href={`https://rinkeby.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer" >
            <p className="text-white text-base">From:{shortenAdress(addressFrom)}</p>
          </a>
          <a href={`https://rinkeby.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer" >
            <p className="text-white text-base">To:{shortenAdress(addressTo)}</p>
          </a>
          <p className="text-white text-base">
              Amount: {amount} ETH
          </p>
          {message && (
            <>
              <br></br>
              <p className="text-white text-base">
                  Message : {message}
              </p>
            </>
          )}
          <img src={gifUrl }
              alt="gif"

              className="w-full h-64 2x:h-90 rounded-md shadow-lg object-cover"
          
          />
          
          <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl ">
              <p className="text-[#37c7da] font-bold">{timestamp}</p>
          </div>
      </div>
  </div>

    </div>
  )
}
const Transactions = () => {
  
  const {currentAccount,transactions} = useContext(TransactionContext)
  return (
    <div className="flrx w-full justify-center items-center 2xl:px-20 gradient-bg-transactions  ">
        <div className="flex flex-col md:p-12 py-12 px-4 ">
          {
            currentAccount ? (
              <h3 className="text-white text-3xl text-center my-2">Latest Transactions </h3>
            ): (
              <h3 className="text-white text-3xl text-center my-2">Connect your account to see latest transactions </h3>
              
              )
          }
          <div className="flex flex-wrap justify-center items-center mt-10 ">
            {transactions.reverse().map((transaction,i)=>(
              <TransactionCard key={i} {...transaction}/>
            )

            )}
          </div>
        </div>
    </div>
  )
}

export default Transactions