import { FeedbackCardList } from "./FeedbackCardList";

const data = [
    {
        imageUrl: "/images/user-ava.png",
        name: "heshi",
        job: "tidur",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit provident eligendi ipsam commodi, enim, placeat reprehenderit incidunt quod corporis doloribus quos perspiciatis minus culpa quasi assumenda soluta. Id, delectus omnis!"
    },
    {
        imageUrl: "/images/user-ava.png",
        name: "heshi",
        job: "tidur",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit provident eligendi ipsam commodi, enim, placeat reprehenderit incidunt quod corporis doloribus quos perspiciatis minus culpa quasi assumenda soluta. Id, delectus omnis!"
    },    {
        imageUrl: "/images/user-ava.png",
        name: "heshi",
        job: "tidur",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit provident eligendi ipsam commodi, enim, placeat reprehenderit incidunt quod corporis doloribus quos perspiciatis minus culpa quasi assumenda soluta. Id, delectus omnis!"
    },    {
        imageUrl: "/images/user-ava.png",
        name: "heshi",
        job: "tidur",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit provident eligendi ipsam commodi, enim, placeat reprehenderit incidunt quod corporis doloribus quos perspiciatis minus culpa quasi assumenda soluta. Id, delectus omnis!"
    },
]

function FeedbackCardListContainer() {
    return <FeedbackCardList cards={data} />
}

export { FeedbackCardListContainer };