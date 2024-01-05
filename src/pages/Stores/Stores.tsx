import "./Stores.scss";
import Heading from "../../components/Heading/Heading";
import Footer from "../../components/Footer/Footer";
import Delivery from "../../components/Delivery/Delivery";
import store1 from "../../assets/images/store.jpg";
import store2 from "../../assets/images/store-2.jpg";

const Stores = () => {
	return (
		<>
			<Heading title="Find Your Store"></Heading>
			<div className="stores-container wrapper">
				<div className="stores-box">
					<img
						src={store1}
						alt="Mernstore in Allentown"
						className="stores-img"
					/>
					<div className="stores-text-box">
						<p className="stores-name">MernStore Allentown</p>
						<p className="stores-street">
							1511 Lehigh St, Allentown, PA 18103, USA
						</p>
					</div>
					<div className="stores-text-box">
						<p className="stores-bold-text">Opening hours:</p>
						<p className="stores-text">Md - St: 9:00 - 21:00</p>
						<p className="stores-text">Sunday: 10:00 - 20:00</p>
						<p className="stores-bold-text">Contact:</p>
						<p className="stores-text">contact@mernstore@gmail.com</p>
						<p className="stores-text">+1 267-338-2608</p>
						<button className="stores-btn">More Info</button>
					</div>
				</div>
				<div className="stores-box">
					<img src={store2} alt="Mernstore in Boston" className="stores-img" />
					<div className="stores-text-box">
						<p className="stores-name">MernStore Boston</p>
						<p className="stores-street">
							200 Boylston St, Chestnut Hill, MA 02467, USA
						</p>
					</div>
					<div className="stores-text-box">
						<p className="stores-bold-text">Opening hours:</p>
						<p className="stores-text">Md - St: 9:00 - 21:00</p>
						<p className="stores-text">Sunday: 10:00 - 20:00</p>
						<p className="stores-bold-text">Contact:</p>
						<p className="stores-text">contact@mernstore@gmail.com</p>
						<p className="stores-text">+1 267-338-2608</p>
						<button className="stores-btn">More Info</button>
					</div>
				</div>
			</div>
			<Delivery></Delivery>
			<Footer></Footer>
		</>
	);
};

export default Stores;
