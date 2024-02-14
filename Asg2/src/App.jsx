import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [countries,setCountries]=useState([]);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    country: '',
    age: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [formValid, setFormValid] = useState(false);
  const fetchCountries=async()=>{
    const data=await fetch("https://restcountries.com/v3.1/all");
    const fetchCountries=await data.json();
    console.log(fetchCountries)
    setCountries(fetchCountries)
  }
  useEffect(()=>{
    fetchCountries()
  },[])
  const validateForm = () => {
    const emailIsValid = validateEmail(formData.email);
    const passwordIsValid = validatePassword(formData.password);
    const isFormValid =
      emailIsValid &&
      passwordIsValid &&
      formData.name.trim() !== '' &&
      formData.country.trim() !== '' &&
      formData.age.trim() !== '';
      setFormValid(isFormValid);
  };
  const handleChange = (e) => {
    setErrors({
      email: '',
      password: '',
    })
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateForm();
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailIsValid = validateEmail(formData.email);
    const passwordIsValid = validatePassword(formData.password);

    if (emailIsValid && passwordIsValid) {
      // Perform signup action
      console.log('Form submitted:', formData);
      const email=formData.email;
      alert("Form submitted for "+email)
      // Reset form fields
      setFormData({
        email: '',
        name: '',
        country: '',
        age: '',
        password: '',
      });
      setFormValid(false)
    }
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      const emailIsValid = validateEmail(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: emailIsValid ? '' : 'Please enter a valid email address.',
      }));
    } else if (name === 'password') {
      const passwordIsValid = validatePassword(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: passwordIsValid
          ? ''
          : 'Password must be at least 8 characters long.',
      }));
    }
  };
 
  return (
    <>
    <div className='mainContent'>
    
    <form action='submit' onSubmit={handleSubmit} noValidate>
    <h1>Sign Up</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' value={formData.email}
           onBlur={handleBlur}
          onChange={handleChange}/>
          
          {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' value={formData.name}
          onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <select name="country" id="" onChange={handleChange}>
          {
            countries.map((country)=>{
              return (
              <option value={country.name.common} 
              >{country.name.common} </option>
              )
            })
          }
        </select>
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="number" name='age' value={formData.age}
          onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name='password' value={formData.password}
          onBlur={handleBlur}
         onChange={handleChange}/>
           {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>
      <button type='submit' disabled={!formValid} style={{background:!formValid?"gray":"black"}}>Sign Up</button>
    </form>
    </div>
    </>
  )
}

export default App
