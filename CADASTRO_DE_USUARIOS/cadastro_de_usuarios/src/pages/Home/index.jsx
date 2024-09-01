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
        <input placeholder='Nome' name='name' type='text' />
        <input placeholder='Idade' name='age' type='number' />
        <input placeholder='Email' name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
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
