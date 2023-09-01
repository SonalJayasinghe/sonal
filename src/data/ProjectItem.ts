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
        imgUrl: ['./assets/hotelWeb/hotel1.png', './assets/hotelWeb/hotel2.png', './assets/hotelWeb/hotel3.png'],
        link: 'https://sonaljayasinghe.github.io/marinara-hotel/'
    },

    {
        title: "අයිඩි​යා - How to find an IDEA",
        discription: "Conducted for our fellow batch mates in ICT Batch 20/21",
        imgUrl: ['./assets/projectIdea/ideaImage1.jpg',],
        link: 'https://www.linkedin.com/posts/sonaljayasinghe_ict-idea-usjabrfas-activity-7093425718855954432-uiP9?utm_source=share&utm_medium=member_desktop'
    },

 

];