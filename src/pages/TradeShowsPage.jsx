// TradeShows.jsx

import React from "react";
import { Navbar2, Footer } from "../components";

import Tradeshows from "../components/Tradeshows";

const TradeShowsPage = () => {
    return (
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar2 />
          </div>
          <Tradeshows/>
          <Footer />
        </div>
      );
    }

export default TradeShowsPage;
