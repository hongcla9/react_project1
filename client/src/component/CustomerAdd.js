import React from 'react';
import { post } from 'axios';

class CustomerAdd extends React.Component {
  

    constructor(props) {
     //생성자정의
        super(props);
        this.state={
            file : null,
            userName: '',
            birthday:'',
            gender:'',
            job:'',
            fileName: '' 
        }
this.handleFormSubmit = this.handleFormSubmit.bind(this)
this.handleFileChange = this.handleFileChange.bind(this)
this.handleValueChange = this.handleValueChange.bind(this)
this.addCustomer = this.addCustomer.bind(this)
}

handleFormSubmit(e) {
    e.preventDefault()
    this.addCustomer()
    .then((response) => {
    console.log(response.data);
    })
this.setState({
    file:null,
    userName:'',
    birthday:'',
    gender:'',
    job:'',
    fileName:''
})
    window.location.reload();
    }
    
    handleFileChange(e) {
    this.setState({
    file: e.target.files[0],
    fileName: e.target.value
    });
    }
    
    
    handleValueChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
    }
    


addCustomer = () => {
    const url = 'api/customers';
    const formData = new FormData();
    formData.append('image',this.state.file);
    formData.append('name',this.state.name);
    formData.append('birthday',this.state.birthday);
    formData.append('gender',this.state.gender);
    formData.append('job',this.state.job);
    //내가 보내고자하는 데이터가 멀티파트 폼 데이터다
    //전달하고자하는 데이터가 파일이 포함되어있을때 멀티파트 폼 데이터라고함 
    const config = {
        headers: {
            'content-type':'multipart/form-data'
        }
    }
   return post(url,formData,config);

}

render() {
    return(
        <form onSubmit={this.handleFormSubmit}>
             <h1>상품추가</h1>
             프로필이미지:<input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
             상품명:<input type="text" name="name" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
             사이즈:<input type="text" birthday="birthday" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
             상품코드:<input type="text" birthday="birthday" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
             재고:<input type="text" birthday="birthday" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
             입고날짜:<input type="text" birthday="birthday" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
             <button type="submit">추가하기</button>
        </form>
    )
}



}
export default CustomerAdd;