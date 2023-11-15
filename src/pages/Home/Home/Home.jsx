import MenuItem from "../../Shared/MenuItem/MenuItem";
import Bannar from "../Bannar/Bannar";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;