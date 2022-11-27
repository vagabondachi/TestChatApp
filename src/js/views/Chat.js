import React, { useEffect, useRef }from 'react';
import { useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



import ChatUserList from '../components/ChatUsersList';
import ViewTitle from '../components/shared/ViewTitle';
import ChatMessagesList from '../components/ChatMessagesList';
import {withBaseLayout} from '../layouts/Base';


import { subscribeToChat, subscribeToProfile } from '../actions/chats'; 

export default function Chat() {

    const { id } = useParams();
    const peopleWatchers = useRef({}); //reserve val between renderers
    const dispatch = useDispatch();
    const activeChat = useSelector(({chats}) =>  chats.activeChats[id])
    const joinedUsers = activeChat?.joinedUsers;

    useEffect(() => {
      const unsubFromChat = dispatch(subscribeToChat(id));
      return () => {
        unsubFromChat();
        unsubFromJoinedUsers();
      }
    }, [])

    useEffect(() => {
      joinedUsers && subscribeToJoinedUsers(joinedUsers);
    }, [joinedUsers])
  
    const subscribeToJoinedUsers = (jUsers) => {
      jUsers.forEach(user => {
        if(!peopleWatchers.current[user.uid]){
        peopleWatchers.current[user.uid] = dispatch(subscribeToProfile(user.uid))
    }
  })
}

    const unsubFromJoinedUsers = () => {
      Object.keys(peopleWatchers.current)
      .forEach(id => {
        peopleWatchers.current[id]()})
    }


    return (          
            <div className='chatchannel'>
            <ViewTitle text={`${activeChat?.name}`}/>
            <ChatMessagesList/>
            </div>     
      )
    }


