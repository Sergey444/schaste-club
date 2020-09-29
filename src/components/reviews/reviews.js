import React, {useEffect} from 'react';

import {withAppService} from '../hoc';
import {connect} from 'react-redux';
import {reviewsLoaded} from '../../actions';

import PropTypes from 'prop-types';

const Reviews = (props) => {

    const admins = [160307951, 438744813, 237158900];
    const {appService, reviews} = props;

    useEffect(() => {

        if (!reviews.items) {

            /* eslint max-nested-callbacks: ["error", 4] */
            appService.getReviews()
                .then((data) => {
                    const result = data.response;
                    result.items = result.items.filter((item) => {
                        item.user = result.profiles.find((profile) => profile.id === item.from_id);
                        return admins.indexOf(item.from_id) === -1;
                    });

                    props.reviewsLoaded(result);
                });
        }
    });

    if (!reviews.items) {

        return (
            <h2 className="title">Загружаю отзывы ...</h2>
        );
    }

    return (
        <section className="reviews">
            <div className="reviews__wrapper container">
                <div className="title">Отзывы наших гостей</div>
                <div className="reviews__content" id="reviews-content">
                    {
                        reviews.items.map((review) => {
                            const url = `https://vk.com/${review.user.screen_name}`;
                            return (
                                <div key={review.id} className="reviews__item">
                                    <a href={url} target="_blank" className="reviews__user-photo-link" rel="noopener noreferrer" >
                                        <img className="reviews__user-photo" src={review.user.photo_50} alt="" />
                                    </a>
                                    <div>
                                        <div>
                                            <a href={url} target="_blank" className="reviews__user" rel="noopener noreferrer" >{review.user.first_name} {review.user.last_name}</a>
                                            <span className="reviews__date"></span>
                                        </div>
                                        <div className="reviews__comment">{review.text.trim()}</div>
                                        <div className="reviews__photos"></div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="reviews__callback"><a href="https://vk.com/topic-128077599_34587643?offset=last" target="_blank" className="reviews__btn" rel="noopener noreferrer">Посмотреть все отзывы «Вконтакте»</a></div>
            </div>
        </section>
    );
};

Reviews.propTypes = {
    appService: PropTypes.object,
    reviews: PropTypes.object,
    reviewsLoaded: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        reviews: state.reviews
    };
};

const mapDispatchToProps = {
    reviewsLoaded
};


export default withAppService()(connect(mapStateToProps, mapDispatchToProps)(Reviews));
