import './style.css';
import { Routes, Route } from 'react-router-dom';

function News(){
    return (
        <p><h1>News</h1></p>
    )
}

function About(){
    return (
    <h1>Южный федеральный университет</h1>
    )
}

function Contacts(){
    return (
    <h2>8 (800) 555 - 35 - 35</h2>
    )
}

export function Main(){
    return (
    
    <div class="main">
        <div class="main_container">
            <section class="flex-center"><img src="https://i.pinimg.com/originals/4a/85/7f/4a857fb809e9d78242f81ebc04cfdca9.png?nii=t" width={200} alt="cat"/></section>
            <article class="flex-center">
                <Routes>
                    <Route path='/news' element={<News />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contacts' element={<Contacts />} />
                   <Route path="*" element={<h3>Некорректная ссылка</h3>} /> 
                </Routes>
            </article>
            <aside class="flex-center">Mokrikova Angelina Grigorievna</aside>

        </div>


    </div>
    )
}
export default Main;