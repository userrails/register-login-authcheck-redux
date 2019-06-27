const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  },
  // below message can be implemented from above authenticate()
  isSignedIn(cb) {
    let token = localStorage.getItem("token");
    if (token) {
      this.isAuthenticated = true
    }
    setTimeout(cb, 100)
  }
}

export default fakeAuth;
