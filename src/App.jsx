import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import expenseData from '../expenseData'

// Static imports (always visible)
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

// Lazy imports (only when route matches)
const ExpenseForm = lazy(() => import('./components/ExpenseForm'))
const ExpenseTable = lazy(() => import('./components/ExpenseTable'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  const [expense, setExpense] = useLocalStorage('expense', {
    title: '',
    category: '',
    amount: '',
  })
  const [expenses, setExpenses] = useLocalStorage('expenses', expenseData)
  const [editingRowId, setEditingRowId] = useLocalStorage('editingRowId', '')

  return (
    <Router>
      <Header />
      {/* Main Content */}
      <main className='app-main'>
        {/* Sidebar */}
        <Sidebar />
        <Suspense fallback={<div className='p-6 text-center'>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route
              path='/add'
              element={
                <ExpenseForm
                  expense={expense}
                  setExpense={setExpense}
                  setExpenses={setExpenses}
                  editingRowId={editingRowId}
                  setEditingRowId={setEditingRowId}
                />
              }
            />
            <Route
              path='/show'
              element={
                <ExpenseTable
                  expenses={expenses}
                  setExpenses={setExpenses}
                  setExpense={setExpense}
                  setEditingRowId={setEditingRowId}
                />
              }
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  )
}

export default App
