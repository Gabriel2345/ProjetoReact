import './style.css'
import Trash from '../../assets/trash.png'

function Home() {

  const users = [{
    id: '',
    name: '',
    age:'',
    email
  }, {

  }]

  return (

    <div className='container'>
      <form action="">
        <h1>Cadastro de usuários</h1>
        <input name='name' type='text' />
        <input name='age' type='number' />
        <input name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
            <button>
              <img src={Trash} />
            </button>
          </div>
        </div>
      ))}

    </div>


  )
}

export default Home
