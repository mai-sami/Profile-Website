import React, { useEffect } from "react";
 import Header from "./component/Header";
import Crt from "./component/Crt";
import Aos from "aos";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
 
    <div                       data-aos="fade-up"
    data-aos-duration="1500"

>
      <Header />
      <Crt />
     </div>
   );
};

export default App;
