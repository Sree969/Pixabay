import React,{useEffect,useState} from 'react';
import '../index.css'
import { useNavigate } from 'react-router-dom';
let Pixapi=()=>{
    let [api,setApi]=useState([]);
    let [search,setSearch]=useState("");
    let [catchdata,setCatchdata]=useState("");
    let navigate=useNavigate();
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=46193716-92c5fc9abe35e46187e0727ca&q=${search}&image_type=photo&pretty=true`).then(res=>res.json()).then(val=>{
            setApi(val.hits)
        }).catch((e)=>console.log(e))
    })
    // console.log(api);
    
    return(
        <>
            <div id="main">
                <div id="bg">
                <h1 className='head' id="heading1">Stunning royalty-free images</h1>
                <input id="ip1" type="text" placeholder='Search image' onChange={(e)=>{setSearch(e.target.value)}} />
                </div>
                <div id="random">
                    <ul type="none">
                        <li><button><span><i className="fa-solid fa-house"></i></span>Home</button></li>
                        <li><button><span><i className="fa-solid fa-camera"></i></span>Photos</button></li>
                        <li><button><span><i className="fa-solid fa-paintbrush"></i></span>Illustration</button></li>
                        <li><button>Vectors</button></li>
                        <li><button><span><i className="fa-solid fa-video"></i></span>Videos</button></li>
                        <li><button><span><i className="fa-solid fa-music"></i></span>Music</button></li>
                        <li><button>Sound Effects</button></li>
                        <li><button>GIFs</button></li>
                    </ul>
                    {api.map((x,y)=>{
                        return( <img key={y} className='pics' onClick={()=>navigate("/update",{state:{x}})} src={x.webformatURL}/>)
                        })}
                </div>
            </div>
        </>
    )
}
export default Pixapi;