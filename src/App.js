// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Post from './pages/blog';
import Button from "./components/ui/cta/button";
import EmployeeCard from './components/ui/card';
import { employeeData } from './data/employee/data';
import WelcomeUser from './components/ui/welcome';
// import Card from './components/ui/card';
// import profile from './assets/profile.jpeg';
// import images1 from './assets/images1.jpeg';
// import images2 from './assets/images2.jpeg';
import Login from './pages';
import Incremental from './components/ui/card/hocs';
import { cardStyle } from './components/ui/card/card';
import HoverIncremental from './components/ui/card/hocs_hover';

function App() {
  //used state
  const [marchant, setMarchant] = React.useState("buyer");

  return (
    <>
     <div style={cardStyle.container}> 

    <Incremental />
    </div>
    <div style={cardStyle.spacer}></div>
     <div style={cardStyle.container}>
    <HoverIncremental />
     </div>
    <div className="App">
        <h1>Hello guys</h1>
        {marchant === "buyer" ? (
          <Button color='white' backgroundColor='skyblue' title={'Buy now'} action={() => setMarchant("seller")}/>

        ) : (
          <Button color='white' backgroundColor='red' title={'Sell now'} action={() => setMarchant("buyer")}/>

        )}
        </div>
         <div style={{display:"flex"}}>
          {employeeData.map((user) => (
            <EmployeeCard
            key = {user.uiid}
            src = {user.picture.large}
            first={user.name.first}
            last = {user.name.last}
            role={user.role}
            data={user.uiid}
            />
          ))}
          </div>
        {/* <Card title ='laura pearson' word='Events Manager' imageSrc={profile} />
        <Card title ='kate Blanche' word='consultant'imageSrc={images1}/>
        <Card title ='rennes ' word='producer' imageSrc={images2}/> */}
    {/* </div> */}
    <div>< WelcomeUser name={'Micheal'}/> </div>
     {/* <Post/> */}
     <Login />
    </>
  );
}

export default App;