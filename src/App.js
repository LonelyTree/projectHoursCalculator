import { CompletedProjects } from './views/completedProjects'
import { CurrentProjects } from './views/currentProjects'
function App () {
  return (
    <div>
      <div className='current'>
        <CurrentProjects />
      </div>
      <div className='completed'>
        <CompletedProjects />
      </div>
    </div>
  )
}

export default App
