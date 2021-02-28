import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import AddCategory from './components/admin/AddCategory'
import AddProduct from './components/admin/AddProduct'
import AdminDashboard from './components/admin/AdminDashboard'
import AdminRoute from './components/admin/AdminRoute'
import Dashboard from './components/admin/Dashboard'
import PrivateRoute from './components/admin/PrivateRoute'
import Home from './components/core/Home'
import Shop from './components/core/Shop'
import Signin from './components/core/Signin'
import Signup from './components/core/Signup'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/signin" component={Signin}></Route>
        <Route path="/signup" component={Signup}></Route>
        <PrivateRoute path="/user/dashboard" component={Dashboard} />
        <AdminRoute path="/admin/dashboard" component={AdminDashboard}></AdminRoute>
        <AdminRoute path="/create/category" component={AddCategory}></AdminRoute>
        <AdminRoute path="/create/product" component={AddProduct}></AdminRoute>
      </Switch>
    </HashRouter>
  )
}

export default Routes
