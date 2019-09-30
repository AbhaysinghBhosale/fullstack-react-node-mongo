import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button } from 'reactstrap';
import ReactTable from 'react-table';
import UserService from '../../services/UserService';
import 'react-table/react-table.css';

class Users extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    this.getUsers();
  }

  getUsers = () => {
    UserService.getUsers().then((response) => {
      if(response.status && response.data){
        this.setState({users: response.data.users})
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  handleDelete(user){
    console.log(user)
  }

  renderUsers = () => {
    return (
      <ReactTable
        data={this.state.users}
        columns= {
          [
            { Header: 'Firstname', accessor: 'firstname'}, 
            { Header: 'Lastname', accessor: 'lastname'},
            { Header: 'Email', accessor: 'email'},
            { Header: 'Phone', accessor: 'phone'},
            { Header: 'Action', accessor: 'action', Cell: row => (
              <Button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(row.original)}><i className="fa fa-trash"></i></Button>
            )}
          ]
        }
        showPagination = {true}
        defaultPageSize = {10}
        sortable = {true}
        resizable = {true}
        filterable= {true}
      />
    )
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                {this.renderUsers()}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;
