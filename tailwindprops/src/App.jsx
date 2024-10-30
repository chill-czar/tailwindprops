
import './App.css'
import Card from './components/Card'

function App() {

  let data = {
    name: 'chill_czar',
    channel: 'chai aur code'
  }
  let newArr = [1,2,3,4] 
  return (
    <>

      <h1 className='underline bg-blue rounded-50% font-bold border '>hello world </h1>
     
    <Card channel="chai aur code" name ="JIMMY" someobj = {data} someArr = {newArr} />
    {/* if passing through obj use destructuring obj and then use props.name to access the value of name in the obj  */}
    </>
  )
}

export default App
