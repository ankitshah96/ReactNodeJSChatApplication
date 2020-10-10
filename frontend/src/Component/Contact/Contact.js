import React,{useState} from 'react';
import classes from './Contact.module.css';
const Contact = (props) => {
    <div className={classes.Contact}>
        <div className={classes.profileImage}>
        <profilePicture image={props.imageURL}></profilePicture>
        </div>
        <div className={classes.displayName}>
        {props.name}
        </div>
        <div className={classes.lastMessage} >
        {props.lastMessage}
        </div>
        <div className={classes.lastMessageDate} >
        {props.lastMessageDate}
        </div>
        
    </div>
}