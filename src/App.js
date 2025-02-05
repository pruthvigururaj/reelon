import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Analytics from './Components/Analytics';
import Bio from './Components/Bio';
import Showcase from './Components/Showcase';
import Professional from './Components/Professional';
import Network from './Components/Network';
import News from './Components/News';
import Service from './Components/Service';
import Number from './Components/Number';
import People from './Components/People';


function App() {
  return (
    <div className='bg-sky-100'>
     <Navbar />

     <div className='flex flex-row'>
         

         <div className=' lg:w-[70%] w-full'>
           <Profile />
           <Analytics />
           <Bio />
           <Showcase />
           <Professional />
           <Network />
           <News />

         </div>

         <div className=' lg:w-[30%] hidden lg:block'>
             <Service />
             <Number />
             <People />
         </div>

     </div>
     
    </div>
  );
}

export default App;
