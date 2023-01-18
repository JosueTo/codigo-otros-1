// Se saca carpeta js de carpeta Assets. Dicha carpeta Assets se elimina.

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

/* Se cambia nombre de variables de n, b y l; a las variables name, blog, location. Esto
debido a que no brindaban la suficiente información de que eran. */
const divName = document.querySelector('.name'); // se coloca . al inicio de name para hacer referencia a la clase name en html.
const blog = document.querySelector('.blog'); // se cambia el # por un . para hacer referencia a una clase blog en el html.
// const location = document.querySelector('.location'); el selector no nos regresa nada, porque no existe clase location.

async function displayUser(username) { // se agrega el async
  divName.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  divName.textContent = '${data.name}';
  blog.textContent = '${data.blog}';
  // $l.textContent = '${data.location}'; no hacía referencia location.
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  divName.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);