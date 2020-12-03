import React from 'react'
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    hidden: {
    display: 'none'
    }
    });

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
    this.props.stateRefresh();
    })

this.setState({
    file:null,
    userName:'',
    birthday:'',
    gender:'',
    job:'',
    fileName:''
})
   
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
handleClickOpen() {
    this.setState({
    open: true
    });
    }
    
    handleClose() {
    this.setState({
    file: null,
    userName: '',
    birthday: '',
    gender: '',
    job: '',
    fileName: '',
    open: false
    })
    }
    render() {
    const { classes } = this.props;

    return (

    <div>
    <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
    고객 추가하기
    </Button>
    <Dialog open={this.state.open} onClose={this.handleClose}>
    <DialogTitle>상품 추가</DialogTitle>
    <DialogContent>
    <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} />
    <label htmlFor="raised-button-file">
    <Button variant="contained" color="primary" component="span" name="file">
    {this.state.fileName === ''? "프로필 이미지 선택" : this.state.fileName}
    </Button>
    </label><br/>
    <TextField label="상품명" type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br/>
    <TextField label="상품번호" type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br/>
    <TextField label="사이즈" type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br/>
    <TextField label="색상" type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br/>
    <TextField label="재고" type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br/>
    <TextField label="입고날짜" type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br/>
    </DialogContent>
    <DialogActions>
    <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
    <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
    </DialogActions>
    </Dialog>
    </div>
    )
    }
    }
export default withStyles(styles)(CustomerAdd)
    