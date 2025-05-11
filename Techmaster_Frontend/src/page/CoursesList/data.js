import courseImage1 from "../../assests/images/course/courses7.webp";
import courseImage2 from "../../assests/images/course/courses8.webp";
import courseImage3 from "../../assests/images/course/courses12.webp";
import lessonsIcon from "../../assests/images/course/lessons.svg";
import watchIcon from "../../assests/images/course/watch.svg";
import starIcon from "../../assests/images/course/star.svg";
const data = [
    {
        squares: [
            {
                headImages: courseImage1,
                headText: "Art & Design",
                price: "$39.28",
                title: "2024 Complete Bootcamp From Zero to Hero",
                iconList: lessonsIcon,
                textList: "2 Lessons",
                iconTime: watchIcon,
                testTime: "4h 30m",
                iconStar: starIcon,
            },
            {
                headImages:courseImage2 ,
                headText: "Art & Design",
                price: "$39.28",
                title: "Logo Design: From Concept to Presentation",
                iconList: lessonsIcon,
                textList: "2 Lessons",
                iconTime: watchIcon,
                testTime: "4h 30m",
                iconStar:starIcon,
            },
            {
                headImages: courseImage3,
                headText: "Art & Design",
                price: "$19.48",
                title: "Professional Ceramic Molding for Beginners",
                iconList: lessonsIcon,
                textList: "2 Lessons",
                iconTime: watchIcon,
                testTime: "4h 30m",
                iconStar: starIcon,
            },
        ],
    },
];

export default data;
