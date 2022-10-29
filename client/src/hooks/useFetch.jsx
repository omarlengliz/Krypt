import { useEffect,useState } from "react";

const API_KEY= import.meta.env.VITE_GIPHY;

const useFetch= ({keyword})=>
{
    const  [gifUrl, setgifUrl] = useState("")
    const fetchGifs= async ()=>
    {
        try {
            const response=await fetch(`api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`)
            const {data}= await response.json 
            setgifUrl(data[0?.images?.downsized_medium?.url])
        } catch (error) {
            setgifUrl("https://media1.giphy.com/media/iJzLkN2NfCW2c8WPsV/200w.gif?cid=ecf05e4715a2vn0nqknujud0ys4gefva9auj1us1mzy6uts3&rid=200w.gif&ct=g ")
        }
    }
    useEffect(() => {
      
    if(keyword) fetchGifs()
       
    }, [keyword])
    
}

export default useFetch;