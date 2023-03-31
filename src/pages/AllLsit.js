import { Link } from "react-router-dom";
import { UL } from "../styles/style";
import { useEffect } from "react";

const AllLsit = ({ busanFood }) => {

    const { kakao } = window;

    const KakaoMapScript = () => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(busanFood[0].LAT, busanFood[0].LNG),
            level: 3
        };

        var map = new kakao.maps.Map(container, options);

        // 마커가 표시될 위치입니다 
        var markerPosition = new kakao.maps.LatLng(busanFood[0].LAT, busanFood[0].LNG);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
    }

    useEffect(() => {
        busanFood && busanFood.length > 0 && KakaoMapScript();
    }, [busanFood])

    return (
        <>
            {
                <>
                    <div id="map" style={{ height: "500px" }}></div>
                    <UL>
                        {
                            busanFood.map(it => {
                                return (
                                    <li key={it.UC_SEQ}>
                                        <Link to={`/store/${it.TITLE}`}>[{it.GUGUN_NM}] {it.TITLE}</Link>
                                    </li>
                                )
                            })
                        }
                    </UL>

                </>
            }

        </>
    )
}

export default AllLsit;