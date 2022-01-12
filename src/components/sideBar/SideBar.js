import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div>
      <div>
        <div className="sidebar" style={{fontSize:"0.5rem"}}>
          <div>
           <div className="sd">
           <a href="#home" className="a">
             <span className="a1"> <i class="fa fa-fw fa-home fa-lg" ></i> </span>
              <br/> Accueil
            </a>
           </div>
           <div className="sd">
           <a href="#services" className="b">
             <span className="b1" > <i class="far fa-compass fa-lg"></i></span>
              <br/>
                    Explorer
            </a>
           </div>
           <div className="sd">
           <a href="#clients" className="c">
              <span className="c1"><i class="fas fa-atlas fa-lg"></i></span>
              <br/>
                     Abonnements
            </a>
           </div>
           <div className="sd">
           <a href="#contact" className="d">
           <span className="d1"><i class="fas fa-book fa-lg" ></i></span>
              <br/>
                  Bibliothéque
            </a>
           </div>
          </div>
        </div>
      </div>
<div>
      <Menu className="menu" style={{fontSize:"0.5rem"}} >
        <a className="mn b1" href="/">
        <span className="menu-item"><i class="fa fa-fw fa-home fa-lg" ></i></span>  <strong>Accueil</strong>
        </a> 

        <a className="mn b2" href="/laravel">
          <span className="menu-item"><i class="far fa-compass fa-lg"></i></span>  Explorer
        </a>

        <a className="mn b3" href="/laravel" >
          <span className="menu-item"><i class="fas fa-atlas fa-lg"></i></span>  Abonnements
        </a>
        <hr/>

        <a className="mn b4" href="/angular">
          <span className="menu-item"><i class="fas fa-book fa-lg"></i></span>  Bibliothéque
        </a>

        <a className="mn b5" href="/react" >
          <span className="menu-item"><i class="fas fa-history fa-lg"></i></span>  Historique
        </a>

        <a className="mn b6" href="/vue" >
          <span className="menu-item"><i class="far fa-clock fa-lg"></i> </span>  A garder plus tard
        </a>

        <a className="mn b7" href="/node">
          <span className="menu-item"><i class="far fa-thumbs-up fa-lg"></i></span>  Vidéos "J'aime"
        </a>
        <hr />
      
          <h6 style={{color:"gray"}}> ABONNEMENTS </h6>
        <a className="men" href="/Sona">
          <span className="m1"><img src="https://showbizfashion.pk/wp-content/uploads/2020/12/Sol-yanim-aka-My-left-side-turkish-drama-series-4.jpg" alt="" classNAme="pic"
                    style={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "100%",
                    }}/></span> Turkish Drama...
        </a>
        <a className="men" href="/Faouzia">
          <span className="c2"><img src="data:image/jpeg;base64,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" alt="" classNAme="pic"
                    style={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "100%",
                    }}/></span>  Faouzia
        </a>

        <a className="men" href="/tunis">
          <span className="c3"><img src="https://cdn.pixabay.com/photo/2015/08/20/02/33/flag-896891__480.jpg" alt="" classNAme="pic"
                    style={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "100%",
                    }}/></span>  Tunis[IA]-Tounes & ...
        </a>
 
        <a className="men" href="/Disney">
          <span className="c4"><img src="data:image/jpeg;base64,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" alt="" classNAme="pic"
                    style={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "100%",
                    }}/></span>  DisneyMusicVEVO
        </a>

        <a className="men" href="/node">
          <span className="c5"> 
          <img src="https://www.gala.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgal.2Fvar.2Fgal.2Fstorage.2Fimages.2Fmedia.2Fmultiupload_du_26_juin_2014.2Frihanna.2F2955004-1-fre-FR.2Frihanna.2Ejpg/480x480/quality/80/rihanna-chauffe-karim-benzema-sur-twitter.jpg" alt="" classNAme="pic"
                    style={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "100%",
                    }}/> </span>  Rihanna
        </a>

        <a className="men" href="/node">
          <span className="c6"><img src="https://www.gala.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2F530c97ae-861d-4806-8897-a560f6f3a2cb.2Ejpeg/648x449/quality/80/justin-bieber.jpeg"   alt=""
                    classNAme="pic"
                    style={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "100%",
                    }}/> </span>  Justin Bieber
        </a>
        
      </Menu>
     <hr />
      </div>
    </div>
  );
};

export default SideBar;
// App.js
