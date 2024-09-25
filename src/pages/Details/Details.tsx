import "./Details.scss";
import { useParams } from "react-router-dom";
import SelectedProduct from "./SelectedProduct/SelectedProduct";
import Footer from "../../components/Footer/Footer";
import Delivery from "../../components/Delivery/Delivery";
import Heading from "../../components/Heading/Heading";
import Reviews from "./Reviews/Reviews";
import { ProductType } from "../../types/types";
import { products } from "../../data/productsData";

const Details = () => {
	const { id } = useParams();

	return (
		<>
			{id &&
				products.map((product: ProductType) => {
					if (product._id === id) {
						return <SelectedProduct product={product}></SelectedProduct>;
					}
				})}

			<Heading title="Additional Information"></Heading>
			<p className="details-desc wrapper">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
				numquam maxime ratione voluptatem. Asperiores delectus numquam iusto
				deserunt vel, obcaecati ducimus quae voluptatem dolore ullam similique
				ratione id, deleniti maiores nemo blanditiis, sint vitae illo animi hic
				minus! Recusandae eos assumenda consequuntur facilis libero harum facere
				laborum molestiae necessitatibus inventore porro sed, itaque quia quis.
				Nisi eos nesciunt sunt cumque repudiandae reprehenderit asperiores,
				blanditiis inventore deserunt voluptatem sint molestias ipsa quibusdam.
				Doloremque modi corrupti numquam odio dolorum perferendis itaque
				dignissimos provident unde, laboriosam autem nam soluta laborum impedit
				sed illo aperiam deleniti neque consectetur nisi, facilis dolor? Cum,
				animi accusamus?
			</p>
			<Heading title="Reviews"></Heading>
			<Reviews></Reviews>
			<Delivery></Delivery>
			<Footer></Footer>
		</>
	);
};

export default Details;
