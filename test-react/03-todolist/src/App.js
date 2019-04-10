import React,{ Component,Fragment } from 'react'
import Item from './Item.js'

import './App.css'

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:["吃饭","睡觉","听歌"],
			val:''
		}
	}
	handleAdd(){
		/*
		this.setState({
			list:[...this.state.list,this.state.val],
			val:''
		})
		*/
		this.setState(perState=>({
			list:[...perState.this.state.val],
			val:''
		}))
	}
	handleChange(ev){
		/*
		this.setState({
			val:ev.target.value
		})
		*/
		const val = ev.target.value
		this.setState(()=>({
			val
		}))
	}
	handleDel(index){
		// console.log('000.0',index)
		// this.state.list.splice(index,1)
		const list = [...this.state.list]
		list.splice(index,1)
		/*
		this.setState({
			list
		})
		*/
		this.setState(()=>{
			list
		})
	}
	render(){
		// return <div><input/> <button>新增</button></div>
		// return <Fragment><input/> <button>新增</button></Fragment>
		return (
			<div className="App">
				<input onChange = {this.handleChange.bind(this)} value={this.state.val} />
				<button onClick={this.handleAdd.bind(this)}>新增</button>
				<ul>
					{
						this.state.list.map((item,index)=>{
							/*
							return (
								<li 
									key={index}
									onClick={this.handleDel.bind(this,index)}
								>
								{item}
								</li>
							)
							*/
							// return <Item key={index} content={item} list={this.state.list} index={index} />
							return <Item key={index} content={item} handleDel={this.handleDel.bind(this,index)} />
						})
					}
				</ul>
			</div>
		)
	}
}

export default App
