import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChatInputStyle from './ChatInput.module.css'
class ChatInput extends Component{
    static propTypes={
        onSubmitMessage: PropTypes.func.isRequired,
    }
    state={
        message: '',
    }
    handleChange=(e) => {
        this.setState({
            message:e.target.value
        })
    }
    render(){
        return(
        <form action='.'
            onSubmit={ e=>{
                    e.preventDefault()
                    this.props.onSubmitMessage(this.state.message)
                    this.setState({message:''})
                }
            }
        >
            <br/>
            <textarea
                placeholder={'Enter message ...'}
                value={this.state.message}
                onChange= {this.handleChange}
                className={ChatInputStyle.inputBox}
            />
            <br/>
            <input type="submit" className={ChatInputStyle.button} value={'Send'}/>

        </form>
        )
    }
}
export default ChatInput