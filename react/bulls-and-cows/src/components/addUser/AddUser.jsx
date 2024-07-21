import './AddUser.scss';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function AddUser({children, add}) {

  const [formData,setFormData] = useState({fullName:'',email:'',
                                            nick:'',phone:'',
                                            gender:'',role:''});
  const navigate = useNavigate();

  const handleChange = e => setFormData({...formData,
                                   [e.target.name]: e.target.value});

  function onSubmit(e) {

    e.preventDefault();

    /* if (e.target.checkValidity()) { */

      add(formData);
      setFormData({fullName:'',email:'',
                    nick:'',phone:'',
                    gender:'',role:''});
      navigate('/');

    /* } */

  }

    console.log(formData)

    return (
      <div className="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2 px-5 addUser">
          
        {children}

          {/* noValidate - removes original HTML validation, 
              pay attention that here in React it is written noValidate
              and not novalidate as in plain HTML */}
          <form className="fs-3" onSubmit={onSubmit} /* noValidate */  >
          
            <div className="form-group row">
                <div className="opacity-0 text-danger" >
                    The Name or the Nick already exists!
                </div>
            </div>
            <div className="form-group row mb-2">
              <label className="col-form-label col-12 col-lg-3" htmlFor="fullName">Name:</label>
              <div className="col-12 offset-0 col-lg-8 offset-lg-1">

                  <input className="form-control fs-3" type="text" name="fullName" id="fullName" 
                        required onChange={handleChange} value={formData.fullName}  />


                  <div className="invalid-feedback">You should enter a full name!</div>
              </div>
            
            </div>
            <div className="form-group row mb-2">
              <label className="col-form-label col-12 col-lg-3" htmlFor="email">Email:</label>
              <div className="col-12 col-lg-8 offset-lg-1">

                  <input className="form-control fs-3" type="email" name="email" id="email" 
                           required   onChange={handleChange}     value={formData.email}
                           pattern="^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,4})+$"
                           />

                  <div className="invalid-feedback">You should enter a valid email!</div>
              </div>
            </div>
            
            <div className="form-group row mb-2">
              <label className="col-form-label col-12 col-lg-3" htmlFor="nick">Nick:</label>
              <div className="col-12 col-lg-8 offset-lg-1" >

                  <input className="form-control fs-3" type="text" name="nick" id="nick"
                           required  onChange={handleChange}  value={formData.nick} />
                  <div className="invalid-feedback">You should supply a nickname!</div>

              </div>
            </div>
            <div className="form-group row mb-2">
              <label className="col-form-label col-12 col-lg-3" htmlFor="phone">Phone:</label>
              <div className="col-12 col-lg-8 offset-lg-1">

                  <input className="form-control fs-2" type="tel" name="phone" id="phone"
                          onChange={handleChange}  value={formData.phone} />

              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-12 col-lg-3" htmlFor="gender">Gender:</label>
              <div className="col-12 col-lg-8 offset-lg-1">

                  <select className="form-control fs-4" name="gender" id="gender"
                             onChange={handleChange}  value={formData.gender}>
                    <option value="">-- Choose gender --</option>
                    <option value="f">Female</option>
                    <option value="m">Male</option>
                    <option value="">Not telling ya</option>
                  </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-12 col-lg-3" htmlFor="role">Role:</label>
              <div className="col-12 col-lg-8 offset-lg-1">

                  <select className="form-control fs-4" name="role" id="role" required
                           onChange={handleChange}  value={formData.role} >
                    <option value="">-- Choose role --</option>
                    <option value="admin">Admin</option>
                    <option value="player">Player</option>

                  </select>
              </div>
            </div>
            <div className="d-grid">

                <button 
                    className="btn btn-outline-info btn-lg fs-1 px-5 mt-4 shadow">
                            Add</button>
            </div>
          </form>
      </div>
    )
  }