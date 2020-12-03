import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
//customerclass를 react의 컴포넌트 형태로 정의한다 일종의 라이브러리이자 클래스
class Customer extends React.Component
{
    //항상 수행되는 함수
render() {
    return ( 
       <TableRow>
           <TableCell>{this.props.id}</TableCell>
           <TableCell><img src={this.props.image} alt="profile"/></TableCell>
           <TableCell>{this.props.name}</TableCell>
           <TableCell>{this.props.birthday}</TableCell>
           <TableCell>{this.props.gender}</TableCell>
           <TableCell>{this.props.job}</TableCell>
       </TableRow>
    )
}
}
 
export default Customer;