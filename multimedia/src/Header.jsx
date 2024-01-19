import React, { useEffect, useState } from "react";

const Header = ()=>{
    const[datas,setdata] = useState([]);
    useEffect(()=>{
        var getdata=async()=>{
            var res = await fetch("https://jsonplaceholder.typicode.com/users");
            if(res.ok){
                var datalists = await res.json();
                setdata(datalists);
            }
        }
        getdata();
    },[])
    var changeUser = async()=>{
        var res = await fetch("https://jsonplaceholder.typicode.com/users");
        if(res.ok){
            var datalist = await res.json();
            setdata(datalist);
        }
    }
    var changePost = async()=>{
        var res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(res.ok){
            var datalist = await res.json();
            setdata(datalist);
        }
    }
    var chnageComments = async()=>{
        var res = await fetch("https://jsonplaceholder.typicode.com/comments");
        if(res.ok){
            var datalist = await res.json();
            setdata(datalist);
        }
    }

    return(
        <div>
            <div>
                <button onClick={changeUser} >Users</button>
                <button onClick={changePost}>Posts</button>
                <button onClick={chnageComments}>Comments</button>
            </div>
            <div>
                {datas.map(item=>(
                    <li key={item.id}>
                        {JSON.stringify(item)}
                    </li>
                ))}
            </div>
            
        </div>
    )
}

export default Header;
