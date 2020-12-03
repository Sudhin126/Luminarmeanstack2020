import React from 'react';
import swal from 'sweetalert';
import Bank from './Bank';
import {withRouter}from 'react-router';

class Login extends React.Component{
    state={

        username:"",
        password:"",

    }
    static getAccountDetails() {

        let data = {
            sreedevi: { username: "sreedevi", password: "abc123", acno: 1001, balance: 50000 },
            test1: { username: "test1", password: "test1", acno: 1002, balance: 5000 },
            test2: { username: "test2", password: "test2", acno: 1003, balance: 6000 },
            test3: { username: "test3", password: "test3", acno: 1004, balance: 7000 },

        }
        return data;
    }




onUsernameChange=(event)=>{
this.setState({username:event.target.value});

}
onPasswordChange=(event)=>{
    this.setState({password:event.target.value});

}
onSubmit=(event)=>{
    event.preventDefault();
    let usname=this.state.username;
    let pwd=this.state.password;
    
    Bank.login(usname,pwd)
    .then(response=>{
    
    swal("login sucess!",response.data.message,"success");
    this.props.history.push("/home")
    })
    .catch(error=>{
     swal("login failed!", "Wrong Password!", "error");  

})



    // let data=Bank.getAccountDetails();
    // if (usname in data) {
    //    let password = data[usname]["password"];
      // if (pwd===password){
    //         localStorage.setItem("currentUser",usname);
    //         Bank.currentUser=usname;
    //         swal("login sucess!", "", "success");
    //    this.props.history.push("/home")
    //     } else {
    //         swal("login failed!", "Wrong Password!", "error");

    //     }

    // } else {
    //     swal("login failed!", "inavlid user...!", "error");

    // }


}


render(){
return(


    <div className="container">

        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <h1>WELCOME TO SBK BANK</h1><br/>
            </div>
            <div className="col-2"></div>

        </div>



        <div className="row">

            <div className="col-4"></div>
            <div className="col-4">

                <div className="jumbotron">
                    <h4>Login</h4>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="text" value={this.state.username} onChange={this.onUsernameChange} className="form-control" id="uname" aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone
                            else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password"value={this.state.password} onChange={this.onPasswordChange} className="form-control" id="pwd"/>
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
</form>
                </div>
            </div>
            <div className="col-4"></div>
        </div>


    </div>



  );
  }
  }
  export default withRouter(Login);