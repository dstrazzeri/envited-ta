import './Home.css';
import { Link } from "react-router-dom"
import { GiPartyPopper } from 'react-icons/gi'

function Home() {
  return (
    <div className="Home">
      <h1>Imagine if <br/>
      <span>Snapchat</span><br/>
      had events.</h1>
      <div className='plc'>
      <p>Easily host and share events with your friends across any social media.</p>
      </div>
      <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T030959Z&X-Amz-Expires=86400&X-Amz-Signature=9d1a0afa44c8b7f48e92ad9b739cf659e5ee16eef5be93a3d3a006f337b10207&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject" alt="envited movie night sample"/>
      <Link to="/create"><div className='btn'><p><GiPartyPopper/>Create my event</p></div></Link>
    </div>
  );
}

export default Home;