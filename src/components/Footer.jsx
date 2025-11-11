
import image from "../../public/images/logo.png";

// Icons 
import {FaTiktok, 
        FaFacebook, 
        FaInstagramSquare, 
        FaLinkedin}       from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
 
const Footer = () => {
  return (
    <footer className="bg-black p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">

        {/* Logo */}
        <div className="w-1/6">
          <a href="#" className="text-2xl font-bold relative p-1 bg-white">
          <img  className=" " 
                src={image} 
                alt="Logotipo Isla Diamante"
                loading="lazy"/>  
                  
          </a>

        </div>

        {/* Social media */}
        <nav className="flex items-center gap-4">
          {/* <a  href="https://www.instagram.com/altan.are?igsh=MWU2NTZsZ2FjeXRjZQ=="          
              target= "_blank" 
              className="block text-white p-4 bg-primary_isla rounded-full"
              aria-label="Instagram AHAVACorp" > 
            <FaInstagramSquare />
          </a> */}

          <a  href="https://www.facebook.com/profile.php?id=100091283875933#" 
              target= "_blank" 
              className="block text-white p-4 bg-primary_isla rounded-full"
              aria-label="Facebook AHAVACorp" >
            <FaFacebook />
          </a>

          <a href="https://x.com/AHAVACorp" className="block text-white p-4 bg-primary_isla rounded-full">
            <FaXTwitter />
          </a> 

          <a  href="https://www.linkedin.com/company/ahava-corporativo/"       
              target= "_blank"className="block text-white p-4 bg-primary_isla rounded-full">
            <FaLinkedin />
          </a> 
{/* 
          <a href="" className="block text-white p-4 bg-primary_isla rounded-full">
            <FaTiktok />
          </a>  */}

        </nav>
      </div> 

      {/* 2da Línea Footer */}
      <div className="mt-8">

        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
  
        </nav>
        
      </div>

      {/* CopyRight */}
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          <p>© {new Date().getFullYear()} AHAVA Corporativo. Todos los derechos reservados.</p>
        </p>
      </div>

      <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
            <span>Developed with</span>
            <span className="text-red-500">❤️</span>
            <span>by</span>
            <a href="https://stratik.com.mx" className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stratik
            </a>
      </div>

    </footer>
  );
};

export default Footer;