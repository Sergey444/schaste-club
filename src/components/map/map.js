import React, {useEffect} from 'react';
// import DG from '2gis-maps';

const DG = typeof window !== `undefined` && require(`2gis-maps`);

const popupContent =
    `<div class="contacts__map-popup">
        <h3>Детский клуб «Счастье»</h3>
        <p>625053, г.Тюмень, ул. Вербовая 4</p>
        <table style="width: 100%">
            <tr>
                <td>пн-пт:</td>
                <td>с 9:00 до 20:00</td>
            </tr>
            <tr>
                <td>сб-вс:</td
                <td>выходной</td>
            </tr>
        </table>
        <a href="tel:+79634575432">+7 (963) 457-54-32</a><br>
        <a href="mailto:info@schaste-club.ru">info@schaste-club.ru</a>
    </div>`;

const Map = () => {

    const initMap = () => {

        const greenIcon = DG.icon({
            iconUrl: `/images/top/strelka-bottom.png`,
            iconSize: [97, 49],
            iconAnchor: [-2, 55],
            className: `contacts__icon`

        });

        const map = DG.map(`map`, {
            city: `tyumen`,
            center: [57.094, 65.6497],
            zoom: 16,
            zoomControl: false,
            fullscreenControl: false
        });

        DG.marker([57.09490125816814, 65.64579427258651], {icon: greenIcon})
            .addTo(map)
            .bindPopup(popupContent);
    };

    useEffect(() => {
        initMap();
    }, []);

    return (
        <div id="map" className="contacts__map"></div>
    );
};

export default Map;


