import Link from "next/link"
import MainContainer from "../components/MainContainer"

function Users({ users }) {
  return (
    <MainContainer keywords={'user page'}>
      <h3>Список всех users:</h3>
      <ul>
        {users.map(user =>
          <li key={users.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        )}
      </ul>
    </MainContainer>
  )
}

export default Users

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const users = await response.json()
  return {
    props: { users }, // will be passed to the page component as props
  }
}