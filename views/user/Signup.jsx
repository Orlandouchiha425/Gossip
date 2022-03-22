const React=require('react')
class Signup extends React.Component{
  render(){
    return(<div>
      <form action="/user/signup" method="post">
        <fieldset>
          <legend>New User</legend>
          <label>USERNAME: <input type="text" name="username" required /> </label>
          <label>
            PASSWORD: <input type="password" name="password" required />
          </label>
          <fieldset>
            <legend>Email</legend>
            <label>
              Email: <input type='email' name="email"  required/>
            </label>
          </fieldset>
          <input type="submit" value="Create Account" />
        </fieldset>
      </form>
    </div>)
  }
}

module.exports=Signup