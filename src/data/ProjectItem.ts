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
        imgUrl: ['src/assets/hotelWeb/hotel1.png', 'src/assets/hotelWeb/hotel2.png', 'src/assets/hotelWeb/hotel3.png'],
        link: 'https://sonaljayasinghe.github.io/marinara-hotel/'
    },

    {
        title: "අයිඩි​යා - How to find an IDEA",
        discription: "Conducted for our fellow batch mates in ICT Batch 20/21",
        imgUrl: ['src/assets/projectIdea/ideaImage1.jpg',]
    },

 

];