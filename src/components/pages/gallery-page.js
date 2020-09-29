
import React, {useState} from "react";
import MetaTags from 'react-meta-tags';

import Carousel, {Modal, ModalGateway} from 'react-images';

const imagesNewYear = [
    {id: `0`, src: `/images/new-year-2019/1.jpg`, index: `1`},
    {id: `1`, src: `/images/new-year-2019/2.jpg`, index: `2`},
    {id: `2`, src: `/images/new-year-2019/3.jpg`, index: `3`},
    {id: `3`, src: `/images/new-year-2019/4.jpg`, index: `4`},
    {id: `7`, src: `/images/new-year-2019/5.jpg`, index: `5`},
    {id: `8`, src: `/images/new-year-2019/6.jpg`, index: `6`},
    {id: `6`, src: `/images/new-year-2019/7.jpg`, index: `7`},
    {id: `4`, src: `/images/new-year-2019/8.jpg`, index: `8`},
    {id: `5`, src: `/images/new-year-2019/9.jpg`, index: `9`},
];

const imagesOctober = [
    {id: `9`, src: `/images/october-2018/1.jpg`, index: `11`},
    {id: `10`, src: `/images/october-2018/2.jpg`, index: `12`},
    {id: `11`, src: `/images/october-2018/3.jpg`, index: `13`},
    {id: `12`, src: `/images/october-2018/4.jpg`, index: `14`},
    {id: `13`, src: `/images/october-2018/5.jpg`, index: `15`},
    {id: `14`, src: `/images/october-2018/7.jpg`, index: `16`},
    {id: `15`, src: `/images/october-2018/4.jpg`, index: `17`},
    {id: `16`, src: `/images/october-2018/8.jpg`, index: `18`},
    {id: `17`, src: `/images/october-2018/6.jpg`, index: `19`},
];

const GalleryPage = () => {

    const [modalIsOpen, setmodalIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const _handlerClick = (i) => {
        setCurrentIndex(i);
        setmodalIsOpen(!modalIsOpen);
    };

    return (

        <section className="gallery">
            <MetaTags>
                <title>Фотогалерея детского центра Счастье восточный | войновка</title>
                <meta name="description" content="Фотогалерея детского центра, занятия в детском саду, с логопедом, минисад и подготовка к школе, детский садик, ребенок сад " />
            </MetaTags>

            <div className="gallery__wrapper container">
                <h1 className="title__hidden">Детские праздники в саду</h1>
                <div className="gallery__content">
                    <div className="gallery-block">

                        <div className="gallery__list">
                            {imagesNewYear.map((it) => {
                                return (
                                    <span key={`image-${it.id}`}
                                        className={`gallery__item  gallery__item--${it.index}`}
                                        onClick={() => _handlerClick(it.id)} >
                                        <img className="gallery__img" src={it.src} alt="" />
                                    </span>
                                );
                            })}
                        </div>


                        <div className="gallery__list">
                            {imagesOctober.map((it) => {
                                return (
                                    <span key={`image-${it.id}`}
                                        className={`gallery__item  gallery__item--${it.index}`}
                                        onClick={() => _handlerClick(it.id)} >
                                        <img className="gallery__img" src={it.src} alt="" />
                                    </span>
                                );
                            })}
                        </div>

                        <ModalGateway>
                            {modalIsOpen ? (
                                <Modal onClose={() => setmodalIsOpen(!modalIsOpen)}>
                                    <Carousel views={[...imagesNewYear, ...imagesOctober]} currentIndex={currentIndex}/>
                                </Modal>
                            ) : null}
                        </ModalGateway>


                        {/* <div className="gallery__list">
                            <span className="gallery__item  gallery__item--1"><img className="gallery__img" src="/images/new-year-2019/1.jpg" alt="" /></span>
                            <span className="gallery__item  gallery__item--2"><img className="gallery__img" src="/images/new-year-2019/2.jpg" alt="" /></span>
                            <span className="gallery__item  gallery__item--3"><img className="gallery__img" src="/images/new-year-2019/3.jpg" alt="" /></span>
                            <span className="gallery__item  gallery__item--4"><img className="gallery__img" src="/images/new-year-2019/4.jpg" alt="" /></span>
                            <span className="gallery__item  gallery__item--5"><img className="gallery__img" src="/images/new-year-2019/5.jpg" alt="" /></span>
                            <span className="gallery__item  gallery__item--6"><img className="gallery__img" src="/images/new-year-2019/6.jpg" alt="" /></span>
                            <span className="gallery__item  gallery__item--7"><img className="gallery__img" src="/images/new-year-2019/7.jpg" alt="" /></span>
                            <span className="gallery__item  gallery__item--8"><img className="gallery__img" src="/images/new-year-2019/8.jpg" alt="" /></span>
                            <span className="gallery__item  gallery__item--9"><img className="gallery__img" src="/images/new-year-2019/9.jpg" alt="" /></span>
                        </div>*/}

                        {/* <div className="gallery__list">
                            <span className="gallery__item  gallery__item--11"><img className="gallery__img" src="/images/october-2018/1.jpg" alt="" /></span>
                            <span className="gallery__item  gallery__item--12"><img className="gallery__img" src="/images/october-2018/2.jpg" alt="" /></span>
                            <span className="gallery__item  gallery__item--13"><img className="gallery__img" src="/images/october-2018/3.jpg" alt="" /></span>
                            <span className="gallery__item  gallery__item--14"><img className="gallery__img" src="/images/october-2018/4.jpg" alt="" /></span>
                            <span className="gallery__item  gallery__item--15"><img className="gallery__img" src="/images/october-2018/5.jpg" alt="" /></span>
                            <span className="gallery__item  gallery__item--16"><img className="gallery__img" src="/images/october-2018/7.jpg" alt="" /></span>
                            <span className="gallery__item  gallery__item--17"><img className="gallery__img" src="/images/october-2018/4.jpg" alt="" /></span>
                            <span className="gallery__item  gallery__item--18"><img className="gallery__img" src="/images/october-2018/4.jpg" alt="" /></span>
                            <span className="gallery__item  gallery__item--19"><img className="gallery__img" src="/images/october-2018/6.jpg" alt="" /></span>
                        </div> */}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default GalleryPage;
