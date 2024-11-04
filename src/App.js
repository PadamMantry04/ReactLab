import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
// import Greet from './components/Greet.js'
// import Welcome from './components/Welcome.js'
// import Hello from './components/Hello.js'
// import Message from './components/Message.js'
// import Increment from './components/increment.js'
// import MessageClick from './components/ClickMessage.js'
// import Parent from './components/ParentComponent.jsx'
// import UserGreeting from './components/UserGreeting.js'
// import UserLists from './components/UserLists.jsx';
// import StyleSheet from './components/StyleSheet.jsx';
// import PureComponent from './components/PureComponent.js';
// import ParentComponent from './components/ParentComponent.js';
// import RefsComp from './components/RefsComp.js';
// import Portals from './components/Portals.js'
// import Hero from './components/Hero.js';
// import ErrorBoundary from './components/ErrorBoundary.js';
// import ClicHandler from './components/ClicHandler';
// import HoverHandler from './components/HoverHandler';
import ClickHandlerRenderProps from './components/ClickHandlerRenderProps';
import HoverHandlerRenderProps from './components/HoverHandlerRenderProps';
import RenderProps from './components/RenderProps';


function App() {
  return (
    <div className="App">
      <RenderProps 
        render={(count,incrementCount)=>(
          <ClickHandlerRenderProps count={count} incrementCount={incrementCount}/>
        )}
      />
      <RenderProps 
        render={(count,incrementCount)=>(
          <HoverHandlerRenderProps count={count} incrementCount={incrementCount}/>
        )}
      />
      {/* <ErrorBoundary>
      <Hero heroname={"Batman"} />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroname={"Superman"} />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroname={"Joker"} />
      </ErrorBoundary> */}
      {/* <RefsComp/> */}
      {/* <Portals/> */}
      {/* <ParentComponent /> */}
      {/* // <StyleSheet /> */}
      {/* <UserLists /> */}
      {/* <UserGreeting /> */}
      {/* <Parent /> */}
      {/* <MessageClick /> */}
      {/* <Increment /> */}
      {/* <Message /> */}
      {/* <Greet name="Arijeet"/>
      <Greet name="Shubh"/>
      <Greet name="Anmol"/> */}
    </div>
  );
}

export default App;
