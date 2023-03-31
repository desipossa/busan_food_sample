import { Link, useParams } from "react-router-dom";
import { UL } from "../styles/style";

const GuList = ({ busanFood }) => {
    const { id } = useParams();
    const guList = busanFood.filter(it => it.GUGUN_NM === id);
    return (
        <UL>
            {
                guList.map(it => {
                    return (
                        <li key={it.UC_SEQ}>
                            <Link to={`/store/${it.TITLE}`}>{it.TITLE}</Link>
                        </li>
                    )
                })
            }
        </UL>
    )
}

export default GuList;