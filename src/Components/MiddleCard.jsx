import { Link } from "react-router-dom"

function MiddleCard(data){
    let arr2=data.val.slice(0,3)
    let arr=data.val
    return (
        <>
            <section className="g">
            <h1 className="h1">{arr[1] && arr[1].Category}</h1>
            <div className="Middle flex">
                {arr2.map((data,index)=>{
                return (
                <div className="main0" key={index}  style={{overflow:'hidden'}}>
                    <div><img src={data.src} alt="logo" /></div>
                    <div className="content0">
                        <Link to={'/'+arr[1].Category+'/'+data.name} state={{arr:arr,data:data}}><h2>{data.name}</h2></Link>
                        <p>{data.desc}</p>
                        <p>{data.content.slice(0,120)}...</p>
                        <h1>{data.title}</h1>
                        <p style={{padding:'10px 20px',backgroundColor:'rgba(0, 0, 0, 0.02)',textAlign:'center',borderRadius:'10px'}}><span style={{fontWeight:'700'}}>{data.Category}</span> / <span style={{fontWeight:'600'}}>{new Date().toLocaleDateString()}</span></p>
                    </div>
                </div>
                )
            })}
            </div>
            </section>
        </>
    )
}
export default MiddleCard