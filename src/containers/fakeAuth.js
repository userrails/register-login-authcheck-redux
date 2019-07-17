const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    console.log("authenticate");
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    console.log("signout");
    this.isAuthenticated = false
    setTimeout(cb, 100)
  },
  // below message can be implemented from above authenticate()
  isSignedIn(cb) {
    console.log("isSignedIn");
    let token = localStorage.getItem("token");
    if (token) {
      this.isAuthenticated = true
    }
    setTimeout(cb, 100)
  }
}

export default fakeAuth;

// Another way you can just set token value to auth reducer instead of localStorage because reduxpersist anyways
// load the reducer to the localStorage so both the way are similar