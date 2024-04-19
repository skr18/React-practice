import { useCallback } from "react"

const useHttp = ()=>{
    
    const sendReq = useCallback( async(reqConfig,applyData)=>{
        try {
            const res = await fetch(reqConfig.url,{
                method: reqConfig.method ?reqConfig.method :"GET",
                body: reqConfig.body ?JSON.stringify(reqConfig.body) :null,
                headers: reqConfig.headers ?reqConfig.headers :{}
            })
            if(!res.ok){
                throw new Error(reqConfig.method ?reqConfig.method :"GET"," req faild")
            }
            const data = await res.json()
            applyData(data)    
        } catch (error) {
        }
    },[])
    return{
        sendReq
    }
}
export default useHttp