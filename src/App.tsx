import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} classNameName="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} classNameName="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div classNameName="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p classNameName="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
const Pesquisa = () => {
  return (
    <>
      <form action="javascript:void(0);">
        <input
          type="text"
          className="form-control add-task"
          placeholder="New Task..."
        />
      </form>
    </>
  )
}

const Filtro = () => {
    let lista = [
      "All",
      "Active",
      "Completed"
    ];
  return (
    <>
      {lista.map((nome, index) => 
      <li role="presentation" className="nav-item active-task">
        <a href='#' className='nav-link'>{nome}</a>
      </li>)}
    </>
  )
}

const ItensToDo = () => {
  let lista = [
    "Create theme",
    "Work on Wordpress",
    "Organize office main department",
    'Error solve in HTML template'
  ];
  return (
    <div className='todo-list'>
      {lista.map((nome, index) => 
      <div className='todo-item'>
        <div className='checker'>
          <span><input type='checkbox'/></span>
        </div>

        <span>{nome}</span>
        
        <a href="javascript:void(0);" className="float-right remove-todo-item">
          <i className="icon-close"></i>
        </a>
      </div>)}
    </div>
  )
}

const App = () => {
  return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="card card-white">
						<div className="card-body">
							<Pesquisa/>
							<ul className="nav nav-pills todo-nav">
								<Filtro/>
							</ul>
							<ItensToDo/>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default App
