import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header.js';
import SideBar from './components/sideBar/SideBar';
import { useState } from 'react';
import VideoList from './components/videoList/VideoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bare from './components/bare/Bare';
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import SecondPage from './components/secondPage/SecondPage';
import CommentList from './components/commentList/CommentList';
function App() {
  const [videoData, setVideoData]= useState([
    {
      id: Math.random(),
      src:"https://www.youtube.com/embed/fYq5PXgSsbE",
      title:"Learn Flexbox in 15 Minutes",
      description :" Web Dev Simplified",
      vues : "536 k vues . il y a 3 ans",
      
      },
      {
      id: Math.random(),
      title :"Yoon Ji-Woo | My Name | Unstoppable [FMV]",
      description :"onlykdrama",
      vues : "1,8 M de vues . il y a 2 mois",
      src:"https://www.youtube.com/embed/0JAQX62i6zo"
      },
      {
      id: Math.random(),
      src: "https://www.youtube.com/embed/tlEAEJKIatc",
      description :" Rauf & Faik ",
      vues : "72 M de vues . il y a 2 ans",
      title:"Rauf & Faik - колыбельная (Lyric Video)"
      },
      {
      id: Math.random(),
      src:"https://www.youtube.com/embed/7YDCzEDHrKw",
      description :" Octavia Scarlett",
      vues : "4,9 de vues . il y a 1 an",
      title:"Isabelle Lightwood || Black Widow"
      },
      {
      id: Math.random(),
      src:"https://www.youtube.com/embed/LMagNcngvcU",
      description :" JavaScript Mastery",
      vues : "332 k vues . il y a 1 mois",
      title:"Build and Deploy a Fully Responsive Modern UI/UX Website in React JS"
      
      },
      {
      id: Math.random(),
      src:" https://www.youtube.com/embed/xvV7OI1jdu4",
      description :" WCodeNewbie",
      vues : "559 k vues . il y a 3 ans",
      title:"How To Learn To Code When You Have No Time And No Money"
      },
      {
      id: Math.random(),
      src:"https://www.youtube.com/embed/Tuw8hxrFBH8",
      description :" Motivation Ark",
      vues : "16 M de vues . il y a 1 an",
      title:"One of the Greatest Speeches Ever | Steve Jobs"
      },
      {
        id: Math.random(),
        title :"React JS - React Tutorial for Beginners",
      description :" Programming with Mosh ",
      vues : "4,3 M de vues . il y a 3 ans",
      src:"https://www.youtube.com/embed/Ke90Tje7VS0"
        },
      {
        id: Math.random(),
        title :"What Is React (React js) & Why Is It So Popular?",
      description :" Programming with Mosh",
      vues : "473 k vues . il y a 3 ans",
      src:"https://www.youtube.com/embed/N3AkSS5hXMA" 
        },
      {
          id: Math.random(),
          src:"https://www.youtube.com/embed/O6P86uwfdR0",
          description :"Web Dev Simplified",
          vues : "421 k vues . il y a 2 ans",
          title:"Learn useState In 15 Minutes - React Hooks Explained"
       },
       {
        id: Math.random(),
        src:"https://www.youtube.com/embed/T0DmHRdtqY0",
        description :" Cookie connecté",
        vues : "58 k vues . il y a 1 an",
        title:"API : comprendre l'essentiel en 4 minutes"
        },
      {
      id: Math.random(),
      src:"https://www.youtube.com/embed/ShZ978fBl6Y",
      description :" Web Dev Simplified",
      vues : "803 M de  vues . il y a 4 ans",
      title:"Calum Scott - You Are The Reason (Official Video)"
      }
    
  ])

  const [data, setData]= useState([
    {
      src:"https://www.youtube.com/embed/Law7wfdg_ls?list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE",
      title: "React router dom - Dev Ed",
    },
    {
      src: "https://www.youtube.com/embed/vjf774RKrLc",
      title: "Rest Api — Dev Ed",
    },
    {
      src:" https://www.youtube.com/embed/zQRrXTSkvfw?list=RDCMUClb90NQQcskPUGDIXsQEz5Q",
      title: "Learn Node JS — Dev Ed",
    },
    {
      src:
        "https://www.youtube.com/embed/CVpUuw9XSjY?list=RDCMUClb90NQQcskPUGDIXsQEz5Q",
      title: "Learn Redux — Dev ED",
    },
  ])
  const [commentData, setCommentData]= useState([
    {
      id: 1,
      name: "Leanne Graham",
      email: "Eliseo@gardner.biz",
      body:
        "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Jayne_Kuhic@sydney.com",
      body:
        "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nikita@garfield.biz",
      body:
        "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Lew@alysha.tv",
      body:
        "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Hayden@althea.biz",
      body:
        "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
    },
  ])
  const [isShow, setIsShow]= useState(false)
  const handleShow = () =>{
      setIsShow(!isShow)
  }
  return (
    <div className="App">

    <Router>
    <Header/>
    <SideBar/>

<Bare/>
<VideoList videoData={videoData}/>
      <Routes>
     
<Route  path="/details/:id" element={<SecondPage videoData={videoData} handleShow={handleShow} />}>
{isShow ? <CommentList commentData={commentData}/> : null}
</Route>
</Routes>
    </Router>
     

    </div>
  );
}

export default App;
