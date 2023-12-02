import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});




// .main-nav{
//   display: grid;
//   grid-template-rows: 50px;
//   border-radius: 12px;
//   background-color: rgb(27, 25, 25);
//   margin-bottom: 42px;
// }
// .main-nav ul{
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }
// .main-nav ul li{
//   list-style: none;
//   margin: 20px;
// }

// .main-nav ul div{
//   display: flex;
// }
// a{
//   color:white;
//   text-decoration: none;
//   font-size: 21px;
// }
// a:hover{
//   color: blue;
// }

// .register,.login,.edituser,.addproduct{
//   min-height: 450px;
//   display: grid;
//   justify-content: center;
//   align-items: center;
// }

// .register form,.edituser form,.addproduct form{
//   background-color: #fff;
//   width:260px;
//   height:400px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 20px;
// }
// .login form{
//   background-color: #fff;
//   width:260px;
//   height:300px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }

// .register form input,.login form input,.edituser form input,.addproduct form input{
//   margin:8px;
//   padding:4px;
//   width:220px;
//   height:42px;
//   text-indent: 5px;
// }

// .register form button,.login form button,.edituser form button,.addproduct form button{
//   width:200px;
//   height:36px;
//   border-radius: 10px;
//   background-color: #0f489e;
//   color:white;
//   font-size: 16px;
//   font-weight: 800;
//   text-transform: uppercase;
//   margin: 3px;
// }

// input[type="file"]{
//   width:180px;
//   border:1px solid rgb(131, 129, 129);
// }


// .fp{
//   color:blue;
//   text-decoration: underline;
// }

// .dashboard{
//   display: flex;
// }
// .dashboard .user-detail{
//   background-color: black;
//   width:800px;
//   height:400px;
//   margin:20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 40px;
//   margin-left:100px;
//   margin-top:40px;
// }
// .user-detail h1{
//   color: aquamarine;
// }
// .user-detail h3{
//   font-size: 23px;
//   color:white;
// }
// .user-detail h3 span{
//   font-size: 23px;
//   color:rgba(0, 255, 255, 0.766);
//   margin-right:17px;
// }

// .dashboard-ul div{
//   display: flex;
//   flex-direction: column;
//   width:130px;
//   height:200px;
//   border-radius: 20px;
//   justify-content: center;
//   align-items: center;
//   background-color: black;
//   margin-top:92px;
//   margin-left:8px;
// }
// .dashboard-ul div a{
//   margin-top: 9px;
//   font-size: 19px;
//   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
// }

// .adminmenu,.order{
//   display: flex;
// }
// .adminmenu table{
//   display: grid;
//   background-color: rgb(56, 56, 92);
//   width:800px;
//   grid-template-columns: repeat(autofit,minmax(200,1fr));
//   justify-content: center;
//   min-height: 430px;
//   margin-left: 100px;
//   margin-top:52px;
// }

// .main{
//   display: flex;
// }

// .action1{
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 12px;
//   border-radius: 12px;
//   background-color: green;
//   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//   font-size: 18px;
//   width:100px;
//   text-align: center;
// }
// .action2{
//   border-radius: 12px;
//   background-color: rgb(128, 0, 0);
//   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//   font-size: 18px;
//   width:100px;
//   height:40px;
//   text-align: center;
// }

// .adminmenu table thead{
//   margin-left:45px;
//   color:white;
// }
// .adminmenu table thead tr th {
//   padding:18px;
// }

// .action-btn{
//   padding-left: 190px;
// }

// .tbody-child td{
//   padding: 17px;
//   border:2px solid white;
// }

// .parent{
//   display: grid;
//   grid-template-rows: 260px 260px;
//   grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
//   grid-gap: 20px;
//   place-items: center;
// }
// .child{
//   text-align: center;
// }
// .child h3 span{
//   background-color: #0e739f;
// }
// .child button{
//   background-color: yellow;
//   width:100px;
//   height:35px;
//   font-size: 15px;
//   border-radius: 12px;
//   margin: 4px;
// }

// .productdetail{
//   display: flex;
// }
// .productdetail img{
//   margin:18px;
// }
// .detailchild{
//   margin:100px;
// }
// .detailchild h2 span{
//   margin-right: 12px;
//   color: rgb(42, 110, 110);
//   font-size: larger;
// }
// .detailchild button{
//   background-color: green;
//   height: 40px;
//   width:200px;
//   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//   font-size: 24px;
//   margin-top: 12px;
// }

// .cartpage h2{
//   margin-left: 12px;
//   margin-top: 12px;
//   color: rgb(74, 151, 151);
// }
// .cartpage h2 p{
//   color:rgb(205, 159, 159);
// }

// .parent-cart{
//   display: flex;
//   min-height: 430px;
// }
// .parent-cart .first{
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 24px;
// }
// .parent-cart .second{
//   margin-left: 260px;
// }
// .first button{
//    background-color: red;
//    height: 30px;
//    width:200px;
//    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//    font-size: 22px;
// }
// .parent .second h2{
//   margin-bottom: 9px;
// }
// .parent .second p{
//   margin-bottom: 4px;
// }
// .parent .second h4{
//   margin-top: 9px;
// }
// .parent-cart .second div button{
//   margin-top: 9px;
//   background-color: yellow;
//   width:160px;
//   height:26px;
//   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//   font-size: 17px;
// }

// .order table{
//   display: grid;
//   /* background-color: rgb(9, 77, 149); */
//   /* grid-template-rows: 100px; */
//   width:800px;
//   grid-template-columns: repeat(autofit,minmax(200,1fr));
//   justify-content: center;
//   min-height: 420px;
//   margin-left:80px;
//   margin-top: 52px;
// }
// .order table tbody tr td{
//   border:2px solid white;
//   padding:12px;
//   margin-top:-12px;
// }


// .order table thead tr th{
//   padding: 18px;
// }