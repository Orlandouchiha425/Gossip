const React =require('react')
class Login extends React.Component{
  render(){
    return(
      <div>
      <form action="/user/login" method="post">
        <fieldset>
          <legend>User Login</legend>
          <label
            >USERNAME: <input type="text" name="username" required  defaultValue="test"/>
          </label>
          <label
            >PASSWORD: <input type="password" name="password" required defaultValue="test"/>
          </label>
          <input type="submit" value="Login" />
        </fieldset>
      </form>
      </div>
    )
  }}

  module.exports=Login

   