import React, { useCallback, useState } from 'react'

const useHttp = () => {

    const [loading,setLoading] = useState(false);

    const startAction = useCallback( async(props,applyData)=>{
        setLoading(true);
        try{
            //const res = await fetch(props.url)
           
            const response = await fetch(props.url,{
                method: props.method? props.method:"GET",
                headers: props.headers? props.headers:{},
                body: props.body? JSON.stringify( props.body):null
            });

            if (!response.ok) {
                throw new Error('Request failed!');
            } 
            const data = await response.json();
            applyData(data)
        }
        catch(err){
            console.log(err)
        }
        setLoading(false);
    },[]);

    return{
        loading,
        startAction
    };
};

export default useHttp;