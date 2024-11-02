import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import Transaction from './pages/Transaction'
import Messages from './pages/Messages'
import Settings from './pages/Settings'
import HelpSupport from './pages/HelpSupport'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="transactions" element={<Transaction />} />
                    <Route path="messages" element={<Messages />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="support" element={<HelpSupport />} />
                </Route>
                <Route path="login" element={<div>this is a login page</div>} />
            </Routes>
        </Router>
    )
}

export default App
