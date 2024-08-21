import { AiFillLinkedin } from "react-icons/ai"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { BsMedium } from "react-icons/bs"; 
import logo from "../assets/logo.svg"
import logo1 from "../assets/logo1.svg"
import Container from '../utils'
import { Button} from 'antd';
import saly from "../assets/saly.png"

const Header = () => {
  return (
    <div>
      <Container>
         <div className='nav flex items-center justify-between'>
            <div className='nav__logo flex gap-2 bg-red p-4 '>
                <img src={logo} alt="" />
                <img src={logo1} alt="" />
            </div>
            <div>
                <ul className='flex gap-4'>
                    <select>
                        <option value="">EN</option>
                        <option value="">RU</option>
                        <option value="">UZ </option>
                    </select>
                    <li><a className='font-medium text-gray-400 text-base' href="#">PORTFOLIO</a></li>
                    <li><a className='font-medium text-gray-400 text-base'  href="#">BLOG</a></li>
                    <li><a className='font-medium text-gray-400 text-base'  href="#">CV</a></li>
                    <li><a className='font-medium text-gray-400 text-base'  href="#">STORE</a></li>
                    <li><a className='font-medium text-gray-400 text-base'  href="#">FREELANCE</a></li>
                    <li><a className='font-medium text-gray-400 text-base'  href="#">ABOUT ME</a></li>
                    <li><a className='font-medium text-gray-400 text-base'  href="#">CONTACT</a></li>
                </ul>
            </div>
         </div>

        <div className="flex w-full justify-between">
        <div className='banner mt-[160px]'>
            <div className='banner__title'>
                <h2 className='text-pink-700 font-bold text-[52px]'>Blog Posts</h2>
                <h3 className='text-[52px] font-medium'>I think so, this is it. </h3>
            </div>
            
            <div className="flex flex-col gap-[36px] mt-[36px]">
            <p className='text-lg text-gray-600 w-[630px]'>Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.</p>

            <div className='header__btn flex gap-4'>
            <Button className="flex rounded-none p-6" type="primary"> <AiOutlineTwitter /> Primary Button</Button>
            <Button type="primary rounded-none p-6 bg-blue-900"> <AiFillLinkedin /> Primary Button</Button>
            <Button type="primary rounded-none p-6 bg-black"> <BsMedium /> Primary Button</Button>
            </div>
            </div>
           
        </div>
        <img className="object-cover" src={saly} alt="" /> 
         </div>

<div className="list mt-[305px]">
    <ul className="flex gap-[53px]">
        <li><a className="text-lg font-bold text" href="#">All</a></li>
        <li><a className="text-lg font-bold text" href="#">UI Design</a></li>
        <li><a className="text-lg font-bold text" href="#">UX Design</a></li>
        <li><a className="text-lg font-bold text" href="#">Product Design</a></li>
        <li><a className="text-lg font-bold text" href="#">Articles</a></li>
        <li><a className="text-lg font-bold text" href="#">Tutorials</a></li>
        <li><a className="text-lg font-bold text" href="#">News</a></li>
    </ul>
</div>
      </Container>
    </div>
  )
}

export default Header
