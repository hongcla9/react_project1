import React, { Component } from 'react';
import Customer from './component/Customer'
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const styles = theme => ({
  root: {
  width: "100%",
  marginTop: theme.spacing.unit * 3,
  overflowX: "auto"
  },
  table: {
  minWidth: 1080
  }
  });
  

class App extends Component {

state = {
  customers:""
}
//api서버에 접근하여 데이터를 받아옴 
componentDidMount(){
  this.callApi()
  //받아서 state 설정 
  .then(res => this.setState({customers:res}))
  .catch(err => console.log(err));
}
callApi = async () => {
  const response = await fetch('/api/customers');
  const body = await response.json();
  return body;
}
render() {
return (
<div>
<Table>
<TableHead>
<TableRow>
<TableCell>번호</TableCell>
<TableCell>이미지</TableCell>
<TableCell>이름</TableCell>
<TableCell>생년월일</TableCell>
<TableCell>성별</TableCell>
<TableCell>직업</TableCell>
</TableRow>
</TableHead>
<TableBody>
{this.state.customers ? this.state.customers.map(c => {
return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
}) : ''}
</TableBody>
</Table>
</div>
);
}
}

export default withStyles(styles)(App);

