import '../Style/Cards.css'
import { Link } from 'react-router-dom';
function HomeCard({Data}){
    let obj=Data
    const random = Math.floor(Math.random() * obj.length);
    let a=[obj[random],obj[random+1],obj[random-1]]
    return (
        <section className='grid grid_1'>
        {a && a.map((data,index)=>{
            console.log(data)
            return (
            <div className="main" id={`id_${index}`} key={index}>
                <Link to={'/'}><img src={data.src2} alt="logo" /></Link>
                <div className="content">
                    <h1 >{data.name}</h1>       {/*style={{background:'rgba(0, 0, 0, 0.5)',padding:'10px 20px',borderRadius:'10px',margin:'10px 0px'}}*/}
                    <p style={{background:'rgba(0, 0, 0, 0.5)',padding:'10px 20px',borderRadius:'10px'}}>{data.Category} / Jan 1 2023</p>
                </div>
            </div>
            )
        })}
        </section>
    )
}
export default HomeCard


// +data.Category
