import { Link } from "react-router-dom";
import Layout from "@/layout";
import useSocket from "@/context/use-socket";

const NoPage = () => {
    const { T } = useSocket()

    return (
        <section className='container mt-2'>
            <div className='nopage d column gap-2 center middle' style={{ margin: '0 auto', maxWidth: 550, minHeight: '80vh' }}>
                <img src="/img/404-page.svg" alt="404-page" style={{ width: '100%', height: 'auto' }} loading='lazy' />
                <div className="d center middle gap wrap">
                    <div className="lg-text">Sorry! The page not found.</div>
                    <Link to='/' className="lg-text primary-text" style={{ textDecoration: 'underline' }}>Go to Home Page</Link>
                </div>
            </div>
        </section >
    )
};

export default NoPage;