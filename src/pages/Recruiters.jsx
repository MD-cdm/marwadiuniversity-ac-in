import React from "react";

// Import images from assets
const recruitersData = [
  { id: 1, src: require("../assets/recruiters/adani-1.png"), alt: "Adani" , url: "https://www.adani.com/"  },
  { id: 2, src: require("../assets/recruiters/Bharti-Airtel.png"), alt: "Airtel" , url: "https://www.airtel.in/"  },
  { id: 3, src: require("../assets/recruiters/alliantgroup-1.png"), alt: "Alliantgroup" , url: "https://www.alliantgroup.com/"  },
  { id: 4, src: require("../assets/recruiters/Amazon.png"), alt: "Amazon" , url: "https://www.amazon.com/"  },
  { id: 5, src: require("../assets/recruiters/anchor-panasonic.png"), alt: "Anchor Panasonic" , url: "https://www.panasonic.com/" },
  { id: 6, src: require("../assets/recruiters/assa-abloy-1.png"), alt: "ASSA ABLOY" , url: "https://www.assaabloy.com/"  },
  { id: 7, src: require("../assets/recruiters/Astound-Commerce.png"), alt: "Astound Commerce" , url: "https://www.astoundcommerce.com/" },
  { id: 8, src: require("../assets/recruiters/Berger-Paints.png"), alt: "Berger Paints" , url: "https://www.bergerpaints.com/"  },
  { id: 9, src: require("../assets/recruiters/Capgemini.png"), alt: "Capgemini" , url: "https://www.capgemini.com/"  },
  { id: 10, src: require("../assets/recruiters/Certus-Capital.png"), alt: "Certus Capital" , url: "https://certuscapital.in/"  },
  { id: 11, src: require("../assets/recruiters/Cognizant.png"), alt: "Cognizant" , url: "https://www.cognizant.com/" },
  { id: 12, src: require("../assets/recruiters/Data-Insights.jpg"), alt: "Data Insights" , url: "https://www.slideshare.net/slideshow/statistical-inference-in-highdimension-application-to-brain-imaging/139759085" },
  { id: 13, src: require("../assets/recruiters/Digit-General-Insurance-300x145.png"), alt: "Digit Insurance" , url: "https://www.godigit.com/" },
  { id: 14, src: require("../assets/recruiters/Edmingle.png"), alt: "Edmingle" , url: "https://www.edmingle.com/"  },
  { id: 15, src: require("../assets/recruiters/Exide-Industries.png"), alt: "Exide Industries"  , url: "https://www.exideindustries.com/"},
  { id: 16, src: require("../assets/recruiters/Federal-Bank-1.png"), alt: "Federal Bank", url: "https://www.federalbank.co.in/" },
  { id: 17, src: require("../assets/recruiters/Flipkart.png"), alt: "Flipkart", url: "https://www.flipkart.com/" },
  { id: 18, src: require("../assets/recruiters/ghcl.png"), alt: "GHCL", url: "https://www.ghcl.co.in/" },
  { id: 19, src: require("../assets/recruiters/godrej.jpg"), alt: "Godrej", url: "https://www.godrej.com/" },
  { id: 20, src: require("../assets/recruiters/havells.png"), alt: "Havells", url: "https://www.havells.com/" },
  { id: 21, src: require("../assets/recruiters/hdfc.png"), alt: "HDFC", url: "https://www.hdfcbank.com/" },
  { id: 22, src: require("../assets/recruiters/hdfc-bank-1.png"), alt: "HDFC Bank", url: "https://www.hdfcbank.com/" },
  { id: 23, src: require("../assets/recruiters/homefirst.png"), alt: "Home First", url: "https://homefirstindia.com/" },
  { id: 24, src: require("../assets/recruiters/ibm-1.png"), alt: "IBM", url: "https://www.ibm.com/" },
  { id: 25, src: require("../assets/recruiters/ICICI-Bank.png"), alt: "ICICI Bank", url: "https://www.icicibank.com/" },
  { id: 26, src: require("../assets/recruiters/IDBI-bank.png"), alt: "IDBI Bank", url: "https://www.idbibank.in/" },
  { id: 27, src: require("../assets/recruiters/images-1.png"), alt: "Indusface", url: "https://www.indusface.com/" },
  { id: 28, src: require("../assets/recruiters/jio.png"), alt: "Jio", url: "https://www.jio.com/" },
  { id: 29, src: require("../assets/recruiters/Junomoneta-Finsol-1.png"), alt: "Junomoneta", url:"https://www.junomoneta.in/" },
  { id: 30, src: require("../assets/recruiters/juspay.png"), alt: "Juspay" ,url:"https://juspay.io/in" },
  { id: 31, src: require("../assets/recruiters/khawaha.png"), alt: "Khawaha" ,url:"https://law.asia/law-firm/kachwaha-and-partners/" },
  { id: 32, src: require("../assets/recruiters/Mahindra-Mahindra.png"), alt: "Mahindra" ,url:"https://www.mahindra.com/"  },
  { id: 33, src: require("../assets/recruiters/matrix-1.png"), alt: "Matrix",url:"https://www.matrixcomsec.com/"  },
  { id: 34, src: require("../assets/recruiters/MRF-LTD.png"), alt: "MRF LTD" ,url:"https://www.mrftyres.com/" },
  { id: 35, src: require("../assets/recruiters/Polycab-India.png"), alt: "Polycab India" ,url:"https://polycab.com/" },
  { id: 36, src: require("../assets/recruiters/Reliance-Industries-1.png"), alt: "Reliance Industries" ,url:"https://www.ril.com/" },
  { id: 37, src: require("../assets/recruiters/rt-camp.png"), alt: "RT Camp" ,url:"https://rtcamp.com/" },
  { id: 38, src: require("../assets/recruiters/sophos.png"), alt: "Sophos" ,url:"https://www.sophos.com/en-us" },
  { id: 39, src: require("../assets/recruiters/sp-global.jpg"), alt: "S&P Global" ,url:"https://www.spglobal.com/en" },
  { id: 40, src: require("../assets/recruiters/TCS.png"), alt: "TCS" ,url:"https://www.tcs.com/" },
  { id: 41, src: require("../assets/recruiters/Tribastion.jpg"), alt: "Tribastion" ,url:"https://www.tribastion.com/" },
  { id: 42, src: require("../assets/recruiters/TSS-Consultancy.png"), alt: "TSS Consultancy" ,url:"https://www.trackwizz.com/" },
  { id: 43, src: require("../assets/recruiters/uno-minda-1.png"), alt: "UNO Minda" ,url:"https://www.unominda.com/" },
  { id: 44, src: require("../assets/recruiters/Vedanta-Ltd.png"), alt: "Vedanta" ,url:"https://www.vedantalimited.com/eng/" },
  { id: 45, src: require("../assets/recruiters/vi-1.png"), alt: "VI" ,URL:"https://www.myvi.in/" },
  { id: 46, src: require("../assets/recruiters/Wipro.png"), alt: "Wipro" , url: "https://www.wipro.com/"  },
  { id: 47, src: require("../assets/recruiters/Zentiva-India-Pvt-Ltd.png"), alt: "Zentiva" ,url:"https://www.zentiva.com/" },
  { id: 48, src: require("../assets/recruiters/zydus.png"), alt: "Zydus" , url: "https://www.indianpharmapost.com/biotech/zydus-cadila-submits-nda-to-drug-controller-general-of-india-for-chronic-kidney-disease-10695"},
];


const Recruiters = () => {
  return (
    <div className="recruiters-section">
      <h2 className="section-titles">Our Recruiters</h2>
      <div className="underline"></div>
      <div className="recruiters-grid">
        {recruitersData.map((company) => (
          <a key={company.id} href={company.url} target="_blank" rel="noopener noreferrer" className="recruiter-card">
            <img src={company.src} alt={company.alt} className="recruiter-logo" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Recruiters;













