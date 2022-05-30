function SetupStep1({currentStep,handleChange}) {
      if (currentStep !== 1) {
        return null;
      } 
      else return(
        <form>
        <label htmlFor="username">Username:</label><br></br>
        <input type="text" name="username" onChange={handleChange}></input>
        <br></br>
        <label htmlFor="password">Password:</label><br></br>
        <input type="password" name="password" onChange={handleChange}></input>
        <br></br>
        <label htmlFor="email">Email:</label><br></br>
         <input type="text" name="email" onChange={handleChange}></input>
         <br></br>
         </form>
      )
   }

export default SetupStep1