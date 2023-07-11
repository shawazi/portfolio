import { useEffect, useState, React } from 'react';
import  styled  from '@emotion/styled';

const Home = () => {

  const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  padding-top: 7%; 
  flex-direction: row; 
  border: 2px solid black;
  `;

  const Div = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  `

  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch("/api/items")
  //     .then((res) => res.json())
  //     .then((data) => setItems(data))
  // }, []);

  return (
    <Div>
      <h1>Test Data</h1>
      <p>TESTING</p>
      <h3> 👨‍💻 Technologies 💻 </h3>
      <Main>
        <a href="https://solidity.readthedocs.io/" target="_blank"><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg"
          alt="Solidity" height="30" width="42" /></a>
        <a href="https://www.linux.org/" target="_blank"><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          height="30" width="42" alt="Linux Tux" /></a>
        <a href="https://www.ubuntu.com/" target="_blank"><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
          height="30" width="42" alt="ubuntu logo" /></a>
        <a href="https://git-scm.com/" target="_blank"><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          height="30" width="42" alt="Git" /></a>
        <a href="https://github.com/" target="_blank"><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          height="30" width="42" alt="GitHub" /></a>
        <a href="https://code.visualstudio.com/" target="_blank"><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          height="30" width="42" alt="vscode" /></a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
          target="_blank"><img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            height="30" width="42" alt="html5" /></a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"
          target="_blank"><img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            height="30" width="42" alt="css3" /></a>
        <a href="https://getbootstrap.com/" target="_blank"><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
          height="30" width="42" alt="bootstrap" /></a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"><img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            height="30" width="42" alt="JavaScript" /></a>
        <a href="https://reactjs.org/" target="_blank"><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          height="30" width="42" alt="react" /></a>
        <a href="https://nodejs.org/" target="_blank"><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          height="30" width="42" alt="nodejs" /></a>
        <a href="https://www.npmjs.com/" target="_blank"><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
          height="30" width="42" alt="npm" /></a>
        <a href="https://expressjs.com/" target="_blank"><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          height="30" width="42" alt="express" /></a>
        <a href="https://www.python.org/" target="_blank"><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          height="30" width="42" alt="python" /></a>
        <a href="https://www.djangoproject.com/" target="_blank"><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
          height="30" width="42" alt="django" /></a>
        <a href="https://www.postgresql.org/" target="_blank"><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          height="30" width="42" alt="postgresql" /></a>
        <a href="https://www.mysql.com/" target="_blank"><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          height="30" width="42" alt="mysql" /></a>
        <a href="https://www.mongodb.com/" target="_blank"><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          height="30" width="42" alt="mongodb" /></a>
        <a href="https://www.docker.com/" target="_blank"><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          height="30" width="42" alt="docker" /></a>
        <a href="https://aws.amazon.com/" target="_blank"><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
          height="30" width="42" alt="amazonwebservices" /></a>
      </Main>
    </Div>
  )
}

export default Home