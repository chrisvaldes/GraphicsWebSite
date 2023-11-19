import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import loginIcon from "../../images/loginIcon.jpg"

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [invalidCredentials, setInvalidCredentials] = useState(false); // Nouvel état pour vérifier les informations d'identification invalides

  const navigate = useNavigate();

  useEffect(() => {
    if (email !== '' && password !== '') {
      axios
      
        .post('http://localhost:8082/', { email, password })
        .then(res => {
          setUsers(res.data); 
          setInvalidCredentials(res.data.length <= 0); // Vérifier si les informations d'identification sont valides
        })
        .catch(err => console.log(err));
    }
  }, [email, password]); // Ajouter les dépendances email et password à useEffect

  function handleSubmit(event) {
    event.preventDefault(); 
    if (users.length > 0) {  
      console.log(users[0].user_type)
      console.log(users)
      if( users[0].user_type === "user"){
        navigate('/Home');
      }else{
        navigate("/AdminHome")
      }
    } else {
      setInvalidCredentials(true); // Définir les informations d'identification invalides pour afficher le message d'erreur
      <loginPageCard color = "red"/>
    }
  }

  return (
    <div className="container" style={{ marginTop: '10rem' }}>
      <div className="row">
        <div className="col m10 s12 offset-m1">
          <div className="card horizontal">
            <div className="card-image" style={{background :  `url(${loginIcon})`, backgroundSize : "cover", backgroundPosition : "center"}}>
            </div>
            <div className="card-stacked hoverable">
              <div className="card-content">
                <div className="card-title">
                  <h4>Login</h4>
                </div>
                <div className={`form-group `}>
                  <label htmlFor="email">
                    <i className="material-icons">message</i>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    style={{ padding: '0 7px' }}
                  />
                </div>
                <div className={`form-group`}>
                  <label htmlFor="password" class="red">
                    <i className="material-icons">lock</i>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="form-control"
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                    style={{ padding: '0 7px' }}
                  />
                </div>
                {invalidCredentials && <p className="invalid-message" style={{color : "red"}}>Invalid email or password</p>}
                <div>
                  <p className="card-text" style={{ margin: '2rem 0' }}>
                    Don't have an account? <Link to="/RegisterPage">Register now</Link>
                  </p>
                </div>
                <div className="card-action">
                  <button onClick={handleSubmit} class="btn btn-primary waves-effect waves-light">
                    Login Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../style/loginPage.css';
// import axios from 'axios';

// function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [users, setUsers] = useState([]);
//   const [invalidCredentials, setInvalidCredentials] = useState(false); // Nouvel état pour vérifier les informations d'identification invalides

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (email !== '' && password !== '') {
//       axios
//         .post('http://localhost:8082/', { email, password })
//         .then(res => {
//           setUsers(res.data); 
//           setInvalidCredentials(res.data.length <= 0); // Vérifier si les informations d'identification sont valides
//         })
//         .catch(err => console.log(err));
//     }
//   }, [email, password]); // Ajouter les dépendances email et password à useEffect

//   function handleSubmit(event) {
//     event.preventDefault();
//     if (users.length > 0) {
//       navigate('/AdminHome');
//     } else {
//       setInvalidCredentials(true); // Définir les informations d'identification invalides pour afficher le message d'erreur
//     }
//   }

//   return (
//     <div className="container" style={{ marginTop: '10rem' }}>
//       <div className="row">
//         <div className="col m10 s12 offset-m1">
//           <div className="card horizontal">
//             <div className="card-image"></div>
//             <div className="card-stacked hoverable">
//               <div className="card-content">
//                 <div className="card-title">
//                   <h4>Login</h4>
//                 </div>
//                 <div className={`form-group `}>
//                   <label htmlFor="email">
//                     <i className="material-icons">message</i>
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="form-control"
//                     id="email"
//                     onChange={e => setEmail(e.target.value)}
//                     style={{ padding: '0 7px' }}
//                   />
//                 </div>
//                 <div className={`form-group`}>
//                   <label htmlFor="password">
//                     <i className="material-icons">lock</i>
//                   </label>
//                   <input
//                     type="password"
//                     placeholder="password"
//                     className="form-control"
//                     id="password"
//                     onChange={e => setPassword(e.target.value)}
//                     style={{ padding: '0 7px' }}
//                   />
//                 </div>
//                 {invalidCredentials && <p className="invalid-message" style={{color : "red"}}>Invalid email or password</p>}
//                 <div>
//                   <p className="card-text" style={{ margin: '2rem 0' }}>
//                     Don't have an account? <Link to="/RegisterPage">Register now</Link>
//                   </p>
//                 </div>
//                 <div className="card-action">
//                   <button onClick={handleSubmit} className="btn btn-primary">
//                     Login Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;