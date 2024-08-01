import './style.css'
import Trash from '../../assets/trash.png'

function Home() {
  

  return (
  
      <div className='container'>
        <form action="">
          <h1>Cadastro de usuários</h1>
          <input name='name'type='text'/>
          <input name='age' type='number' />
          <input name='email' type='email'/>
          <button type='button'>Cadastrar</button>
        </form>

        <div>
          <div>
            <p>Nome: </p>
            <p>Idade: </p>
            <p>E-mail: </p>
            <button>
              <img src={Trash}/>
            </button>
          </div>
        </div>
      </div>
      
  
  )
}

export default Home
