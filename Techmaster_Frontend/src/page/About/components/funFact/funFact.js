import React from 'react';
import "./funFact.scss";
import funFact1 from "../../../../assests/images/funfact1.webp"
import funFactOne from "../../../../assests/images/funfact1.svg"
import funFactTwo from "../../../../assests/images/funfact2.svg"
import funFactThree from "../../../../assests/images/funfact3.svg"
import funFactFour from "../../../../assests/images/funfact4.svg";
import CountUp from "react-countup";

const FunFact = ({dataAos}) => {
    return (
        <div className="fun-fact">
         <div className="container">
             <div className="fun-fact_rowFun"  data-aos={dataAos}>
                 <div className="fun-fact_rowFun_colThree" >
                     <div className="fun-fact_rowFun_colThree_singInfoFun">
                         <div className="funImage">
                             <img width="100%" src={funFact1} alt=""/>
                         </div>
                         <div className="fun-fact_rowFun_colThree_singInfoFun_funContent">
                             <div className="fun-fact_rowFun_colThree_singInfoFun_funContent_funIcon">
                                 <img src={funFactOne} alt=""/>
                             </div>
                             <div>
                                 <h3 className="fun-fact_rowFun_colThree_singInfoFun_funContent_funText">
                                     <span> <CountUp start={0} end={75} duration={5} /></span> +
                                 </h3>
                                 <p className="fun-fact_rowFun_colThree_singInfoFun_funContent_funDes">Enrolled
                                     Students</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="fun-fact_rowFun_colThree">
                     <div className="fun-fact_rowFun_colThree_singInfoFun">
                         <div className="funImage">
                             <img width="100%" src={funFact1} alt=""/>
                         </div>
                         <div className="fun-fact_rowFun_colThree_singInfoFun_funContent">
                             <div className="fun-fact_rowFun_colThree_singInfoFun_funContent_funIcon">
                                 <img src={funFactTwo} alt=""/>
                             </div>
                             <div>
                                 <h3 className="fun-fact_rowFun_colThree_singInfoFun_funContent_funText">
                                     <span><CountUp start={0} end={324} duration={15} /></span> +
                                 </h3>
                                 <p className="fun-fact_rowFun_colThree_singInfoFun_funContent_funDes">Enrolled
                                     Students</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="fun-fact_rowFun_colThree">
                     <div className="fun-fact_rowFun_colThree_singInfoFun">
                         <div className="funImage">
                             <img width="100%" src={funFact1} alt=""/>
                         </div>
                         <div className="fun-fact_rowFun_colThree_singInfoFun_funContent">
                             <div className="fun-fact_rowFun_colThree_singInfoFun_funContent_funIcon">
                                 <img src={funFactThree} alt=""/>
                             </div>
                             <div>
                                 <h3 className="fun-fact_rowFun_colThree_singInfoFun_funContent_funText">
                                     <span><CountUp start={0} end={22} duration={15} />K</span> +
                                 </h3>
                                 <p className="fun-fact_rowFun_colThree_singInfoFun_funContent_funDes">Certified
                                     Students</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="fun-fact_rowFun_colThree">
                     <div className="fun-fact_rowFun_colThree_singInfoFun">
                         <div className="funImage">
                             <img width="100%" src={funFact1} alt=""/>
                         </div>
                         <div className="fun-fact_rowFun_colThree_singInfoFun_funContent">
                             <div className="fun-fact_rowFun_colThree_singInfoFun_funContent_funIcon">
                                 <img src={funFactFour} alt=""/>
                             </div>
                             <div>
                                 <h3 className="fun-fact_rowFun_colThree_singInfoFun_funContent_funText">
                                     <span><CountUp start={0} end={30} duration={15} /></span> +
                                 </h3>
                                 <p className="fun-fact_rowFun_colThree_singInfoFun_funContent_funDes">Skilled Instructor</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        </div>
    );
};

export default FunFact;