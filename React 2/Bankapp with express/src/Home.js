import React from 'react';
import swal from 'sweetalert';
import Bank from './Bank';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    state={
dpUsername:"",
dpAmount:"",
wdUsername:"",
wdAmount:"",
balance:""
}
    onDeposit=(event)=>{
        event.preventDefault();
        let uname =this.state.dpUsername;
        let amt = Number(this.state.dpAmount);

        Bank.deposit(uname,amt)
        .then(response=>{
            this.setState({balance:response.data.balance});
            swal("Deposit Successful","success");
           
            })
            .catch(err=>{
             swal("Deposit failed!","User alreday exist!", "error");  
        
        })



        // let data = Bank.getAccountDetails();
        // //let deposit_id = document.querySelector("#deposit_id");
        // if (uname in data) {
        //     data[uname]["balance"]+=amt;
        //     let bal = data[uname]["balance"];
        //   //  deposit_id.textContent = "your available balance" + bal;
        //     //alert("available balance=" + data[uname]["balance"]);
        //     data[uname]["history"].push({
        //     typeOfTRansaction:"Credit",
        //    amount:amt})
        //    Bank.saveData();
        //     this.setState({balance:bal});
        //     swal("Deposit successful"+bal)
        // } else {
        //     swal("inavlid user...!");
        // }
    }

    
    onWithdraw=(event)=>{
        event.preventDefault();
        
        let uname =this.state.wdUsername
        let amt = Number(this.state.wdAmount);
        Bank.withdraw(uname,amt)
        .then(response=>{
            this.setState({balance:response.data.balance});
    
            swal("withdraw Successful","success");
           
            })
            .catch(err=>{
             swal("withdraw failed!","User alreday exist!", "error");  
        
        })

        




    //     let data = Bank.getAccountDetails();
    //    // let bal = document.querySelector("#bal")
    //    // let deposit_id = document.querySelector("#deposit_id");
    //     if (uname in data) {
    //         data[uname]["balance"] -= amt;
    //         let bal = data[uname]["balance"];
           
    //        data[uname]["history"].push({
    //         typeOfTRansaction:"Debit",
    //        amount:amt})
    //        Bank.saveData();
    //        this.setState({balance:bal});
    //         swal(amt + " withdraw from your Account", "Your Available balance is" + bal, "success");

    //     } else {
    //         swal("", "inavlid user...!", "error");
    //     }


    }
    dpUsernameChange=(event)=>{
        this.setState({
dpUsername:event.target.value
        })

    }
    dpAmountChange=(event)=>{
        this.setState({
            dpAmount:event.target.value
                    })

    }
    wdUsernameChange=(event)=>{
        this.setState({
            wdUsername:event.target.value
                    })

    }
    wdAmountChange=(event)=>{
        this.setState({
            wdAmount:event.target.value
                    })

                }
            

    render(){

return(

    <div className="container">
        Balance:{this.state.balance}
        <Link to="/history">History</Link>
    <div className="row">
        <div className="col-6">
            
       
            <div className="jumbotron">
            <form onSubmit={this.onDeposit}>
                <h3>Deposit</h3>

                <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input value={this.state.dpUsername} onChange={this.dpUsernameChange} type="text" className="form-control" id="uname" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone
                    else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Amount</label>
                    <input value={this.state.dpAmount} onChange={this.dpAmountChange}  type="text" className="form-control" id="amt"/>
                </div>
                <h2 id="deposit_id"></h2>

                <button type="submit" className="btn btn-primary">Deposit</button>
                </form>
            </div>
           
        </div>

        <div className="col-6">
      
            <div className="jumbotron">
            <form onSubmit={this.onWithdraw}>
                <h3>Withdraw</h3>

                <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input value={this.state.wdUsername} onChange={this.wdUsernameChange} type="text" className="form-control" id="uname" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone
                else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Amount</label>
                    <input value={this.state.wdAmount} onChange={this.wdAmountChange}  type="Text" className="form-control" id="amt1"/>
                </div>

                <h2 id="deposit_id"></h2>
                <button type="submit" className="btn btn-primary" onclick="Bank.withdraw()">Withdraw</button>
                </form>
            </div>
           
        </div>

    </div>




</div>




    

    

    );



    }
}


export default Home;