import { faLocationDot, faPhone, faClock, faCartPlus, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Image} from "next/image";

const page = () => {
  return (
    <>
        <div className="w-screen h-screen bg-cyan-600">
            <div className='w-screen h-12 bg-orange-600 flex justify-center items-center'>
                <div className='w-4/5 bg-yellow-600 h-12 flex items-center font-light text-xs justify-around'>
                  <div className=' flex w-1/2 bg-red-700 justify-around '>

                <FontAwesomeIcon  icon={faLocationDot}  className='w-5 h-5 mr-1'/>
                <p>2507 Parker Boulevard, Oakland, CA 76107</p>

                <FontAwesomeIcon icon={faPhone} className='w-5 h-5 mr-1 ml-3'/>
                <p>(0481) 123 987 2411</p>

                <FontAwesomeIcon icon={faClock} className='w-5 h-5 mr-1 ml-3'/>
                <p>	Mon-Sat: 07:00 - 17:00</p>

                </div>

                <div className='flex w-1/3 bg-neutral-600 justify-end'>
                <FontAwesomeIcon icon={faCartPlus} className='w-5 h-5 mr-1' />
                <FontAwesomeIcon icon={faMagnifyingGlass} className='w-5 h-5 mr-1 ml-3'/>
                <Image href="/"/>
                </div>
              </div>

            </div>
        </div>
    </>
  )
}

export default page
