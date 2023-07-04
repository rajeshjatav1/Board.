import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='row'>
      <div style={{ height: '98vh', backgroundColor: 'black' }} className="col-4 d-flex justify-content-center align-items-center text-light">
        <h1 style={{ fontSize: '50px' }}>Board.</h1>
      </div>
      <div style={{ backgroundColor: '#f3efef' }} className="col-8 d-flex flex-column justify-content-center align-items-center">
        <div style={{width:'38%'}}>


          <div className='text-start'>
            <div>
              <h2 className='fw-bold'>Sign In</h2>
            </div>
            <div>
              <span>Sign in to your google account</span>
            </div>
            <div className='mt-3 d-flex justify-content-between'>
              <div style={{ width: '49%', fontSize: '14px' }} className="bg-light text-center text-nowrap px-3 py-2 rounded-2 text-muted">Sign in with Google</div>
              <div style={{ width: '49%', fontSize: '14px' }} className="bg-light text-center text-nowrap px-3 py-2 rounded-2 text-muted">Sign in with Apple</div>
            </div>
          </div>
          <div className='mt-3 bg-light px-3 py-3 rounded-3'>
            <form className='rounded-3 w-100'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input style={{ outline: 'none' }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" style={{backgroundColor:'rgb(215,215,216)', display:"flex",border:"none",outline:"none",width:"300px"}} id="exampleInputPassword1" />
              </div>
              <div>
                <a className="text-primary text-decoration-none">Forgot Password</a>
              </div>

              <button style={{backgroundColor:'black'}} type="submit" class="btn rounded-4 text-light w-100 mt-3">Submit</button>
            </form>

          </div>
        </div>

      </div>


    </div>
  );
}

export default App;
