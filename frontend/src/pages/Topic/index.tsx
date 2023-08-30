import { Box } from "@mui/material/index";
import { useEffect, useState } from "react";
import HeaderProfile from "../../components/HeaderProfile/index";
import TopicList from "../../components/TopicList/index";


function TopicPage() {


    const topics =[
        {
            owner: {fullname: 'Pedro da Silva'},
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui impedit vitae quam incidunt placeat voluptates minima pariatur, et quas molestiae inventore modi dolores magnam iure praesentium similique laboriosam, reiciendis ',
            comments: 23,
            reposts: 45,
            likes: 30000,
            createdAt: '2023-08-01 19:23:43'
        },{
            owner: {fullname: 'lula infeliz de merda da Silva'},
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui impedit vitae quam incidunt placeat voluptates minima pariatur, et quas molestiae inventore modi dolores magnam iure praesentium similique laboriosam, reiciendis ',
            comments: 3,
            reposts: 2,
            likes: 35,
            createdAt: '2023-08-03 20:45:43'
        },{
            owner: {fullname: 'DjAzeitona'},
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui impedit vitae quam incidunt placeat voluptates minima pariatur, et quas molestiae inventore modi dolores magnam iure praesentium similique laboriosam, reiciendis ',
            comments: 45,
            reposts: 234,
            likes: 23234,
            createdAt: '2023-08-23 23:26:12'
        }
    ]

    const [profile, setProfile] = useState({});

    useEffect(() => {

        fetch('http://localhost:3000/profile')
        .then(res => res.json())
        .then(data => {
            setProfile(data);
        })

    }, [])

   return (
        <Box id="topic-page" display="flex" flexDirection="column" alignItems="center" gap={3}>
            <HeaderProfile user={profile} />

            <TopicList items={topics} />
        </Box>
    )  
}

export default TopicPage;