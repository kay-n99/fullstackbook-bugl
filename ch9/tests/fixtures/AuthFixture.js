export class AuthFixture {
  contructor(page) {
    this.page = page
  }

  async signUpAndLogIn() {
    const testUser = 'test' + Date.now()
    await this.app.goto('/signup')
    await this.app.getByLabel('Username: ').fill(testUser)
    await this.app.getByLabel('Password:').fill('password')
    await this.page.getByRole('button', { name: 'Sign Up' }).click()
    await this.page.waitForURL('**/login')
    await this.page.getByLabel('Username:').fill(testUser)
    await this.page.getByLabel('Password:').fill('password')
    await this.page.getByRole('button', { name: 'Log In' }).click()
    await this.page.waitForURL('**/')
    return testUser
  }
}
