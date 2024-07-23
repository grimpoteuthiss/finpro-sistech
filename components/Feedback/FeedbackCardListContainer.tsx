import { FeedbackCardList } from "./FeedbackCardList";

const data = [
    {
        "id": 0,
        "imageUrl": "/Images/heshi.jpg",
        "name": "Heshi",
        "job": "Front-End Developer",
        "desc": "This bootcamp exceeded my expectations in teaching front-end development. The hands-on projects, especially the e-commerce website challenge, really cemented my understanding of React and responsive design. I appreciate how the curriculum kept up with industry trends. However, I wish we had more time on advanced state management techniques."
    },
    {
        "id": 1,
        "imageUrl": "/Images/duck.jpg",
        "name": "Duckky",
        "job": "Back-End Developer",
        "desc": "The back-end module was comprehensive and well-structured. I particularly enjoyed the database design sessions and the API development project. The instructors were knowledgeable and always available for support. One suggestion would be to include more content on microservices architecture, as it's becoming increasingly important in the industry."
    },
    {
        "id": 2,
        "imageUrl": "/Images/gojo.jpg",
        "name": "Gojo",
        "job": "DevOps Engineer",
        "desc": "This bootcamp provided an excellent introduction to DevOps practices. The hands-on experience with tools like Docker and Jenkins was invaluable. I feel well-prepared for a DevOps role now. My only feedback would be to include more real-world case studies of DevOps implementation in various industries."
    },
    {
        "id": 3,
        "imageUrl": "/Images/koutaro.jpg",
        "name": "Koutaro",
        "job": "Data Scientist",
        "desc": "The data science curriculum was rigorous and engaging. I loved the Kaggle-style competitions we had, which really helped in applying our skills to real datasets. The machine learning modules were particularly strong. One area for improvement could be more focus on big data technologies like Spark, as these are crucial in many data science roles."
    },
    {
        "id": 4,
        "imageUrl": "/Images/kiki.jpg",
        "name": "Kiki",
        "job": "Cybersecurity Analyst",
        "desc": "This cybersecurity bootcamp was intense and incredibly informative. The ethical hacking workshops and capture-the-flag challenges were highlights for me. I feel much more confident in my ability to protect systems now. If possible, I'd suggest adding more content on cloud security, as it's becoming increasingly important in the field."
    }
]

function FeedbackCardListContainer() {
    return <FeedbackCardList cards={data} />
}

export { FeedbackCardListContainer };