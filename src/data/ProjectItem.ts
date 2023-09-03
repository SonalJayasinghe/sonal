import img_Idea from '../assets/projectIdea/ideaImage1.jpg';
import img_Hotel_Marinara1 from '../assets/hotelWeb/hotel1.png';
import img_Hotel_Marinara2 from '../assets/hotelWeb/hotel2.png';
import img_Hotel_Marinara3 from '../assets/hotelWeb/hotel3.png';


export interface ProjectItem {
    title: string,
    discription: string,
    link?: string,
    imgUrl: string[];
}

export const PROJECT_ITEM: Array<ProjectItem> = [

    {
        title: "Marinara Hotel",
        discription: "First & SAMPLE hotel website developed using React and TS",
        imgUrl:[img_Hotel_Marinara1,img_Hotel_Marinara2,img_Hotel_Marinara3],
        link: 'https://sonaljayasinghe.github.io/marinara-hotel/'
    },

    {
        title: "අයිඩි​යා - How to find an IDEA",
        discription: "Conducted for our fellow batch mates in ICT Batch 20/21",
        imgUrl: [img_Idea],
        link: 'https://www.linkedin.com/posts/sonaljayasinghe_ict-idea-usjabrfas-activity-7093425718855954432-uiP9?utm_source=share&utm_medium=member_desktop'
    },

 

];