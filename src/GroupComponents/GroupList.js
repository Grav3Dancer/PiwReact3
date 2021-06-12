import React, { useEffect, useState } from 'react';
import Group from "./Group";
import {getAllGroups} from "../Firebase";

function GroupList(props) {

    const [searchedList, setSearchedList] = useState(props.ListOfGroups);

    function formatTags(elem)
    {
        elem.tags = elem.tags.toLowerCase().split(" ");
    }

    useEffect(()=>{
        const getData = async () => {
            const groupsData = await getAllGroups();

            let groupsArray = [];

            groupsData.forEach((doc) => {
                groupsArray.push(doc.data());
            });
            groupsArray.forEach(formatTags);
            props.setGroups(groupsArray);

        };

        getData();
    }, []);

    useEffect(() => {
        setSearchedList(
            props.ListOfGroups.filter((group) => {

                if (props.tagToSearchFor==="" && props.descToSearchFor===""){
                    return group;
                }

                if (group.tags.includes(props.tagToSearchFor.toLowerCase()) && props.tagToSearchFor !==""){
                    return group;
                }

                if (group.desc.toLowerCase().split(" ").some(r=> props.descToSearchFor.toLowerCase().split(" ").includes(r)) && props.descToSearchFor !==""){
                    return group;
                }
            })
        );
    }, [props.tagToSearchFor, props.descToSearchFor, props.ListOfGroups]);

    useEffect(()=>{
        props.setFoundGroups(searchedList.length);
    },[searchedList]);

    return (
        <div>
            {searchedList.map((group) => (
                <Group key={group.name} name={group.name} size={group.size} username={group.username} desc={group.desc} tags={group.tags} />
            ))}
        </div>
    );
}

export default GroupList;