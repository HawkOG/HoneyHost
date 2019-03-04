import React from 'react'
import ReactDOM from 'react-dom'
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import Style from '../public/css/style.css'
import Fonts from '../public/css/fonts.css'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Products from './components/Pages/Products'
import Contact from './components/Pages/Contact'
import Menu from './components/Menu'
import { Switch, Route, Link, HashRouter , Router } from 'react-router-dom'
import axios from 'axios'

ReactDOM.render(
<HashRouter>
<Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/products" component={Products}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/menu" component={Menu}/>
</Switch>
</HashRouter>,document.getElementById('app'))


// <div>
//     <Navbar/>
//     <Intro/>
//     <AboutMe source="http://gintarinismedus.web-training.lt/api/naujienos?_format=json"/>
//     <Content />
//     <Footer />
// </div>