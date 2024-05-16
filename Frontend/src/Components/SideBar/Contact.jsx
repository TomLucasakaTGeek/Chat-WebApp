import './style.css' 

let obj = {
    Name: "Tanmay",
    img: "https://www.bing.com/images/search?view=detailV2&ccid=MtqzdcGH&id=0101B0A1951A0A5B70DA17EE592855B616831D1C&thid=OIP.MtqzdcGHvL8kNnw5IDh1iQHaHa&mediaurl=https%3a%2f%2fi.stack.imgur.com%2fqZIr0.png&exph=4351&expw=4351&q=default+images+for+contacts&simid=608054227554357253&FORM=IRPRST&ck=99E1E3CF6E8084331F92467D4B92BFC7&selectedIndex=0&itb=1",
}

function Contact({obj}) {
    return (
    <>
        <div id='contact'>
            <img id='pfp'>{obj.img}</img>
            <p><b>{obj.Name}</b></p>
        </div>
    </>
    )
}


export function Contactbar() {
    return (
        <>
            <div className='bar'>
                <input placeholder='Search' className='searchbox'/>
                <Contact/>
            </div>
        </>
    )
}


