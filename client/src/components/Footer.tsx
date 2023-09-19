import '../styles/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div id='footerWrapper'>
                <div id="footerTitleWrapper">
                    <h2 id="footerTitle">surfConnect</h2>
                </div>
                <div id="footerBlockWrapper">
                    <div className="footerBlock">
                        <h2 className='footerBlockTitle'>Navigate</h2>
                        <Link to='/login' className='footerLink'>Login</Link>
                        <Link to='/signup' className='footerLink'>Sign Up</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;