import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
	return (
		<div style={{marginTop: '100px', marginLeft: '400px'}}>
				<div>
					<label htmlFor='insertArea' style={{marginRight: '10px'}}>请输入内容</label>
					<Input 
						value={props.inputValue}
						placeholder='todo info'
						style={{width: '300px', marginRight: '10px'}}
						id='insertArea'
						onChange={props.handleInputChange}
					/>
					<Button 
						type="primary"
						onClick={props.handleBtnClick}
					>
						提交
					</Button>
				</div>
				<List
						style={{marginTop: '10px', marginLeft: '30px', width: '400px'}}
			      bordered
			      dataSource={props.list}
			      renderItem={(item, index) => (
			        <List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>
			      )}
			    />
			</div>
		)
};

export default TodoListUI;