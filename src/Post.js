import React, {forwardRef} from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import InputOption from './InputOption';
const Post = forwardRef(({name, message, description, photoUrl }, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>

            </div>

            <div className="post__body">
               {message}
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="Grey"/>
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="Grey"/>
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="Grey"/>
                <InputOption Icon={SendOutlinedIcon} title="Send" color="Grey"/>
            </div>
        </div>
    )
}
)
export default Post
