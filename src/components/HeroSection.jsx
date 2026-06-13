

export const HeroSection = () => {
    return <section id="hero"
     className="relative min-h-screen flex flex-col items-center justify-center px-4"
     >
           
        <div className="container max-w-4xl max-auto text-center z-10">
          <div className="space-y-6">
             <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className=" animate-fade-in">Hey, </span>
                <span className="text-primary  animate-fade-in-delay-1">
                {" "}
                I'm 
                </span>
                <span className="text-gradient ml-2  animate-fade-in-delay-2">
                {" "}
                Moiz
                </span>
             </h1>
          </div>
         
        </div>   
     </section>
}