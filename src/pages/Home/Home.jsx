import React, { useEffect, useState } from "react";
import CarouselBanner from "../../Components/CarouselBanner/CarouseBanner";
import ChefCard from "../ChefCard/ChefCard";
import LoadingSpinner from "../../Components/Spinner/Spinner";
import Marquee from "react-fast-marquee";
import ClientCard from "../../Components/ClientCard/ClientCard";
const Home = () => {
  const [chefs , setChefs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>{
    setIsLoading(true)
    fetch('https://chefdata-rakib0157.vercel.app/chefdata/')
    .then(res=> res.json())
    .then(data => {
      setChefs(data)
      setIsLoading(false)
    })
  },[])
  // console.log(chefs)
  return (
    <div>
      {/* banner Carousel section start  */}
      <section>
        <CarouselBanner></CarouselBanner>
      </section>
      {/* banner Carousel section end  */}
      {/* Chef section start  */}
      <section className="container my-5 py-4">
        <h3 className="text-center">Best chefs from Bangladesh</h3>
          <div className="row g-4 my-5">
              {isLoading && <LoadingSpinner />}
            {
              chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
            }
          </div>
      </section>
      {/* Chef section end  */}
      {/* cooking ingradiants company section start  */}
      <section className="container my-5">
        <h3 className="text-center">Cooking Ingradiants Company</h3>
          <div className="my-5 py-4">
            <div className="border rounded text-center text-md-start d-md-flex">
              <div className="p-2">
                  <img className="img-fluid " style={{width:"250px", height:"150px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrweyPbbsQR5J7dW6Gel272a_8LwxAjCqKClvmdgnyCP9ufaH3v99vWGDVXMwFhfvTLBQ&usqp=CAU" alt="" />
              </div>
              <div className="p-2">
                  <img className="img-fluid " style={{width:"250px", height:"150px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9EHytyT5b5pH-Hf0WyoUnQoFmSTG7cbyB_pNLZ_n5bAubWtpXKcTV9w2wOdET2ERiYSc&usqp=CAU" alt="" />
              </div>
              <div className="p-2">
                  <img className="img-fluid " style={{width:"250px", height:"150px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zNNLo0exPopF1ZfyovCWkrCqpg69aY2qzwrWStzEgV8sr3cGQ1quTgP6uolCnblS2is&usqp=CAU" alt="" />
              </div>
              
              <div className="p-2">
                  <img className="img-fluid " style={{width:"250px", height:"150px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSNbPEagjgGV1WsoZ928sXe0ud0RaaBuirQ&usqp=CAU" alt="" />
              </div>
              <div className="p-2">
                  <img className="img-fluid " style={{width:"250px", height:"150px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-x5sl6tUWCk4evAquZojhaG8BBq_POtFbg&usqp=CAU" alt="" />
              </div>

            </div>
          </div>
      </section>
      {/* cooking ingradiants company section end  */}

      {/* Client say section start  */}
      <section className="container my-5 py-5">
        <h3 className="text-center">Client Say</h3>
          <div className="pt-5 mt-5">
              <Marquee style={{zIndex: '0'}}>
                <ClientCard></ClientCard>
                <ClientCard></ClientCard>
                <ClientCard></ClientCard>
              </Marquee>
          </div>
      </section>
      {/* Client say section end  */}
    </div>
  );
};

export default Home;
