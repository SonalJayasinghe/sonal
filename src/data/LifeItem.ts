export interface LifeItem {
    title: string,
    discription:string,
    icon:string,
    year: string,
    status: string,
  }
  
  export const LIFE_ITEM: Array<LifeItem> = [
    {
        title: "Born",
        discription:"Born in Sunday, 25th of February 2001 in Colombo, Sri Lanka.",
        icon:"birthday",
        year: "2001.02.25",
        status: "Completed",
    },

    {
        title: "First Startup",
        discription:"Worked as a graphic designer at my own graphic design business - TALEX",
        icon:"business",
        year: "2016 - 2021",
        status: "Completed",
    },

    {
        title: "Undergraduate",
        discription:"Selected to University of Sri Jayewardenepura as an ICT Student",
        icon:"student",
        year: "2021 - 2025",
        status: "Pending",
    },

    {
        title: "New Journey",
        discription:"Gathering all of my small businesses under a new umbrella.",
        icon:"new",
        year: "2023 - Present",
        status: "Pending",
    },

    {
        title: "Death",
        discription:"Expected to die at the age of 60, without troubling others.",
        icon:"grave",
        year: "2061",
        status: "Not Completed",
    },
  
  ];