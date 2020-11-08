import {ContactsPage, MainPage, PricePage, AboutPage, NewsPage, PolicyPage, OfferPage} from '../components/pages';

export default [
    {
        path: `/policy`,
        component: PolicyPage,
        exact: true
    },
    {
        path: `/offer`,
        component: OfferPage,
        exact: true
    },
    {
        path: `/contacts`,
        component: ContactsPage,
        exact: true
    },
    // {
    //     path: `/gallery`,
    //     component: GalleryPage,
    //     exact: true
    // },
    {
        path: `/about`,
        component: AboutPage,
        exact: true
    },
    {
        path: `/price`,
        component: PricePage,
        exact: true
    },
    {
        path: `/news`,
        component: NewsPage,
        exact: true
    },
    {
        path: `/`,
        component: MainPage,
        exact: true
    }
];
