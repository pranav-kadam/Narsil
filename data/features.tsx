import {HandIcon, Pencil1Icon, Pencil2Icon, RocketIcon} from "@radix-ui/react-icons";
import {Handshake} from "lucide-react";

export const features = [
    {
        title: "Fast and Reliable",
        description: "Our Optima AI ensures rapid response times and minimal downtime. Our dedicated support team is here to assist you 24/7.",
        icon: <RocketIcon className="w-6 h-6"/>,
    },
    {
        title: "Customizable",
        description:"Optima ERP is designed to adapt to your business. Get real-time business insights and actions at your fingertips",
        icon: <Pencil2Icon className="w-6 h-6"/>,
    },
    {
        title: "User Friendly",
        description: "Built with a simple and intuitive interface, Optima ERP empowers teams of all technical levels to navigate with ease.", 
        icon: <Handshake className="w-6 h-6"/>,
    },
];