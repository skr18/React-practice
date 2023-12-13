const apiRequest = async(url="",opt=null,err=null)=>{
    try{
        const res = await fetch(url,opt);
        console.log(res);
    }catch(err){
        console.log(err)
    }
}

export default apiRequest;