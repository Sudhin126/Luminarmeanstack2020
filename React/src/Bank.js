import React from 'react'
import axios from 'axios';

const baseurl="http://localhost:4000";

    let data = {
        sreedevi:{username: "sreedevi", password: "abc123", acno: 1001, balance: 50000,history:[]},
        test1:{username: "test1", password: "test1", acno: 1002, balance: 5000,history:[]},
        test2:{username: "test2", password: "test2", acno: 1003, balance: 6000,history:[]},
        test3:{username: "test3", password: "test3", acno: 1004, balance: 7000,history:[]},

    };
    let newData=localStorage.getItem("data");
    if(newData){
        data=JSON.parse(newData);
      
    }
    
    class Bank extends React.Component{
    static currentUser="";  
    
    
    static getUser(){
 return localStorage.getItem("currentUser");
    } 
    static deleteUser(username){
        delete data[username];
    }
    static saveData(){
        localStorage.setItem("data",JSON.stringify(data));
    } 
   
    
    static getAccountDetails(){
    return data;
    }
static setCurrentUser(usname){
localStorage.setItem("currentUser",usname);

}

static addUser(username,password,acno){
data[username]={username,password,acno,history:[],balance:0};
Bank.saveData();
}

static getUsers(){
    return data;
}

static getHistory(){
    return data[Bank.getUser()].history;
}
//static getUser(){
  //  return data[Bank.currentUser];

//}

static login(username,password){
return axios.post(baseurl+"/users/login",{
username,
password
},{withCredentials:true});

}


static register(username,password,confirmPassword,acno){
    return axios.post(baseurl+"/users/register",{
    username,
    password,
    confirmPassword,
    acno
    });
    
    }
    
static deposit(username,amount){
    return axios.post(baseurl+"/users/deposit",{
    username,
    amount
    },{withCredentials:true});
    
    }
    static withdraw(username,amount){
        return axios.post(baseurl+"/users/withdraw",{
        username,
        amount
        },{withCredentials:true});
        
        }
        static history(){
            return axios.get(baseurl+"/users/transaction-history",
            
            {withCredentials:true});
            
            }
    
    }
export default Bank;