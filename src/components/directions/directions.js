import React, {useState} from 'react';

import Modal from 'react-modal';

const customStyles = {
    content: {
        top: `50%`,
        left: `50%`,
        right: `auto`,
        bottom: `auto`,
        marginRight: `-50%`,
        transform: `translate(-50%, -50%)`,
        maxWidth: `700px`,
    }
};

const Directions = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState(``);
    const [modalContent, setModalContent] = useState(``);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const directionOpen = (evt) => {
        const btn = evt.target;
        const container = btn.parentElement.parentElement;
        const title = container.querySelector(`.directions__title`).textContent;
        const content = container.querySelector(`.directions__description`).textContent;
        setModalTitle(title);
        setModalContent(content);
        openModal();
    };

    return (
        <section className="directions">
            <div className="directions__wrap container">

                <Modal
                    isOpen={modalIsOpen}
                    style={customStyles}
                    onRequestClose={closeModal}
                    ariaHideApp={false}>
                    <div className="postcard">
                        <h2 className="postcard__title">{modalTitle}</h2>
                        {modalContent}

                    </div>
                </Modal>

                {/* <div className="title">Направления</div> */}
                <div className="directions__list">

                    <div className="directions__item">
                        <div className="directions__info">
                            <h2 className="directions__title">Мини - сад</h2>
                            <div className="direction__price">
                                <div className="directions__single">Разовое посещение <span>450р</span></div>
                                <div className="directions__multiple">Абонемент 8 занятий/месяц <span>3600р</span></div>
                                <div className="directions__multiple">Абонемент 12 занятий/месяц <span>4800р</span></div>
                                <div className="directions__multiple">Абонемент 20 занятий/месяц <span>6500р</span>
                                </div>
                            </div>
                        </div>
                        <div className="directions__more">
                            <span onClick={directionOpen} className="directions__more-btn">Подробнее</span>
                        </div>
                        <p className="directions__description" >
                            Группа кратковременного пребывания (с 9:00 до 13:00) для малышей с 1,8 до 4 лет. Целых 4 часа увлекательных, развивающих занятий для деток в дружной компании таких же малышей и, вместе с тем, целых 4 часа свободного времени для мамочки! В мини-садике мы делаем зарядку, играем, танцуем, много внимания уделяем развитию сенсорики, мелкой моторики и речи, занимемся творчеством: лепим, клеим, рисуем и каждый день радуем мам необычными поделками, выполненными в разных техниках
                        </p>
                    </div>

                    <div className="directions__item">
                        <div className="directions__info">
                            <h2 className="directions__title">Творческая студия &quot;Счастье в ладошках&quot;</h2>
                            <div className="direction__price">
                                <div className="directions__single">Разовое посещение <span>400р</span></div>
                                <div className="directions__multiple">Абонемент 8 занятий/месяц <span>2800р</span></div>
                            </div>
                        </div>
                        <div className="directions__more">
                            <span onClick={directionOpen} className="directions__more-btn">Подробнее</span>
                        </div>
                        <p className="directions__description">
                            Открываем с детками 4-6 лет двери в мир
                         искусства! Получаем удовольствие от безграничных возможностей самовыражения в творчестве, развиваем фантазию, восприятие, пространственную ориентацию, мелкую моторику, чувство красоты и гармонии. Рисование и лепка полезны для деток ещё и тем, что прекрасно снимают эмоциональное напряжение, тревогу (ведь не каждый ребёнок в полной мере способен выразить свои чувства!)
                        </p>
                    </div>

                    <div className="directions__item">
                        <div className="directions__info">
                            <h2 className="directions__title">Интеллект-тренировки &quot;Умничка&quot;</h2>
                            <div className="direction__price">
                                <div className="directions__single">Разовое посещение <span>400р</span></div>
                                <div className="directions__multiple">Абонемент 8 занятий/месяц <span>2800р</span></div>
                            </div>
                        </div>
                        <div className="directions__more">
                            <span onClick={directionOpen} className="directions__more-btn">Подробнее</span>
                        </div>
                        <p className="directions__description">
                            Развиваем с ребятишками 4-6 лет внимание, воображение, память, логику, эмоциональный интеллект, волю, моторику, восприятие, речь, межполушарное взаимодействие, выполняя интересные и необычные задания! А ещё обогащаем общие представления о мире вокруг нас, знакомимся с буквами и цифрами
                        </p>
                    </div>

                    <div className="directions__item">
                        <div className="directions__info">
                            <h2 className="directions__title">Консультация психолога</h2>
                            <div className="direction__price">
                                <div className="directions__single">Разовое посещение <span>1000р</span></div>
                                <div className="directions__multiple">Абонемент 8 занятий/месяц <span>3600р</span></div>
                            </div>
                        </div>
                        <div className="directions__more">
                            <span onClick={directionOpen} className="directions__more-btn">Подробнее</span>
                        </div>
                        <p className="directions__description">
                            Психолог профессионально, научно и доступно расскажет о том, какие механизмы управляют нашим поведением, нашими эмоциональными реакциями в той или иной ситуации, поможет разобраться и найти оптимальный именно для вас способ действий тогда, когда решения неочевидны или не помогает ничего из того, что вы уже попробовали самостоятельно
                        </p>
                    </div>

                    <div className="directions__item">
                        <div className="directions__info">
                            <h2 className="directions__title">Клуб развития эмоционального интеллекта &quot;Я есть!&quot;</h2>
                            <div className="direction__price">
                                <div className="directions__single">Разовое посещение <span>400р</span></div>
                                <div className="directions__multiple">Абонемент 4 занятий/месяц <span>2800р</span></div>
                            </div>
                        </div>
                        <div className="directions__more">
                            <span onClick={directionOpen} className="directions__more-btn">Подробнее</span>
                        </div>
                        <p className="directions__description">
                            Просто подойти и познакомиться, просто предложить помощь, просто попросить о чём-то или поделиться своими переживаниями...Иногда для детей это совсем не просто, и все сомнения, негативные эмоции, тревоги приходится держать в себе. Часто потом это выплёскивается истериками, капризами, страхами и нежеланием что-либо делать. В клубе дети учатся экологично и доступно выражать свои мысли, чувства, учатся общаться, осознавать свои потребности и потребности других людей
                        </p>
                    </div>

                    <div className="directions__item">
                        <div className="directions__info">
                            <h2 className="directions__title">Комплексное развитие для самых маленьких &quot;Птенчики&quot;</h2>
                            <div className="direction__price">
                                <div className="directions__single">Разовое посещение <span>400р</span></div>
                                <div className="directions__multiple">Абонемент 4 занятий/месяц <span>2800р</span></div>
                            </div>
                        </div>
                        <div className="directions__more">
                            <span onClick={directionOpen} className="directions__more-btn">Подробнее</span>
                        </div>
                        <p className="directions__description">
                            Малыши с 9 месяцев до 1,8 при помощи своих мамочек и под руководством психолога развивают мелкую и крупную моторику, сенсорное восприятие, мышление, стимулируют речь, занимаются творчеством и просто весело проводят время в дружной компании таких же деток. Мамы смогут узнать всю правду о раннем развитии, задать вопросы специалисту, научиться выполнять полезные развивающие упражнения и практиковать их с малышом дома
                        </p>
                    </div>

                    <div className="directions__item">
                        <div className="directions__info">
                            <h2 className="directions__title">Логопед</h2>
                            <div className="direction__price">
                                <div className="directions__single">Разовое посещение <span>500р</span></div>
                                <div className="directions__multiple">Абонемент 8 занятий/месяц <span>3600р</span></div>
                                <div className="directions__multiple">Абонемент 12 занятий/месяц <span>4800р</span></div>
                            </div>
                        </div>
                        <div className="directions__more">
                            <span onClick={directionOpen} className="directions__more-btn">Подробнее</span>
                        </div>
                        <p className="directions__description">
                            Наши специалисты по развитию речи работают с детками с 2-х лет: стимулируют речь у неговорящих малышей, помогают поставить правильные и красивые звуки, обогатить словарный запас, проводят занятия по профилактике речевых нарушений
                        </p>
                    </div>

                    <div className="directions__item">
                        <div className="directions__info">
                            <h2 className="directions__title">Клуб будущего первоклассника</h2>
                            <div className="direction__price">
                                <div className="directions__single">Разовое посещение <span>400р</span></div>
                                <div className="directions__multiple">Абонемент 8 занятий/месяц <span>2800р</span></div>
                            </div>
                        </div>
                        <div className="directions__more">
                            <span onClick={directionOpen} className="directions__more-btn">Подробнее</span>
                        </div>
                        <p className="directions__description">
                            Школа будет долгое время занимать важное место в жизни ребёнка! На занятиях в клубе ваш будущий первоклассник в спокойном темпе и благоприятной атмосфере усвоит правила школьной жизни, поймёт, зачем и как нужно учиться, узнает то, что поможет уверенно шагнуть в новый этап его жизни
                        </p>
                    </div>

                    <div className="directions__item">
                        <div className="directions__info">
                            <h2 className="directions__title">Встречи для мам</h2>
                            {/* <div className="direction__price">
                                <div className="directions__single">Разовое посещение <span>450₽</span></div>
                                <div className="directions__multiple">Абонемент 4 занятий/месяц <span>1600₽</span></div>
                            </div> */}
                        </div>
                        {/* <div className="directions__more">
                            <span onClick={directionOpen} className="directions__more-btn">Подробнее</span>
                        </div>
                        <div className="directions__description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error aliquam facere aliquid atque accusamus nostrum mollitia beatae quasi vel dolorem, autem nisi! Eius facere magni culpa commodi voluptatem, ducimus dolorum.
                        </div> */}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Directions;
